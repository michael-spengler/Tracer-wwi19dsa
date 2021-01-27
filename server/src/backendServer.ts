/*------------------Server-Side------------------*/
/*
    - Catch the sent Input
    - generate UUID (This is the primary Key of the JSON)
    - save the UUID, Loc_ID & timestamp to GlobalDatabase.json
    - respond the key of the JSON (UUID) back to the client
*/

/*------------------Set-Up Server------------------*/
import { opine, serveStatic } from "https://deno.land/x/opine@0.25.0/mod.ts";
import { writeJsonSync } from 'https://deno.land/x/jsonfile/mod.ts';
import { readJsonSync } from "https://deno.land/x/jsonfile/mod.ts";
import { cuid } from 'https://deno.land/x/cuid/index.js';
import { Client } from 'https://deno.land/x/mysql/mod.ts';
import { setColorEnabled } from "https://deno.land/std@0.77.0/fmt/colors.ts";


let counter = 0; //Website calls 

//DB connection
const client = await new Client().connect({ 
    hostname: "127.0.0.1",
    username: "root",
    poolSize: 3,
    password: "",
  });

//
await client.execute(`CREATE DATABASE IF NOT EXISTS TracerDB`);
await client.execute(`USE TracerDB`);

//
await client.execute(`
    CREATE TABLE IF NOT EXISTS users (
        TracerID varchar(100) NOT NULL,
        timestamp timestamp NOT NULL,
        LocID varchar(100) NOT NULL,
        status BOOL NOT NULL,
        risk varchar(100) NOT NULL,
        PRIMARY KEY (TracerID)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8;
`);

//
const app = opine();

app.use(serveStatic(`${Deno.cwd()}/server/src/`))

const pathToFile = `${Deno.cwd()}/server/src/client.html`

app.get('/', function (req, res) {

    counter = counter + 1 
    console.log(`The Webpage has been called ${counter} times.`)
    res.sendFile(pathToFile)
});

//receiveScan.js sends data via /Tracer/:data → backend stores :data in GlobalDatabase.json → responds with tracerID
app.get('/Tracer/:data', function (req, res) {
    const jsonData = JSON.parse(req.params.data);
    const globalJsonData = storeData(jsonData);
    console.log(globalJsonData);
    res.setStatus(201)
    res.json({"key": globalJsonData.key, "time": globalJsonData.data.time});
});

//receive list of ids
app.get('/Report/:case', function (req, res) {
    const reqData = JSON.parse(req.params.case);
    console.log(reqData.id)
    setStatus(reqData.id)
    res.setStatus(201)
    res.json({"status": "success"});
});

//deploy
app.listen(3000, function () {
    console.log('Tracer Server is listening on Port 3000!')
});

//Database connection
function storeDataDB(tracerID:string, time:string, locID:string, status:boolean, risk:Int16Array){
    let result = client.execute(`INSERT INTO users(TracerID, timestamp, LocID, status, risk) values(?,?,?,?,?)`, [
        tracerID,
        time,
        locID,
        status,
        risk]);
      console.log(result);
};

//store data in mysql
function storeData(data:any){
    const tracerID:any = cuid();
    const globalJsonData = {
        data : {
        locID : data.locID,
        tracerID : tracerID,
        time : data.currentTime
    },   key : tracerID};
    console.log(data.status)
    //add to database - deactivate the following line if no mySQL DB is up
    storeDataDB(tracerID, data.currentTime, data.locID, data.status, data.risk)

    //backup to .json file
    const GlobalDatabase:any = readJsonSync("./server/src/databases/GlobalDatabase.json");
    GlobalDatabase.push(globalJsonData)
    writeJsonSync('./server/src/databases/GlobalDatabase.json', GlobalDatabase, { spaces : 2});
    return globalJsonData 
}

function setStatus(data:Array<string>){
    let dataVal: string = data[0];
    console.log("this is the data: ",dataVal)
    let result = client.query(`update users set status = 1 where TracerID = "${dataVal}"`);
    console.log(result);
/*

this currently changes one item in the list. Try if one can loop for every item in data and remove every item manually

*/
}


/*

Remove all entries older than 14 Days -> Select * from users where timestamp > current_timestamp() - INTERVAL 14 DAY; 

*/