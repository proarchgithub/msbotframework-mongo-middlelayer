exports.GetMongoDBLayer=function(mongoOptions){
	try{
		var mongo= require('./lib/MongoDbClient.js');
		var azure = require('./lib/AzureBotStorage.js');

		/*var istorage= require('./lib/IStorageClient');
		var azure = require('./lib/AzureBotStorage.js');
		var docDbClient = new istorage.IStorageClient(MongoDBConf);
		var mongoStorage = new azure.AzureBotStorage({ gzipData: false },docDbClient);*/
		const mongoDbClient = new mongo.MongoDbClient(mongoOptions);
		const botStorage = new azure.AzureBotStorage({gzipData: false}, mongoDbClient);
		return botStorage;
	}catch(err){
		console.error("error==>",err.stack);
	}
}
