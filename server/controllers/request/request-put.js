const { update: updateRequest } = require('../../../stores/request');

const errorMessage = 'Request does not exists';

module.exports = async(ctx) => {
    const updated = await updateRequest({_id: ctx.params.idRequest}, ctx.request.body);

    if (!updated || updated.error) ctx.throw(404, errorMessage);
    const queryToFindOffer = { _id: ctx.params.idOffer };
    console.log('queryToFindOffer ', queryToFindOffer);

    ctx.body = {
        success: true
    };
};
