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


- [x] set locID & timestamp
- [ ] store locID & timestamp in ./databases/LocalBuffer.json
- [x] send locID & timestamp via url (get)
- [x] generate cuid
- [x] store locID, cuid & timestamp in ./databases/GlobalDatabase.json
- [x] return cuid to client
- [ ] receive and store cuid in ./databases/LocalDatabase.json and clear ./databases/LocalBuffer.json


<img src="./ressources/TracerDB_demo.gif" width="750"/>


____