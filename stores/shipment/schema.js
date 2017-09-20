const {Schema} = require('mongoose');
const {
    address:{
        schema: addressSchema
    },
    parcel:{
        schema: parcelSchema
    },
    item:{
        schema: itemSchema
    }
} = require('./sub-schemas');

module.exports = {
    userId: {
        type: Schema.Types.ObjectId,
        required: true,
        index: true,
        ref: 'user'
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
    isActive: {
        type: Boolean,
        default: true
    },
    updatedAt: {
        type: Date,
        default: new Date()
    },
    customsCertify	: Boolean,
    cutomsSigner: String,
    contentsType: String,
    restrictionType: String,
    eelPfc: String,
    items:[ itemSchema ],
    toAddress: addressSchema,
    fromAddress: addressSchema,
    parcel:parcelSchema,
    isReturn: Boolean,
    messages: [],
    mode: String,
    options: {
        currency: String,
        labelDate: String,
        dateAdvance: Number
    },
    reference: String,
    status: String,
    trackingCode:String,
    batchId: String,
    batchDtatus: String,
    batchMessage: String,
    insurance: String,
    orderId: String,
    postageLabel:String,
    rates:[
        {
            service: String,
            carrier: String,
            rate: String,
            currency: String,
            retailRate: String,
            retailCurrency: String,
            listRate: String,
            listCurrency: String,
            deliveryDays: Number,
            deliveryDate: String,
            deliveryDateGuaranteed: Boolean,
            estDeliveryDays: Number,
            shipmentDd: String,
            carrierAccountId: String
        }
    ],
    refundStatus: String,
    scanForm: String,
    selectedRate: String,
    tracker: String,
    uspsZone: Number,
    returnAddress:addressSchema,
    buyerAddress: addressSchema,
    forms: [],
    fees: [],

};
