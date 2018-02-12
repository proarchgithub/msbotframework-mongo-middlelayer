I created video  which demonstrate how You can store session and user data into mongo db 
Find here [https://youtu.be/S0oO81oG2GY](https://youtu.be/S0oO81oG2GY)

Note:I changed code and put into npm directory.

##NPM

[https://www.npmjs.com/package/botbuilder-mongodb](https://www.npmjs.com/package/botbuilder-mongodb)

npm install --save botbuilder-mongodb@3.0.9

You can find npm code into directory called npm_Code

##BotBuilder-MongoDB
Bot builder with Mongo Db(custom storage )

## Introduction 
This example code is written to show how we can store our bot session data into MongoDb

## Motivation
Microsoft bot builder bydefault store data  internally in Microsoft storage which have 64 Kb size limit per user.Other option to store data is Microsoft Azure Table and Microsoft Document Db.which doesn't have any data limit per user.
Alternet solution is MongoDb.Installing mongdb in one server and storing our data in mongo db is much much chipper.
So inorder to store session data into Mongo Db i implemented IstorageClient Interface.


## How to use
step 1)   First you need to install node js and npm
step 2) > npm install 
step 3) provide configuartion(MongoDb ip,Collection Name,Database name) on mongoOptions (Check app.js)
Step 4) > node app.js (It will create collection automaticallly)

Note:If you are testing bot other then Emulator, then app id and password will require.which you can set in app.js


## Reference Link:
1.[https://youtu.be/S0oO81oG2GY](https://youtu.be/S0oO81oG2GY)
2. [https://github.com/Microsoft/BotBuilder/issues/1943](https://github.com/Microsoft/BotBuilder/issues/1943)
3. [http://stackoverflow.com/questions/43153824/how-to-store-session-data-into-custom-storage-in-bot-builder](http://stackoverflow.com/questions/43153824/how-to-store-session-data-into-custom-storage-in-bot-builder)

