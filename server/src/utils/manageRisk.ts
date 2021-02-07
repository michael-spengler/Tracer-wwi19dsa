// deno-lint-ignore-file
import {initDB} from "./database.ts";

export async function checkRisk(data:Array<string>){
    //get risk for users where id = *provided id*
    const client = await initDB()
    let riskStatus: number = 0
    const risk = await client.query(`select risk from users where TracerID in ?`, [data]);
    // deno-lint-ignore no-explicit-any
    risk.forEach(function (value:any){
        riskStatus = riskStatus + Number(value.risk)
    });

    console.log(riskStatus)
    await client.close();
    return riskStatus
}


export async function updateRisk(){
    const client = await initDB()

    const riskLocations = await client.query(`select LocID,timestamp from users where status = 1`);

    for (let index = 0; index < riskLocations.length; index++) {
        //console.log("this is the data: ",riskLocations[index].timestamp.toISOString().slice(0, 19).replace('T', ' '))
        const result = await client.execute(`update users set risk = 1 where LocID = "${riskLocations[index].LocID}" 
        and timestamp > "${riskLocations[index].timestamp.toISOString().slice(0, 19).replace('T', ' ')}" - INTERVAL 2 HOUR 
        and timestamp < "${riskLocations[index].timestamp.toISOString().slice(0, 19).replace('T', ' ')}" + INTERVAL 2 HOUR`);    
        //console.log(result);
        }   
    
    await client.close();
}