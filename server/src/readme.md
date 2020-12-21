Backend w/ Deno
====== 

to run the server use: __deno run --allow-net --allow-read --allow-write --allow-env --unstable ./server/src/backendServer.ts__
→ server runs on __localhost:3000__

Dependencies 
------

1. Opine
2. Jsonfile
3. cuid

1_Log_New_Scan
------
(server-side code is complete, some client-side code is yet to be implemented)
* [X]~~set locID & timestamp~~
* [ ]store locID & timestamp in ./databases/LocalBuffer.json
* [X]~~send locID & timestamp via url (get)~~
* [X]~~generate cuid~~
* [X]~~store locID, cuid & timestamp in ./databases/GlobalDatabase.json~~
* [X]~~return cuid to client~~
* [X]receive and store cuid in ./databases/LocalDatabase.json and clear ./databases/LocalBuffer.json

