const {update} = require('../../../stores/shipment');
const {address:{save: saveAddress}} = require('../../../services/shipping');

module.exports = async(ctx) => {
    const query = {
        userId: ctx.state.user.id,
        _id: ctx.params.idShipment
    };
    const shipment = await update(query, {address:ctx.request.body});
    console.log('shipment  ', shipment);
    if (!shipment || shipment.error) ctx.throw(404);
    const addressSaved = await saveAddress(shipment.address);
    const toUpdate = {'address.externalId': addressSaved.id};
    delete addressSaved.id;
    const nestedAddressProp = Object.keys(addressSaved).reduce((obj, key) => {
        obj[`address.${key}`] = addressSaved[key];
        return obj;
    }, {});
    Object.assign(toUpdate, nestedAddressProp);
    console.log('toUpdate    ', toUpdate);
    await update(query, toUpdate);

    ctx.body = { success: true, address: shipment.address };
};
