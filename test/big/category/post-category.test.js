const assert = require('assert');

const { findOne: findOneCategory } = require('../../../stores/category');


describe('User requests', () => {
    describe('SUCCESS', () => {
        it('/category POST sohuld create a request given', async() => {
            const body = {
                keywords: [ 'string' ],
                name: {
                    type: 'string',
                    required: true
                }
            };

            const { body: res } = await agent
                .post('/category')
                .send(body)
                .set(authorizationHeader)
                .set(Cookie)
                .expect(200);
            assert(res.success);
            assert(res.category._id);
            const category = await findOneCategory(body);
            assert(category.isActive === true);
        });
    });

    describe('FAIL', () => {

    });
});
