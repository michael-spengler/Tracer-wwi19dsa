import $ from 'jquery'

    //newScan creates a new scan instance with given locID(from QR-Code; @Frontend)
function newScan(locID, status) {

    //attributes
    this.locID = locID;
    this.currentTime = new Date().toISOString().slice(0, 19).replace('T', ' ');
    this.status =  status;
    this.risk = 0;
    //this.avgTime = 1 min;

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

async function storeScan(db, locID){
    const status = await db.collection('Variables').doc('1').get().then(variables => {return(variables.status)});
    const scan = new newScan(locID, status);
    //console.log(scan.data())
    db.collection("Buffer").add(
        {
        locID: scan.data().locID,
        currentTime: scan.data().currentTime,
        status: scan.data().status,
        risk: scan.data().risk
        }, scan.data().locID)
        .then(response => {
            console.log(response)
            clearBuffer(db)
        })

        .catch(error => {
        console.log(error)
        console.log('There was an error.')
        })
}

async function clearBuffer(db) {
            console.log("Send to server...")
            await db.collection('Buffer').get().then(buffer => {
                if (buffer.length == 0) {
                    console.log("Up to date.")
                } else {
                    $.each(buffer, function(i,val){
                        sendData(db, val, val.locID)
                        console.log("sending: ",val)
                    })
                }   
            })
}

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