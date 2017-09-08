const { update: updateCategory } = require('../../../stores/category');

module.exports = async (ctx) => {
    const categoryToupdate = ctx.request.body;
    const { error } = await updateCategory({ _id: ctx.params.idCategory }, categoryToupdate);

    if (error) ctx.throw(404, error.message);

    ctx.body = { success: true };
};
