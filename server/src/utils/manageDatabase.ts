import {cuid} from "../deps.ts";
import {initDB} from "./database.ts";
import {scanData, storedData} from "./interfaces.ts";

/* 
receives data from client in the scanData format
 -> generates a collision-free unique user ID (cuid)
 -> passes ID together with the remaining scanData to server via SQL INSERT
 -> returns the stored Data as object
*/
export async function storeData(data:scanData){
    const client = await initDB()
    const tracerID:string = cuid();
    const storedScanData:storedData = {
                data : {
                        locID : data.locID,
                        tracerID : tracerID,
                        time : data.currentTime
                        },
                key : tracerID};

    client.execute(`INSERT INTO users(TracerID, timestamp, LocID, status, risk) values(?,?,?,?,?)`, [
        tracerID,
        data.currentTime,
        data.locID,
        data.status,
        data.risk]);

    return storedScanData 
}
