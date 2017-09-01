const { remove: removeCheckr } = require('../../../stores/background-check');

const errorMessage = 'Request does not exists';
module.exports = async(ctx) => {
    const checkrRemoved = await removeCheckr({ _id: ctx.params.idCheckr });
    if (!checkrRemoved || checkrRemoved.error) ctx.throw(400, errorMessage);

    ctx.body = { success: Boolean(checkrRemoved.ok) };
};
