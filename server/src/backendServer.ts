/*------------------Set-Up Server------------------*/
import { opine, serveStatic } from "https://deno.land/x/opine@0.25.0/mod.ts";
import { writeJson, writeJsonSync } from 'https://deno.land/x/jsonfile/mod.ts';

let counter = 0;

const app = opine();

app.use(serveStatic(`${Deno.cwd()}/server/src/`))

const pathToFile = `${Deno.cwd()}/server/src/client.html`

app.get('/', function (req, res) {

    counter = counter + 1 
    console.log(`The Webpage has been called ${counter} times.`)
    res.sendFile(pathToFile)
});

app.get('/Tracer/:data', function (req, res) {
    const jsonData = JSON.parse(req.params.data);
    //const tracerID:string = req.params.tracerID;
    //const currentTime:string = req.params.currentTime;
    storeData(jsonData)
    console.log(jsonData)
    res.json(jsonData)
    res.setStatus(201)
});

app.listen(3000, function () {
    console.log('Tracer Server is listening on Port 3000!')
});


/*------------------Server-Side------------------*/
/*
    - Catch the sent Input
    - generate UUID (This is the primary Key of the JSON)
    - save the UUID, Loc_ID & timestamp to GlobalDatabase.json
    - respond the key of the JSON (UUID) back to the client
*/

function storeData(data:any){
    writeJsonSync('./server/src/databases/GlobalDatabase.json', data, { append: true });
    //generate uuid etc.
}