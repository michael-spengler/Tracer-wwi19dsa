import {backendURL} from "./variables.js"

/* 
- collects all locally stored TracerIDs
- sends them to backend to check risk
- risk status is then stored in localbase "Variables" collection
*/
async function checkRisk(db) {
    var idList = [];
    
    const tracerID = await db.collection("TracerID").get()
      
    tracerID.forEach((element) => {
      idList.push(element.id);
    });
    var response = await fetch(`${backendURL}/RiskCheck/${JSON.stringify({ id: idList })}`)
    
    if (response.ok) {
      const responseValues = await response.json()

      await db.collection('Variables').doc('1').update({
        lastCheck: new Date().toString().slice(4, 24),
        risk: await responseValues.risk,
      })
    } else {
      throw new Error("Connection error, try again later.");

    }
  }

export {checkRisk}