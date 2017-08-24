const bcrypt = require('bcrypt');

const catchingErrorFromPromise = require('../../lib/catching-error-from-promise');


module.exports = (client) => async (query = {}, data = {}, options = {}) => {
    if (data.password) data.password = await bcrypt.genSalt(10)
            .then((salt) => bcrypt.hash(data.password, salt));

    if (data.tempPassword) data.tempPassword = await bcrypt.genSalt(10)
        .then((salt) => bcrypt.hash(data.tempPassword, salt));
    
    return catchingErrorFromPromise(client.update(query, { $set: data }, options).exec()
    );
};
