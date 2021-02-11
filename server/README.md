# Tracer - Backend

to run the server use:

```bash
docker container run --rm -d -p 3306:3306 -e MYSQL_ALLOW_EMPTY_PASSWORD=true docker.io/mariadb:latest


deno run --allow-net --allow-read --allow-write --allow-env --unstable ./server/src/api.ts 
//server runs on localhost:3000
```

Instead of using the docker container, you can also use a local mysql database:

- __brew services start mysql__
- __mysql -u root -p__

## Dependencies


1. Opine
2. Jsonfile
3. cuid
4. [Localbase](https://github.com/dannyconnell/localbase)
5. Jquery

## 1_Log_New_Scan

- [x] set locID & timestamp
- [x] store locID & timestamp in ~~./databases/LocalBuffer.json~~ [indexedDB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API) database
- [x] send locID & timestamp via url (get)
- [x] generate cuid
- [x] store locID, cuid & timestamp in ./databases/GlobalDatabase.json
- [x] return cuid to client
- [x] store data in indexedDB database first and clear entry after response from server (offline functionality)

<img src="./ressources/TracerDB_demo.gif" width="750"/>

## Report Case

1. [x] Button to report (no verification)
2. [x] Send list of IDs (From local DB) to backend
3. [x] In Backend, set status = positive for all IDs
    > difficulties: asynchronous processing of IDs
4. [x] Set a status variable in client side to true
    - Instead of status variable, maybe just key in object?
    - Create a timeOfStatus variable with the timestamp of the date of test -> continuously test if it is less than 14 days
5. [x] As long as variable is true, write status = positive in new scans
    - Check after each visit if variable is < (today - 14 days)
    - If no: Alert(you shouldn‘t go outside!)
6. [wip] Delete old entries (>14) from localbase in client
7. [wip] Delete old entries (>14) from MySQL Database
    > add function on page reload where a sql statement deletes all entries where timestamp > 14 days

## Risk status

1. [x] After setting status = positive, set for all visits within timerange +- 2 in the same location the risk to 1

## Check risk

1. [x] Pass all IDs from localDB
2. [x] Select user.risk where user.id = [ID1, ..., IDn]
3. [x] 0 = low risk, else 1 (n) possible encounter.
