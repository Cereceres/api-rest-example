const assert = require('assert');

const {
    findOne: findOneShipment,
    delete: deleteShipment,
create: createShipment } = require('../../../stores/shipment');


describe('User requests', () => {
    describe('SUCCESS', () => {
        it('/shipment/:id/address POST sohuld create a request given', async() => {
            const body = {
                userId: __user._id
            };
            const shipmentCreated = await createShipment(body);
            const address = {
                object:	'string',
                mode	:'string',
                street1	:'string',
                street2	:'string',
                city	:'string',
                state	:'string',
                zip	:'string',
                country	:'string',
                residential	:true,
                carrierFacility	:'string',
                name	:'string',
                company	:'string',
                phone	:'string',
                email	:'string',
                federalTaxId	:'string',
                stateTaxId	:'string',
            };
            await agent.post(`/shipment/${shipmentCreated._id}/address`)
                .send(address)
                .set(authorizationHeader)
                .set(Cookie)
                .expect(200);
            const updated = await findOneShipment({_id:shipmentCreated._id});
            delete updated.address.verifications;
            console.log('updated.address ', updated.address);
            assert.deepStrictEqual(updated.address, address);
        });
    });

    describe('FAIL', () => {});

    after(() => deleteShipment({}));
});
