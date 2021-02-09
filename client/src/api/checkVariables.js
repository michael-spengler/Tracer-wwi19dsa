async function checkVariables(db){
let variables = await db.collection("Variables").doc("1").get().then(value => {return(value)})

const currentTime = new Date();
var d = 24 * 60 * 60 * 1000;

if (variables == null) {  
    await db.collection("Variables").add(
                    {
                    status: false,
                    timeOfReport: null
                    },1);}
    variables = await db.collection("Variables").doc("1").get().then(value => {return(value)}) 


    if (Math.floor((currentTime-variables.timeOfReport)/d)>14){
        await db.collection('Variables').doc('1').update({
          status: false,
          timeOfReport: null,
        })
        console.log("Status = false")
      } else {
          console.log((currentTime-variables.timeOfReport)/d)
      }

return db
}

export {checkVariables}
