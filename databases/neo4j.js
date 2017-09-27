const neo4j = require('neo4j');

const {neo4j:{url}} = require('../config');
const db = new neo4j.GraphDatabase(url);

module.exports = db;
