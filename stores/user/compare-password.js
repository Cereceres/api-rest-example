const catchingErrorFromPromise = require('../../lib/catching-error-from-promise');

const bcrypt = require('bcrypt');


module.exports = (passw, hash) => {
    console.log('compare ', passw, hash);
    return catchingErrorFromPromise(new Promise((resolve, reject) => {
        bcrypt.compare(passw, hash, (err, isMatch) => {
            console.log('err, isMatch ====== =============', err, isMatch);
            if (err) return reject(err);
            return resolve(isMatch);
        });
    }));
};