import {initDB} from "./database.ts";

/* 
SetStatus receives an array of IDs 
 -> runs a SQL query to set their status to 1
Status represents the health status of the user
*/
export async function setStatus(data:Array<string>){
    const client = await initDB()
    const result = await client.execute(`update users set status = 1 where TracerID in ?`, [data]);    

    await client.close();
}