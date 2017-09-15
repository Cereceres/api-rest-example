const catchingErrorFromPromise = require('../../../../lib/catching-error-from-promise');

module.exports = (client) => (query) => {
    console.log('query = ', query);
    return catchingErrorFromPromise(
        client.findOne(query, {subCategories:1}).exec()
            .then((_res) => {
                if (!_res) return _res;
                return _res.toObject().subCategories || [];
            })
    );
};
