"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongodb_1 = require("mongodb");
var MongoDbClient = (function () {
    function MongoDbClient(options) {
        this.options = options;
    }
    MongoDbClient.prototype.initialize = function (callback) {
        var _this = this;
        var uri = "mongodb://" + this.options.ip + ":" + this.options.port + "/" + this.options.queryString;
        var connectOptions = { useNewUrlParser: true };
        if (this.options.username && this.options.password) {
            connectOptions.auth = {};
            connectOptions.auth.user = this.options.username;
            connectOptions.auth.password = this.options.password;
        }
        mongodb_1.MongoClient.connect(uri, connectOptions)
            .then(function (client) {
            _this.client = client;
            _this.db = _this.client.db(_this.options.database);
            _this.collection = _this.db.collection(_this.options.collection);
            callback(null);
        })
            .catch(function (error) {
            throw Error("Can't connect to db " + error);
        });
    };
    MongoDbClient.prototype.insertOrReplace = function (partitionKey, rowKey, entity, isCompressed, callback) {
        var conditions = {
            'internal_id': partitionKey + ',' + rowKey
        };
        //if (rowKey !== "userData") {
            entity = this.__substituteKeyDeep(entity, /\./g, '\uff0e');
        //}
        var update = {
            "$set": { "data": entity, "isCompressed": isCompressed }
        };
        this.collection.update(conditions, update, { upsert: true }, function (err, res) {
            callback(err, null, null);
        });
    };
    MongoDbClient.prototype.retrieve = function (partitionKey, rowKey, callback) {
        var _this = this;
        var id = partitionKey + ',' + rowKey;
        var query = { "$and": [{ "internal_id": id }] };
        var iterator = this.collection.find(query);
        iterator.toArray(function (error, result) {
            if (error) {
                callback(MongoDbClient.getError(error), null, null);
            }
            else if (result.length == 0) {
                callback(null, null, null);
            }
            else {
                var finaldoc = result[0];
                //if (rowKey !== "userData") {
                    finaldoc = _this.__substituteKeyDeep(finaldoc, /\uff0e/g, '.');
                    finaldoc["id"] = id;
                //}
                callback(null, finaldoc, null);
            }
        });
    };
    MongoDbClient.getError = function (error) {
        if (!error)
            return null;
        return new Error('Error Code: ' + error.code + ' Error Body: ' + error.message);
    };
    MongoDbClient.prototype.__substituteKeyDeep = function (obj, target, replacement) {
        var type = null;
        if (Array.isArray(obj))
            type = "Array";
        if (Object.prototype.toString.call(obj) === "[object Object]")
            type = "Object";
        if (type === "Array") {
            var retA = [];
            for (var i = 0, len = obj.length; i < len; i++) {
                retA[i] = this.__substituteKeyDeep(obj[i], target, replacement);
            }
            return retA;
        }
        else if (type === "Object") {
            var retO = Object();
            for (var k in obj) {
                var i_1 = k.replace(target, replacement);
                retO[i_1] = this.__substituteKeyDeep(obj[k], target, replacement);
            }
            return retO;
        }
        else {
            return obj;
        }
    };
    return MongoDbClient;
}());
exports.MongoDbClient = MongoDbClient;
