const saveAddress = require('./save-address');
const saveParcel = require('./save-parcel');
const saveShipment = require('./save-shipment');
const buy = require('./buy');

module.exports = {
    address:{
        save:saveAddress
    },
    parcel:{
        save:saveParcel
    },
    shipment:{
        save:saveShipment
    },
    buy
};
