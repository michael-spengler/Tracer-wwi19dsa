/*------------------Server-Side------------------*/
/*
    - Catch the sent Input
    - generate UUID (This is the primary Key of the JSON)
    - save the UUID, Loc_ID & timestamp to GlobalDatabase.json
    - respond the key of the JSON (UUID) back to the client
*/
/*------------------Set-Up Server------------------*/

import {opine, serveStatic} from "./deps.ts";
import { opineCors } from "./deps.ts";
import {processData} from "./utils/manageDatabase.ts";
import {setStatus} from "./utils/manageStatus.ts";
import {checkRisk, updateRisk} from "./utils/manageRisk.ts";


const router = opine();
router.use(opineCors())
router.use(serveStatic(`${Deno.cwd()}/server/src/`));

//Forwards to a sample html site for debug purposes
router.get('/', function (req, res) {
    updateRisk()
    const homeScreen = `${Deno.cwd()}/server/src/client.html`
    console.log(`Connected.`)
    res.sendFile(homeScreen)
});

//Frontend sends data via localhost:3000/Tracer/:data → backend stores the date in MySql db → responds with TracerID and time
router.get('/Tracer/:data', async function (req, res) {
    //updateRisk(client)
    const scanData = JSON.parse(req.params.data);
    const storedScanData = await processData(scanData);
    await updateRisk();
    console.log(storedScanData);
    res.setStatus(201)
    res.json({"key": storedScanData.key, "time": storedScanData.data.time});
});

//receive list of ids, changes their status to 1 and changes all occurrences to risk = 1
router.get('/Report/:ids', async function (req, res) {
    const riskIDs = JSON.parse(req.params.ids);
    console.log(riskIDs.id)
    await setStatus(riskIDs.id)
    await updateRisk()
    res.setStatus(201)
    res.json({"status": "success"});
});

//receive list of ids, check their risk value
    router.get('/RiskCheck/:ids', async function (req, res) {
    // await updateRisk()
    const checkIDs = JSON.parse(req.params.ids);
    const riskStatus = await checkRisk(checkIDs.id)
    res.setStatus(201)
    res.json({"status": "success", "risk": riskStatus});
});


//deploy
router.listen(3000, function () {
    updateRisk()
    console.log('Tracer Server is listening on Port 3000!')
});