const assert = require('assert');

const { create: createOffer, findOne: findOneOffer } = require('../../../stores/checkr');


describe('User requests', () => {
    describe('SUCCESS', () => {
        it('/checkr/:idOffer DELETE sohuld create a request given', async () => {
            const checkr = {
                userId: __user._id,
                serviceId: 'id of service',
                isActive: true,
                category: {
                    type: 'Object'
                },
                location: {
                    type: 'Object'
                },
                media: {
                    type: 'Object'
                },
                minPrice: 0,
                maxPrice: 1,
                scheduleDate: 1
            };
            const offerCreated = await createOffer(checkr);
            console.log('checkr ====: ', offerCreated);
            await agent.delete(`/checkr/${offerCreated._id}`)
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
