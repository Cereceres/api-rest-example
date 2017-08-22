const { update: updateRequest } = require('../../../stores/request');

const errorMessage = 'Request does not exists';

module.exports = async(ctx) => {
    const {error} = await updateRequest({_id: ctx.params.idRequest}, ctx.request.body);

    if (error) ctx.throw(400, errorMessage);
    const queryToFindOffer = { _id: ctx.params.idOffer };
    console.log('queryToFindOffer ', queryToFindOffer);

    ctx.body = {
        success: true
    };
};
