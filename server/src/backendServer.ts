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

app.post('/user', function (ctx){
    
});

//deploy
app.listen(3000, function () {
    console.log('Tracer Server is listening on Port 3000!')
});

//Database connection
function storeDataDB(tracerID:string, time:string, locID:string){
    let result = client.execute(`INSERT INTO users(TracerID, timestamp, LocID) values(?,?,?)`, [
        tracerID,
        time,
        locID]);
      console.log(result);
};

function storeData(data:any){
    const tracerID:any = cuid();
    const globalJsonData = {
        data : {
        locID : data.locID,
        tracerID : tracerID,
        time : data.currentTime
    },   key : tracerID};
    //add to database - deactivate the following line if no mySQL DB is up
    storeDataDB(tracerID, data.currentTime, data.locID)

    //backup to .json file
    const GlobalDatabase:any = readJsonSync("./server/src/databases/GlobalDatabase.json");
    GlobalDatabase.push(globalJsonData)
    writeJsonSync('./server/src/databases/GlobalDatabase.json', GlobalDatabase, { spaces : 2});
    return globalJsonData 
}




