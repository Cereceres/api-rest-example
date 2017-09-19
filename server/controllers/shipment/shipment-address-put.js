const {update} = require('../../../stores/shipment');

module.exports = async (ctx) => {
    const addressToUpdate = ctx.request.body;
    const query = {
        userId: ctx.state.user.id,
        _id: ctx.params.idShipment,
    };
    console.log('query ', query);
    const shipment = await update(query, {address: addressToUpdate});
    console.log('shipment ', shipment);
    if (!shipment || shipment.error) ctx.throw(404);

    ctx.body = { success: true, address:shipment.address };
};
