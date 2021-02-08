import Localbase from 'localbase';



function initDB(){
    let db = new Localbase("TracerDB");
    return db
}

export {initDB}