async function checkRisk(db){
    console.log("Checking risk... ")
    var idList = [];

    //reporting cases to db
    db.collection('TracerID').get().then(TracerID => {
        $.each(TracerID, function(i, val){
          idList.push(val.id)
        })
        return idList
      }).then(idList =>
        fetch(`http://localhost:3000/RiskCheck/${JSON.stringify({"id":idList})}`).then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error('Something went wrong, try again later.');
          }
        }).then(response => {console.log("Current risk:",response.risk)})
      )
  }

export {checkRisk}