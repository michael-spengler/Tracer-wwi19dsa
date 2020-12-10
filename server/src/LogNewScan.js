
/*------------------Frontend------------------*/
/* Input: 
    - set UUID to null
    - get and set Loc_ID from QR-Code
    - get and set timestamp of current time
    
    -send JSON File
    -If no response (e.g. because of no internet connection):
        - save json to /databases/LocalBuffer.json
    -Else:
        - send json and 
*/

function newScan(locID, tracerID) {
    //attributes
    this.locID = locID;
    this.tracerID = tracerID;
    this.currentTime = new Date();
    this.currentTime = this.currentTime.toLocaleTimeString();

    //functions
    this.success = function() {
      console.log('User with id ' + this.tracerID + ' visited ' + this.locID + ' at ' + this.currentTime + '.');
    };
    this.data = function() {
      return {
          locID:this.locID,
          tracerID:this.tracerID,
          currentTime:this.currentTime
        };
    };
  };

let scan1 = new newScan("DHBW Mannheim", 21394124); //generate new scan
scan1.success(); //this should be returned to client
console.log(scan1.data()); //this should be sent to server



/*------------------Backend------------------*/
/*
    - Catch the sent Input
    - generate UUID (This is the primary Key of the JSON)
    - save the UUID, Loc_ID & timestamp to GlobalDatabase.json
    - respond the key of the JSON (UUID) back to the client
*/




function receiveScan (url) {
  fetch(url)
  .then((resp) => resp.json())
  .then(function (data) {
    console.log(JSON.stringify(data));
  });

}






//Front-End:

/* 
    - Catch the sent Output
    - Store it in the LocalDatabse.json (every client has own list)
    - if storing was successful, delete local buffer (else retry)
*/