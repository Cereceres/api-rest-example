

const {
    email:{
        getBounces,
        updateEmailSettingsOfUser,
        deleteBounces
    }
} = require('../../services');


module.exports = async () => {
    const bounces = await getBounces();

    if (!bounces.length) return;

    const bouncesToDelete = await updateEmailSettingsOfUser(bounces);

    if (!bouncesToDelete.length) return;

    const {deleted} = await deleteBounces(bouncesToDelete);
    console.log(deleted);
};
