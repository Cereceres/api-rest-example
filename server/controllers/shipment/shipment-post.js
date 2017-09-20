const { create: createShipment } = require('../../../stores/shipment');
const {shipment:{save: saveShipment}} = require('../../../services/shipping');

module.exports = async(ctx) => {
    const shipmentToCreate = Object.assign({
        userId: ctx.state.user.id,
    },
    ctx.request.body
    );
    const shipment = await createShipment(shipmentToCreate);
    await saveShipment(shipment);

    if (!shipment || shipment.error) ctx.throw(404, shipment.error.message);
    const success = true;
    ctx.body = { shipment, success };
};
