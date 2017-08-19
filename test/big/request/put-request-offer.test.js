const assert = require('assert');

const { create: createOffer, findOne: findOneOffer } = require('../../../stores/request-offer');
const { create: createRequest } = require('../../../stores/request');


describe('User requests', () => {
    describe('SUCCESS', () => {
        it('/request/:idRequest/offer PUT sohuld create a request given', async () => {
            const body = {
                userId: __user._id,
                category:{
                    type: Object
                },
                location:{
                    type: Object
                },
                media:{
                    type: Object
                },
                minPrice:1,
                maxPrice:1,
                scheduleDate:1
            };
            const requestCreated = await createRequest(body);
            console.log('requestCreated ', requestCreated);
            const offer = {
                requestId: requestCreated._id,
                category:{
                    type: Object
                },
                location:{
                    type: Object
                },
                media:{
                    type: Object
                },
                minPrice:0,
                maxPrice:1,
                scheduleDate:1,
                userId: __user._id
            };
            const offerCreated = await createOffer(offer);
            console.log('offerCreated ', offerCreated);
            const update = {
                offer: 'offer 2'
            };
            const { body: res } = await agent.put(`/request/${offerCreated._id}/offer`)
                .send(update)
                .set(authorizationHeader)
                .set(Cookie)
                .expect(200);
            console.log('res = ', res);
            const updated = await findOneOffer({ _id: offerCreated._id });
            console.log('update ', updated);
            assert.equal(updated.offer, update.offer);
        });
    });

    describe('FAIL', () => {

    });
});
