/*------------------Client-Side------------------*/

let db = new Localbase("TracerDB"); //creates local Database

async function checkVariables(){
let variables = await db.collection("Variables").doc("1").get().then(value => {return(value)})
let currentTime = new Date();
var d = 24 * 60 * 60 * 1000;
console.log((currentTime-variables.timeOfReport)/d)
if (variables == null) {
  db.collection("Variables").add(
    {
      status: false,
      timeOfReport: null
    },1);}

//checks time passed since timeOfReport and sets back the status if it exceeded 14 days
if (Math.floor((currentTime-variables.timeOfReport)/d)>14){
  await db.collection('Variables').doc('1').update({
    status: false,
    timeOfReport: null,
  })
  console.log("Status set back to false!")
}

}
checkVariables()

//newScan creates a new scan instance with given locID(from QR-Code; @Frontend)
 function newScan(locID, status) {

  //attributes
  this.locID = locID;
  this.currentTime = new Date().toISOString().slice(0, 19).replace('T', ' ');
  this.status =  status;
  this.risk = 0;
  //this.avgTime = 1 min;
  //this.currentTime = this.currentTime.toLocaleTimeString();

  //functions
  this.success = function () {
    console.log("User visited " + this.locID + " at " + this.currentTime + ".");
  };
  this.data = function () {
    return {
      locID: this.locID,
      currentTime: this.currentTime,
      risk: this.risk,
      status: this.status //get status from collection in local DB
    };
  };
}

 async function storeScan(locID){
    let status = await db.collection('Variables').doc('1').get().then(variables => {return(variables.status)});
    let scan = new newScan(locID, status);
    //console.log(scan.data())
    db.collection("Buffer").add(
        {
          locID: scan.data().locID,
          currentTime: scan.data().currentTime,
          status: scan.data().status,
          risk: scan.data().risk
        }, scan.data().locID)
        .then(response => {
            clearBuffer()
          })
        .catch(error => {
        console.log('There was an error.')
        })
}

function clearBuffer() {
            console.log("Send to server...")
            db.collection('Buffer').get().then(buffer => {
                if (buffer.length == 0) {
                    console.log("Up to date.")
                } else {
                    $.each(buffer, function(i,val){
                        sendData(val, val.locID)
                        console.log("sending: ",val)
                    })
                }   
              })
}

function sendData(scanData, key) {
    
    fetch(`/Tracer/${JSON.stringify(scanData)}`).then((response) => {
        if (response.ok) {
          console.log("Data was successfully added to server.")
          db.collection("Buffer").doc(key).delete()
          return response.json();
        } else {
          throw new Error('Something went wrong, try again later.');
        }
      })
      .then((data) => {
        db.collection("TracerID")
          .add(
            {
              id: data.key,
              time: data.time,
            },
            data.key
          );
      })
      .catch((error) => {
        console.log(error)
      });
}

async function reportCase(){
    console.log("Reporting Case... ")
    var idList = [];

    //changing status variable
    //Add if clause here to avoid triggering status = true when no ids available
    await db.collection('Variables').doc('1').update({
      status: true,
      timeOfReport: new Date(),
    })

    //reporting cases to db
    db.collection('TracerID').get().then(TracerID => {
        $.each(TracerID, function(i, val){
          idList.push(val.id)
        })
        return idList
      }).then(idList =>
        fetch(`/Report/${JSON.stringify({"id":idList})}`).then((response) => {
          if (response.ok) {
            console.log("Case was successfully reported.")
            return response.json();
          } else {
            throw new Error('Something went wrong, try again later.');
          }
        })
      )
}

  //hole alle lokalen ids
  //checke risiko im backend
  //get all entries where risiko = 1 und id = [id liste]
  //len der liste = anzahl pot. risikobegegnungen


async function checkRisk(){
  console.log("Checking risk... ")
  var idList = [];

  //reporting cases to db
  db.collection('TracerID').get().then(TracerID => {
      $.each(TracerID, function(i, val){
        idList.push(val.id)
      })
      return idList
    }).then(idList =>
      fetch(`/RiskCheck/${JSON.stringify({"id":idList})}`).then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Something went wrong, try again later.');
        }
      }).then(response => {console.log("Current risk:",response.risk)})
    )
}