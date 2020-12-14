/*------------------Client-Side------------------*/
/* Input: 
    - get and set Loc_ID from QR-Code
    - get and set timestamp of current time
    
    -send JSON File
    -If no response (e.g. because of no internet connection):
        - save json to /databases/LocalBuffer.json
        - 
    -Else:
        - send json from LocalBuffer.json and store received response (cuid) in LocalDatabase.json
*/

function newScan(locID, tracerID) {
//attributes
this.locID = locID;
this.currentTime = new Date();
this.currentTime = this.currentTime.toLocaleTimeString();

//functions
this.success = function() {
console.log('User visited ' + this.locID + ' at ' + this.currentTime + '.');
};
this.data = function() {
return {
    locID : this.locID,
    currentTime : this.currentTime,
    };
};
};

function sendData() {
  let scan1 = new newScan("DHBW Mannheim", 21394124); //generate new scan
  //location.href = `/Tracer/${encodeURIComponent(scan1.data().locID)}/${encodeURIComponent(scan1.data().tracerID)}/${encodeURIComponent(scan1.data().currentTime)}`;
  location.href = `/Tracer/${JSON.stringify(scan1.data())}`;
  };


/* 
    - Catch the response
    - Store it in the LocalDatabse.json (every client has own list)
    - if storing was successful, delete local buffer (else retry later)
*/