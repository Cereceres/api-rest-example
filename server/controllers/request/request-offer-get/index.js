const { find: findOffer, count } = require('../../../../stores/request-offer');
const {pagination:{requestOffers:limit}} = require('../../../../config');
const {Types:{ObjectId}} = require('../../../../databases/mongo');
const getQuery = require('./get-query');

const errorInGetWatching = 'Error in get to offer-offer';
module.exports = async (ctx) => {
    const query = getQuery(ctx);
    const requestOffers = await findOffer(query, {limit});
    if (!requestOffers || requestOffers.error) ctx.throw(404, errorInGetWatching);

    if (ctx.params.idOffer) {
        ctx.body = {
            offer: requestOffers[0]
        };
        return;
    }
    ctx.body = {requestOffers};
    const lastOne = requestOffers[requestOffers.length - 1];
    const remaining = await count({_id:{$gt: ObjectId(lastOne._id)}});
    if (remaining) ctx.body.next = `${ctx.url}?id_gt=${lastOne._id}`;
};
