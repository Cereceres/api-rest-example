const assert = require('assert');

const features = require('./features');
const { findOne: findOneOffer } = require('../../../../stores/background-candidate');


describe('User requests', () => {
    describe('SUCCESS', () => {
        it('/checkr POST sohuld create a request given', async() => {
            const body = {
                firstName: 'firstName',
                middleName: 'middleName',
                lastName: 'lastName',
                email: 'email@test.com',
                phone: '23432432432',
                zipcode: '90401',
                dob: '1970-01-22',
                ssn:'111-11-2001',
                driverLicenseNumber: 'F1112001',
                driverLicenseState: 'CA'
            };
            features();
            const { body: res } = await agent
                .post('/checkr')
                .send(body)
                .set(authorizationHeader)
                .set(Cookie)
                .expect(200);
            assert(res.success);
            delete body.bob;
            const candidate = await findOneOffer(body);
            console.log('candidate ', candidate);
            assert(candidate.isActive === true);
        });
    });

    describe('FAIL', () => {

    });
});
