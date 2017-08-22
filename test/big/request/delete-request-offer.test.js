const assert = require('assert');

const { create: createRequest } = require('../../../stores/request');
const { create: createOffer, findOne: findOneOffer } = require('../../../stores/request-offer');


describe('User requests', () => {
    describe('SUCCESS', () => {
        it('/request/offer DELETE sohuld create a request given', async() => {
            console.log('__user = ', __user);
            const request = {
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
                minPrice:0,
                maxPrice:1,
                scheduleDate:1
            };

            const requestCreated = await createRequest(request);
            const offer = {
                userId: __user._id,
                requestId: requestCreated._id,
                isActive: true,
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
                scheduleDate:1
            };
            console.log('offer: ', offer);
            const offerCreated = await createOffer(offer);
            await agent.delete(`/request/${offerCreated._id}/offer`)
                .set(authorizationHeader)
                .set(Cookie)
                .expect(200);
            const offerNotActive = findOneOffer({ _id: offerCreated._id });
            assert(!offerNotActive.isActive);
        });
    });

    describe('FAIL', () => {

    });
});
