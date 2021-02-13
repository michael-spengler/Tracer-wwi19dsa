/* 
gets all IDs stored in Localbase and reports them to server
changes status to ture (infected)
*/
async function reportCase(db){
  var idList = [];
  
  //changing status variable
  await db.collection('Variables').doc('1').update({
    status: true,
    timeOfReport: new Date(),
  })

  //fetch IDs from Localbase and report them to server
  db.collection('TracerID').get()
  
  .then(TracerID => {
      TracerID.forEach(scanData => {
        idList.push(scanData.id)
      });
      return idList
    })
    
  .then(idList =>
    fetch(`http://localhost:3000/Report/${JSON.stringify({"id":idList})}`).then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Something went wrong, try again later.');
      }
    })
  )
}

export {reportCase}