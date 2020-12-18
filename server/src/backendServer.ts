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

let counter = 0;

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
    res.json(globalJsonData.key);
});

app.post('/user', function (ctx){
    
});

/*app.post('/test', function (req, res) {
    res.send("POST request to homepage");
  });*/

app.listen(3000, function () {
    console.log('Tracer Server is listening on Port 3000!')
});

function storeData(data:any){
    const tracerID:any = cuid();
    const globalJsonData = {
        data : {
        locID : data.locID,
        tracerID : tracerID,
        currentTime : data.currentTime
    },   key : tracerID};
    const GlobalDatabase:any = readJsonSync("./server/src/databases/GlobalDatabase.json");
    GlobalDatabase.push(globalJsonData)
    writeJsonSync('./server/src/databases/GlobalDatabase.json', GlobalDatabase, { spaces : 2});
    return globalJsonData 
}