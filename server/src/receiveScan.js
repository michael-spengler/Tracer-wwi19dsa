/*------------------Client-Side------------------*/

let db = new Localbase("TracerDB"); //creates local Database

//newScan creates a new scan instance with given locID(from QR-Code; @Frontend)

function newScan(locID) {
  //attributes
  this.locID = locID;
  this.currentTime = new Date().toISOString().slice(0, 19).replace('T', ' ');
  this.status = false;
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
      status: this.status
    };
  };
}

function storeScan(locID){
    let scan = new newScan(locID);
    
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

function reportCase(){
    console.log("Reporting Case... ")
    var idList = [];
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
