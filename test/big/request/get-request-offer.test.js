const assert = require('assert');

const { create: createRequest } = require('../../../stores/request');
const { create: createOffer } = require('../../../stores/request-offer');
const {pagination:{offers:limit}} = require('../../../config');


describe('User requests', () => {
    describe('SUCCESS', () => {
        it('/request/offer GET sohuld create a request given', async () => {
            const request = {
                userId: __user._id,
                category:{
                    type: 'Object'
                },
                location:{
                    type: 'Object'
                },
                media:{
                    type: 'Object'
                },
                minPrice:1,
                maxPrice:1,
                scheduleDate:1

            };
            const requestCreated = await createRequest(request);
            const offerCreated = await createOffer({
                category:{
                    type: 'Object'
                },
                location:{
                    type: 'Object'
                },
                media:{
                    type: 'Object'
                },
                minPrice:0,
                maxPrice:1,
                scheduleDate:1,
                requestId: requestCreated._id,
                userId: __user._id

            });
            const { body: res } = await agent
                .get(`/request/${offerCreated._id}/offer`)
                .set(authorizationHeader)
                .set(Cookie)
                .expect(200);
            assert(typeof res.offer === 'object');
        });

        it('/requests GGET all request saved with pagination', async() => {
            const request = {
                userId: __user._id,
                category:{
                    type: 'Object'
                },
                location:{
                    type: 'Object'
                },
                media:{
                    type: 'Object'
                },
                minPrice:1,
                maxPrice:1,
                scheduleDate:1

            };
            const requestCreated = await createRequest(request);
            for (let i = 0; i <= limit; i++) await createOffer({
                category:{
                    type: 'Object'
                },
                location:{
                    type: 'Object'
                },
                media:{
                    type: 'Object'
                },
                minPrice:0,
                maxPrice:1,
                scheduleDate:1,
                requestId: requestCreated._id,
                userId: __user._id

            });

            const { body: { requests: res, next } } = await agent.get('/request/offers')
                .set(authorizationHeader)
                .set(Cookie)
                .expect(200);

            assert(res.length === limit);
            assert(next);

            const { body: { requests: resSecond, next:nextSecond } } = await agent.get(next)
                .set(authorizationHeader)
                .set(Cookie)
                .expect(200);
            assert(resSecond.length === 1);
            assert(!nextSecond);
        });
    });

    describe('FAIL', () => {

    });
});
