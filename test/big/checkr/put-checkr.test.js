const assert = require('assert');

const { create: createOffer, findOne: findOneOffer } = require('../../../stores/checkr');


describe('User requests', () => {
    describe('SUCCESS', () => {
        it('/checkr/:idOffer PUT sohuld create a request given', async() => {
            const checkr = {
                serviceId: 'id of service',
                fulfillmentMethod: {},
                location: {},
                media: {},
                price: {},
                workDuration: {},
                workDurationUom: 'hour',
                userId: __user._id
            };
            const offerCreated = await createOffer(checkr);
            console.log('offerCreated ', offerCreated);
            const update = {
                price: {
                    amount: 0
                }
            };
            await agent.put(`/checkr/${offerCreated._id}`)
                .send(update)
                .set(authorizationHeader)
                .set(Cookie)
                .expect(200);
            const updated = await findOneOffer({ _id: offerCreated._id });
            console.log('update ', updated);
            assert.deepEqual(updated.price, update.price);
        });
    });

    describe('FAIL', () => {

    });
});
