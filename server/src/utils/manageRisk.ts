import {initDB} from "./database.ts";

/* 
checkRisk receives an array of IDs
 -> runs a SQL query to get risk values of occurrences
 -> calculates and returns riskScore by adding risk values
*/
export async function checkRisk(data:Array<string>){
    const client = await initDB()
    const risk = await client.query(`select risk from users where TracerID in ?`, [data]);
    let riskScore: number = 0

    risk.forEach(function (value:{risk: Int16Array}){
        riskScore = riskScore + Number(value.risk)
    });

    await client.close();
    return riskScore
}

/* 
updateRisk updates risk value for all risky encounters
 -> runs a SQL query to determin location & timestamp of covid positive users
 -> entries that happened before incubation period (at most 14 days) are deleted
 -> sets risk = 1 for every user that was in the location at the same timestamp 
    (within possible incubation period)
*/
export async function updateRisk(){
    const client = await initDB()
    const riskLocations = await client.query(`select LocID,timestamp from users where status = 1`);

    await client.execute(
        `DELETE FROM users WHERE timestamp < (CURRENT_TIMESTAMP() - INTERVAL 15 DAY)`);

    for (let index = 0; index < riskLocations.length; index++) { 
        const timestamp = riskLocations[index].timestamp.toISOString().slice(0, 19).replace('T', ' ')
        const avgTime =  Number(riskLocations[index].LocID.split(":")[1])

        const result = await client.execute(
        `update users set risk = 1 where LocID = "${riskLocations[index].LocID}" 
        and timestamp > "${timestamp}" - INTERVAL ${avgTime + 60} MINUTE 
        and timestamp < "${timestamp}" + INTERVAL ${avgTime + 60} MINUTE`); // +1 Hour for CET time zone
        }

    await client.close();
}