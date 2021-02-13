import Localbase from 'localbase';


/* 
initiates Localbase, a persistent client-side storage
*/
function initDB(){
    const db = new Localbase("TracerDB");
    return db
}

export {initDB}