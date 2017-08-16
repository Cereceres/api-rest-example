const catchingErrorFromPromise = require('../../../lib/catching-error-from-promise');

const { isArray } = Array;

module.exports = (client) => (query, _likes) => {
    const likes = isArray(_likes) ? _likes : [ _likes ];
    const update = {
        $pull: {
            likes: { $in: likes }
        }
    };
    return catchingErrorFromPromise(client.update(query, update).exec());
};