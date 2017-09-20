const saveAddress = require('./save-address');
const saveParcel = require('./save-parcel');
const saveShipment = require('./save-shipment');

module.exports = {
    address:{
        save:saveAddress
    },
    parcel:{
        save:saveParcel
    },
    shipment:{
        save:saveShipment
    }
};
