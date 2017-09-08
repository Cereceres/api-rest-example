const assert = require('assert');

const { create: createCategory } = require('../../../stores/category');
const {pagination:{categorys:limit}} = require('../../../config');

describe('User categorys', () => {
    describe('SUCCESS', () => {
        it('/request/category GET sohuld create a request given', async() => {
            const categoryCreated = await createCategory({
                category: {
                    type: 'Object'
                },
                keywords: [ 'string' ],
                name: {
                    type: 'string',
                    required: true
                }

            });
            const { body: res } = await agent
                .get(`/category/${categoryCreated._id}`)
                .set(authorizationHeader)
                .set(Cookie)
                .expect(200);
            assert(typeof res.category === 'object');
        });

        it('/categorys GET all request saved with pagination', async() => {
            const body = {
                keywords: [ 'string' ],
                name: {
                    type: 'string',
                    required: true
                },
                userId: __user._id
            };
            for (let i = 0; i <= limit; i++) await createCategory(body);

            const { body: { categorys: res, next } } = await agent.get('/categorys')
                .set(authorizationHeader)
                .set(Cookie)
                .expect(200);
            assert(res.length === limit);
            assert(next);

            const { body: { categorys: resSecond, next:nextSecond } } = await agent.get(next)
                .send(body)
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
