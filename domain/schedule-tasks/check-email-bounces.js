

const {get:getBounces, delete:deleteBounces} = require('../../services/email/bounce');

const { updateEmailBounce:updateEmailSettingsOfUser} = require('../../stores/user');
module.exports = async () => {
    const bounces = await getBounces();
    console.log('bounces =', bounces);
    if (!bounces.length) return;

    const bouncesToDelete = await updateEmailSettingsOfUser(bounces);
    console.log('bouncesToDelete =', bouncesToDelete);

    if (!bouncesToDelete.length) return;

    await deleteBounces(bouncesToDelete);
};
