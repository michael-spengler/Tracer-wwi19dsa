import Localbase from 'localbase';

let db = new Localbase("TracerDB"); //creates local Database

async function checkVariables(){
//let db = new Localbase("TracerDB"); 
let variables = await db.collection("Variables").doc("1").get().then(value => {return(value)})
let currentTime = new Date();
var d = 24 * 60 * 60 * 1000;

if (variables == null) {  
    db.collection("Variables").add(
        {
        status: false,
        timeOfReport: null
        },1);}

//checks time passed since timeOfReport and sets back the status if it exceeded 14 days
/*if (currentTime != null){
    if (Math.floor((currentTime-variables.timeOfReport)/d)>14){
    await db.collection('Variables').doc('1').update({
        status: false,
        timeOfReport: null,
            })
    console.log("Status = false")
        }   
    }*/
    if (Math.floor((currentTime-variables.timeOfReport)/d)>14){
        console.log(2)
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
