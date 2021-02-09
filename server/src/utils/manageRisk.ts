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
        
        let timestamp = riskLocations[index].timestamp.toISOString().slice(0, 19).replace('T', ' ')
        // let location =  riskLocations[index].LocID.split(":")[0]
        let avgTime =  Number(riskLocations[index].LocID.split(":")[1])

        const result = await client.execute(`update users set risk = 1 where LocID = "${riskLocations[index].LocID}" 
        and timestamp > "${timestamp}" - INTERVAL ${avgTime + 60} MINUTE 
        and timestamp < "${timestamp}" + INTERVAL ${avgTime + 60} MINUTE`);    
        //console.log(result);
        }   
    
    await client.close();
}