// deno-lint-ignore-file
import {cuid} from "../deps.ts";
import {initDB} from "./database.ts";



//Database connection
export async function storeInDB(tracerID:string, time:string, locID:string, status:boolean, risk:Int16Array){
    const client = await initDB()
    const result = client.execute(`INSERT INTO users(TracerID, timestamp, LocID, status, risk) values(?,?,?,?,?)`, [
        tracerID,
        time,
        locID,
        status,
        risk]);
      await client.close();
}

//store data in mysql db
export function processData(data:any){
    const tracerID:string = cuid();
    const scanData = {
        data : {
        locID : data.locID,
        tracerID : tracerID,
        time : data.currentTime
    },   key : tracerID};

    storeInDB(tracerID, data.currentTime, data.locID, data.status, data.risk)
    return scanData 
}
