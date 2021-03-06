const mongo = require('../../databases/mongo');
const addSyncHook = require('../../lib/sync-elasticsearch-hook');
const schema = require('./schema');
const addIndex = require('./plugin/add-index');
const Schema = mongo.Schema;
const requestOfferSchema = new Schema(schema);
addSyncHook(requestOfferSchema);
addIndex(requestOfferSchema);
const requestOffer = mongo.model('request-offer', requestOfferSchema);

module.exports = requestOffer;
