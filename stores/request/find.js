const catchingErrorFromPromise = require('../../lib/catching-error-from-promise');

module.exports = (client) => (query, opt = {}) => {
    const _query = client.find(query);

    if (opt.limit) _query.limit(opt.limit);

    return catchingErrorFromPromise(_query.exec()
    .then((results) => results.map((_res) => {
        if (!_res) return _res;
        const res = _res.toObject();
        if (res._id) res._id = res._id.toString();
        return res;
    })));
};
