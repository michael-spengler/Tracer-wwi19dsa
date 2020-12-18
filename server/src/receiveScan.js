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

var myKeys = [];
localStorage.setItem('myKeys', myKeys);


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
function appendToStorage(name, data){
    var old = localStorage.getItem(name);
    if(old === null) old = "";
    localStorage.setItem(name, old + data);
};

function sendData() {
  let scan1 = new newScan("DHBW Mannheim", 21394124); //generate new scan

  fetch(`/Tracer/${JSON.stringify(scan1.data())}`).then(
    results => results.json()
    ).then(function(data) {
        myKeys.push(data)
        console.log(myKeys)
    })
    };


/* 
    - Catch the response via get request
    - Store it in the LocalDatabse.json (every client has own list)
    - if storing was successful, delete local buffer (else retry later)
*/