/* 
Tracer stores variables like status and timestamp of the report in Localbase
checkVariables checks if those variables already exist:
  ->if Not, then a new set of variables is generated
  ->if yes, nothing is changed
  ->if status is true, calculates time passed since testing positive (reporting)
*/
async function checkVariables(db){
  //existieren Variablen?
  let variables = await db.collection("Variables").doc("1").get().then(value => {return(value)})

  const currentTime = new Date();
  var d = 24 * 60 * 60 * 1000;

  //generates new pair of variables in localbase if not already existing
  if (variables == null) {  
      await db.collection("Variables").add(
                      {
                      status: false,
                      timeOfReport: null,
                      risk: 0,
                      lastCheck: "refresh to be up to date",
                      },1);}
  variables = await db.collection("Variables").doc("1").get().then(value => {return(value)}) 

  //If more than 14 days have passed since testing positive (reporting), then status is set back to false
  if (Math.floor((currentTime-variables.timeOfReport)/d)>14){
      await db.collection('Variables').doc('1').update({
        status: false,
        timeOfReport: null,
      })
      console.log("Status = false")
    } else {
        console.log("Time passed since the last report: ",(currentTime-variables.timeOfReport)/d)
    }

  return db
}

export {checkVariables}
