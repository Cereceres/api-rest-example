const assert = require('assert');

const { findOne: findOneOffer } = require('../../../stores/checkr');


describe('User requests', () => {
    describe('SUCCESS', () => {
        it('/checkr POST sohuld create a request given', async() => {
            const body = {
                fulfillmentMethod: { fulfillmentMethod: 'fulfillmentMethod' },
                location: { location: 'location' },
                media: { media: 'media' },
                price: { price: 'price' },
                serviceId: 'id of service',
                workDuration: { workDuration: 'workDuration' },
                workDurationUom: 'hour'
            };

            const { body: res } = await agent
                .post('/checkr')
                .send(body)
                .set(authorizationHeader)
                .set(Cookie)
                .expect(200);
            assert(res.success);
            assert(res.checkr._id);
            const checkr = await findOneOffer(body);
            assert(checkr.isActive === true);
        });
    });

    describe('FAIL', () => {

    });
});
