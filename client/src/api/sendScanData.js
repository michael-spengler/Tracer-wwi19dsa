
/* 
newScan creates new instance scanData with given locID (from QR-Code) and status (from Variables)
*/
function newScan(locID, status) {
    //attributes
    this.locID = locID;
    this.currentTime = new Date().toISOString().slice(0, 19).replace('T', ' ');
    this.status =  status;
    this.risk = 0;

    //methods
    this.data = function () {
        return {
            locID: this.locID,
            currentTime: this.currentTime,
            risk: this.risk,
            status: this.status //get status from collection in local DB
        };
    };
}

/* 
storeScan receives a location ID and creates a new scan instance
 -> it then stores the scan instance in the buffer for offline functionality
 -> after data is secured in buffer, the buffer tries to send data to server
*/
async function storeScan(db, locID){
    const status = await db.collection('Variables').doc('1').get().then(variables => {return(variables.status)});
    const scan = new newScan(locID, status);

    await db.collection("Buffer").add(
        {
        locID: scan.data().locID,
        currentTime: scan.data().currentTime,
        status: scan.data().status,
        risk: scan.data().risk
        },
        scan.data().locID)

    await clearBuffer(db)
}

/* 
Because buffer is a safety net in case no interent connection exists,
it must be cleared whenever an internet connection exists.
 -> It loads scanned data from the Buffer table in localbase
 -> tries to send each data to server
  -> if data is received successfully, buffer is cleared
  -> else, data remains in buffer
*/
async function clearBuffer(db) {
            console.log("Send to server...")
            await db.collection('Buffer').get().then(buffer => {
                if (buffer.length == 0) {
                    console.log("Up to date.")
                } else {
                    buffer.forEach(scanData => {
                        sendData(db, scanData, scanData.locID)
                        console.log("sending: ",scanData)
                    });
                }   
            })
}

/*
sendData sends data via fetch request to deno server
server responds with 201 if data was successfully added to the MySQL DB
server returns the generated TracerID and the timestamp
 -> these values are stored in Localbase for further checks, reports etc.
*/
function sendData(db, scanData, key) {    
    fetch(`http://localhost:3000/Tracer/${JSON.stringify(scanData)}`).then((response) => {
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

export {storeScan, clearBuffer, sendData, newScan}