// deno-lint-ignore-file
import {initDB} from "./database.ts";


export async function setStatus(data:Array<string>){
    const client = await initDB()
    for (let index = 0; index < data.length; index++) {
        //console.log("this is the data: ",data)
        const result = await client.execute(`update users set status = 1 where TracerID = "${data[index]}"`);    
    }

    await client.close();

/* Comment: This does the job but might lead to performance problems as SQL Statement is called for every single occurrence 
look into ...where TracerID in ? for batch*/
}