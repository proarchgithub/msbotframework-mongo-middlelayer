How to video [https://youtu.be/S0oO81oG2GY](https://youtu.be/S0oO81oG2GY)

Note: This video was recored using version 1 and is a little out of date. 

##NPM

[https://www.npmjs.com/package/botbuilder-mongodb](https://www.npmjs.com/package/botbuilder-mongodb)

npm install --save botbuilder-mongodb@3.1.1

You can find npm code into directory called npm_Code

##BotBuilder-MongoDB
Bot builder with Mongo Db custom storage

## Introduction 
The example code shows how you can store bot session and user data into MongoDB

## Motivation
Microsoft bot builder stores data (by default) internally in Microsoft storage which has a 64 Kb limit per user. Alternatively data can be stored to Microsoft Azure Table and Microsoft Cosmos DB (formerly Microsoft Document Db) which do not have any data limit per user.
An opensource custom solution is to use MongoDB as storage layer for the same.

## Setup
1) Install node js and npm

2) > npm install 

3) provide configuartion(MongoDb IP address, collection name, database name) on mongoOptions (Check app.js)

4) > node app.js (It will create the collection automaticallly)

Note:If you are testing your bot in an environment other than the Emulator, then App ID and Password is required. This can be set in app.js of the application.


## Reference Links:
1. [https://youtu.be/S0oO81oG2GY](https://youtu.be/S0oO81oG2GY)
2. [https://github.com/Microsoft/BotBuilder/issues/1943](https://github.com/Microsoft/BotBuilder/issues/1943)
3. [http://stackoverflow.com/questions/43153824/how-to-store-session-data-into-custom-storage-in-bot-builder](http://stackoverflow.com/questions/43153824/how-to-store-session-data-into-custom-storage-in-bot-builder)

## Developer Help:
 [https://www.linkedin.com/in/aakashkag/](https://www.linkedin.com/in/aakashkag/)

