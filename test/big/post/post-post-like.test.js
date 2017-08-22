const assert = require('assert');

const { create: createpost } = require('../../../stores/post');
const { update: updateUser } = require('../../../stores/user');
const { get: getPostLikes } = require('../../../stores/user/likesPost');


describe('User posts', () => {
    describe('SUCCESS', () => {
        it('/post/like POST sohuld create a post given', async() => {
            const post = {
                userId: 'id of user',
                category: {
                    category: 'category'
                },
                description: 'description',
                media: {
                    media: 'the media is here'
                },
                tags: [ 'tags_1', 'tag_2' ]
            };
            const postCreated = await createpost(post);
            await updateUser({
                email: __user.email
            },
            {
                likesPost: []
            });
            const { body: res } = await agent.post(`/post/${postCreated._id}/like`)
                .set(authorizationHeader)
                .set(Cookie)
                .expect(200);
            assert.deepEqual(res, { success: true });
            const likesPost = await getPostLikes({ _id: __user._id });
            assert.deepEqual(likesPost, [ postCreated._id ]);
        });
    });

    describe('FAIL', () => {

    });
});
