/*------------------Server-Side------------------*/
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