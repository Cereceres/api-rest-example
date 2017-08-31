const assert = require('assert');
const faker = require('faker');
const features = require('./features');
const { findOne, create: createUser, comparePassword } = require('../../../../stores/user');
const {
    emailSenderingCong: {
        emailRemitentInOpt,
    subjectOptEmail: subject,
    }
} = require('../../../../config');

describe('Reset the password using temporal password', () => {
    describe('SUCCESS', () => {
        it('/user/reset/password POST -> should reset the password', async () => {
            const body = {
                email: 'test_reset_pass@test.com',
                password: 'test_rest',
                tempPassword: 'test_temp',
                resetPasswordExpires: new Date(Date.now() + 10000)
            };
            await createUser(body);
            const data = {
                email: body.email,
                oldPassword: body.tempPassword,
                newPassword: 'new_password'
            };
            await agent
                .post('/user/reset/password')
                .send(data)
                .expect(200);
            const query = { email: body.email };
            const _user = await findOne(query);
            const match = await comparePassword(data.newPassword, _user.password);
            assert(!match.error);
        });

        it('/user/reset/password POST -> should reset the password with complete flow', (done) => {
            const body = {
                email: faker.internet.email(),
                password: faker.internet.password()
            };
            const emitter = features(emailRemitentInOpt, body.email, subject);

            emitter.on('content', (content) => {
                console.log('content ', content);
                const tempPassword = content.split(': ')[1];
                console.log('tempPassword ', tempPassword);
                const data = {
                    email: body.email,
                    oldPassword: tempPassword,
                    newPassword: 'new_password'
                };
                agent.post('/user/reset/password')
                    .send(data)
                    .expect(200)
                    .then(() => {
                        const user = findOne({ email: body.email });
                        const match = comparePassword(data.newPassword, user.password);
                        assert(!match.error);
                        done();
                    });
            });
            createUser(body)
            .then(() => agent.post('/user/otp').send({email: body.email}));
        });
    });
});
