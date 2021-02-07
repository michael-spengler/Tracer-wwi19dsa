import {Client} from "../deps.ts";



export async function initDB() {
    //
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

    return client
}
