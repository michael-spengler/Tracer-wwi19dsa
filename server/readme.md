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
- [x] store locID & timestamp in ~~./databases/LocalBuffer.json~~ indexedDB database
- [x] send locID & timestamp via url (get)
- [x] generate cuid
- [x] store locID, cuid & timestamp in ./databases/GlobalDatabase.json
- [x] return cuid to client
- [ ] store data in indexedDB database first and clear entry after response from server (offline functionality)

<img src="./ressources/TracerDB_demo.gif" width="750"/>


____