const { find: findCategory, count } = require('../../../../stores/category');
const {pagination:{categorys:limit}} = require('../../../../config');
const {Types:{ObjectId}} = require('../../../../databases/mongo');
const getQuery = require('./get-query');

const errorInGetWatching = 'Error in get to category-category';
module.exports = async (ctx) => {
    const query = getQuery(ctx);
    const categorys = await findCategory(query, {limit});
    if (!categorys || categorys.error) ctx.throw(404, errorInGetWatching);

    if (ctx.params.idCategory) {
        ctx.body = {
            category: categorys[0]
        };
        return;
    }
    ctx.body = {categorys};
    const lastOne = categorys[categorys.length - 1];
    const remaining = await count({_id:{$gt: ObjectId(lastOne._id)}});
    if (remaining) ctx.body.next = `${ctx.url}?id_gt=${lastOne._id}`;
};
