const { create: createOffer } = require('../../../stores/offer');

module.exports = async(ctx) => {
    const offerToCreate = Object.assign({
        userId: ctx.state.user.id,
    },
    ctx.request.body
    );
<<<<<<< HEAD
    const offer = await createOffer(offerToCreate);

    if (offer.error) ctx.throw(500, offer.error.message);

    ctx.body = { success: true, offer };
=======
    const { error } = await createOffer(offerToCreate);

    if (error) ctx.throw(500, error.message);

    ctx.body = { success: true };
>>>>>>> the test to /offer endpoint is added
};
