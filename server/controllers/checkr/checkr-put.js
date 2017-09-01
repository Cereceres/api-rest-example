const { update: updateCheckr } = require('../../../stores/background-check');

module.exports = async (ctx) => {
    const checkrToupdate = ctx.request.body;
    const { error } = await updateCheckr({ _id: ctx.params.idCheckr }, checkrToupdate);

    if (error) ctx.throw(404, error.message);

    ctx.body = { success: true };
};
