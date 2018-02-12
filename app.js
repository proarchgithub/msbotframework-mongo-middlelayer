var restify = require('restify');
var builder = require('botbuilder');
var botbuilder_mongo=require('botbuilder-mongodb')

var server = restify.createServer();
//change port number here 
server.listen(process.env.port || process.env.PORT || 3980, function () {
   console.log('%s listening to %s', server.name, server.url);
});

// Create chat bot
var connector = new builder.ChatConnector({
    appId:" ",//pass here your's app id
    appPassword:" "//pass here your's app password
});

// Listen for messages from users 
server.post('/api/messages', connector.listen());
//Store session and context into mnongodb
const mongoOptions = {
    ip: '127.0.0.1',
    port: '27017',
    database: 'BotStorage',
    collection: 'ContextData',
    username: '',
    password: '',
    queryString: ''
}

mongoStorage=botbuilder_mongo.GetMongoDBLayer(mongoOptions)
var bot = new builder.UniversalBot(connector).set('storage', mongoStorage);//set your storage here
bot.use(builder.Middleware.dialogVersion({ version: 3.0, resetCommand: /^reset/i }));

bot.dialog('/', [
    function (session, args, next) {
        if (!session.userData.name) {
            session.beginDialog('/profile');
        } else {
            next();
        }
    },
    function (session, results) {
        session.send('Hello %s!', session.userData.name);
    }
]);

bot.dialog('/profile', [
    function (session) {
        builder.Prompts.text(session, 'Hi! What is your name?');
    },
    function (session, results) {
        session.userData.name = results.response;
        session.endDialog();
    }
]);
