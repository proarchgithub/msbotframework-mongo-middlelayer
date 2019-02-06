Video  which demonstrate how to store session and user data into MongoDB 
Find here [https://youtu.be/S0oO81oG2GY](https://youtu.be/S0oO81oG2GY)
Note: Video recored based on Version 1 So it is outdated. 

##NPM

[https://www.npmjs.com/package/botbuilder-mongodb](https://www.npmjs.com/package/botbuilder-mongodb)

npm install --save botbuilder-mongodb@3.1.1

You can find npm code into directory called npm_Code

##BotBuilder-MongoDB
Bot builder with Mongo Db(custom storage )

## Introduction 
This example code is written to show how we can store our bot session and user data into MongoDB

## Motivation
Microsoft bot builder on default stores data  internally in Microsoft storage which has a 64 Kb limit per user. Alternatively data can be stored to Microsoft Azure Table and Microsoft Cosmos DB (formerly Microsoft Document Db) which do not have any data limit per user.
An opensource custom solution is to use MongoDB as storage layer for the same.

## How to use
step 1)   First you need to install node js and npm

step 2) > npm install 

step 3) provide configuartion(MongoDb ip,Collection Name,Database name) on mongoOptions (Check app.js)

Step 4) > node app.js (It will create collection automaticallly)

Note:If you are testing bot in an environment other than the Emulator, then App ID and Password is required. This can be set in app.js of the application.


## Reference Link:
1. [https://youtu.be/S0oO81oG2GY](https://youtu.be/S0oO81oG2GY)
2. [https://github.com/Microsoft/BotBuilder/issues/1943](https://github.com/Microsoft/BotBuilder/issues/1943)
3. [http://stackoverflow.com/questions/43153824/how-to-store-session-data-into-custom-storage-in-bot-builder](http://stackoverflow.com/questions/43153824/how-to-store-session-data-into-custom-storage-in-bot-builder)

## Developer Help:
 [https://www.linkedin.com/in/aakashkag/](https://www.linkedin.com/in/aakashkag/)

