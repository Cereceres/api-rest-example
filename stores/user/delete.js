const catchingErrorFromPromise = require('../../lib/catching-error-from-promise');


module.exports = (client) => (query) => catchingErrorFromPromise(client.remove(query).exec());
