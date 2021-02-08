import $ from 'jquery'


async function reportCase(db){
    console.log("Reporting Case... ")
    var idList = [];
    
    //changing status variable
    //Add if clause here to avoid triggering status = true when no ids available
    await db.collection('Variables').doc('1').update({
      status: true,
      timeOfReport: new Date(),
    })
    console.log(1)

    //reporting cases to db
    db.collection('TracerID').get().then(TracerID => {
        $.each(TracerID, function(i, val){
          idList.push(val.id)
        })
        return idList
      }).then(idList =>
        fetch(`http://localhost:3000/Report/${JSON.stringify({"id":idList})}`).then((response) => {
          if (response.ok) {
            console.log("Case was successfully reported.")
            return response.json();
          } else {
            throw new Error('Something went wrong, try again later.');
          }
        })
      )
}

export {reportCase}