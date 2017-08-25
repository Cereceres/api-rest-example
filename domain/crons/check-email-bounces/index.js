const SendGrid = require('sendgrid');


const {emailSenderingCong:{ sendgridApiKey}} = require('../../../config');
const getBounces = require('./get-bounces');
const updateUserEmailSettings = require('./update-email-setting-of-user');
const deleteBounces = require('./delete-bounces');

const sg = SendGrid(sendgridApiKey);


module.exports = async () => {
    const bounces = await getBounces(sg);

    if (!bounces.length) return;

    const bouncesToDelete = await updateUserEmailSettings(bounces);

    if (!bouncesToDelete.length) return;

    const {deleted} = await deleteBounces(sg, bouncesToDelete);
    console.log(deleted);
};
