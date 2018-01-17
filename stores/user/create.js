const catchingErrorFromPromise = require('../../lib/catching-error-from-promise');
const neoClient = require('../../databases/neo4j');
module.exports = (client) => (data) => catchingErrorFromPromise(
        client.create(data)
            .then((_res) => {
                if (!_res) return _res;
                const res = _res.toObject();
                if (res._id) res._id = res._id.toString();
                return res;
            })
            .then((user) => new Promise((resolve, reject) => {
                neoClient.cypher({
                    query: `CREATE (u:User ${JSON.stringify(data)}) RETURN u`,
                }, (err, res) => {
                    if (err) return reject(err);
                    console.log('res in neo == ', res);
                    resolve(user);
                });
            })
        ));
