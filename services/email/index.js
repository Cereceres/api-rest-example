const sendEmail = require('./send-email');
const deleteBounces = require('./delete-bounces');
const getBounces = require('./get-bounces');
const updateEmailSettingsOfUser = require('./update-email-setting-of-user');

module.exports = {
    sendEmail,
    deleteBounces,
    getBounces,
    updateEmailSettingsOfUser
};
