const mongoosastic = require('mongoosastic');
const elasticsearch = require('elasticsearch');
const connectionClass = require('http-aws-es');
const AWS = require('aws-sdk');

const { elasticsearch: { hosts } } = require('../config');

AWS.config.update({ region: 'us-east-1' });
const esClient = elasticsearch.Client({ connectionClass, hosts });
module.exports = (model) => model.plugin(mongoosastic, { esClient });

