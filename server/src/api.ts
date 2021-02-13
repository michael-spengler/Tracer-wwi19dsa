/*
    - Catch the sent Input
    - generate UUID (This is the primary Key of the JSON)
    - save the UUID, Loc_ID & timestamp to GlobalDatabase.json
    - respond the key of the JSON (UUID) back to the client
*/
/*------------------Set-Up Server------------------*/

import {opine, serveStatic} from "./deps.ts";
import {opineCors} from "./deps.ts";
import {scanData, storedData} from "./utils/interfaces.ts";
import {storeData} from "./utils/manageDatabase.ts";
import {setStatus} from "./utils/manageStatus.ts";
import {checkRisk, updateRisk} from "./utils/manageRisk.ts";

/*
Establish routing and enable Cors to allow access to different ports
*/
const router = opine();
router.use(opineCors())
router.use(serveStatic(`${Deno.cwd()}/server/src/`));

/* 
Forwards to a simple html site for debugging purposes
*/
router.get('/', async function (req, res) {
    const homeScreen = `${Deno.cwd()}/server/src/devClient.html`

    await updateRisk()

    res.sendFile(homeScreen)
});

/*
Client sends locID,tracerID and timestamp via fetch request in JSON format
Backend stores data in MySql DB and responds with TracerID and time
*/
router.get('/Tracer/:data', async function (req, res) {
    const scanData:scanData = JSON.parse(req.params.data);
    const storedScanData = await storeData(scanData)

    console.log(storedScanData);
    await updateRisk();
    
    res.setStatus(201)
    res.json({"key": storedScanData.key, "time": storedScanData.data.time});
});

/* 
Client sends list of IDs via fetch request 
Backend changes their status to 1 and updates risk status in DB
*/
router.get('/Report/:ids', async function (req, res) {
    const riskIDs = JSON.parse(req.params.ids);
    
    if (riskIDs.id.length == 0) {

        res.setStatus(201)
        res.json({"status": "success"});
    } else {
        console.log(riskIDs.id)
        await setStatus(riskIDs.id)
        await updateRisk()

        res.setStatus(201)
        res.json({"status": "success"});
    }
});

/* 
Client sends list of IDs
Backend checks their risk value 
and returns the risk status as an Integer
*/
router.get('/RiskCheck/:ids', async function (req, res) {
    const checkIDs = await JSON.parse(req.params.ids);
    
    if (checkIDs.id.length == 0) {
        const riskScore = 0

        res.setStatus(201)
        res.json({"status": "success", "risk": riskScore});
    } else {
        const riskScore = await checkRisk(checkIDs.id)

        res.setStatus(201)
        res.json({"status": "success", "risk": riskScore});
    }
});

/* 
Deployment of the Deno backend server
*/
router.listen(3000, function () {
    console.log('Tracer Server is listening on Port 3000!')
});