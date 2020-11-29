import { cuid } from 'https://deno.land/x/cuid/index.js';
import { Persistence } from "https://deno.land/x/persistence@1.1.0/persistence.ts"

interface ILocationAndId {
    location: string
    id: string
}

const projectPathForData = `${Deno.cwd()}/data/locations.json`
const locationsAndIds: ILocationAndId[] = JSON.parse(await Persistence.readFromLocalFile(projectPathForData))

async function generateHash() {
    
    const locationAndId = {
        location: "Edeka Mannheim",
        id: cuid()
    }

    locationsAndIds.push(locationAndId)

    // store it to db
    console.log(`storing the following id to location: ${locationAndId.location} with the following id: ${locationAndId.id}`)

    await Persistence.saveToLocalFile(projectPathForData, JSON.stringify(locationsAndIds))
}

await generateHash()