const assert = require('assert');

const { create: createCategory, findOne: findOneCategory } = require('../../../stores/category');


describe('User requests', () => {
    describe('SUCCESS', () => {
        it('/category/:idCategory PUT sohuld create a request given', async() => {
            const category = {
                keywords: [ 'string' ],
                name: {
                    type: 'string',
                    required: true
                },
                userId: __user._id
            };
            const categoryCreated = await createCategory(category);
            console.log('categoryCreated ', categoryCreated);
            const update = {
                price: {
                    amount: 0
                }
            };
            await agent.put(`/category/${categoryCreated._id}`)
                .send(update)
                .set(authorizationHeader)
                .set(Cookie)
                .expect(200);
            const updated = await findOneCategory({ _id: categoryCreated._id });
            console.log('update ', updated);
            assert.deepEqual(updated.price, update.price);
        });
    });

    describe('FAIL', () => {

    });
});
