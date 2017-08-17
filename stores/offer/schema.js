module.exports = {
    userId: {
        type: String,
        required: true,
        index: true,
        ref: 'user'
    },
<<<<<<< HEAD
    createdAt: {
        type: Date
    },
    fulfillmentMethod: {
        type: Object
    },
    location: {
        type: Object
    },
    media: {
        type: Object
    },
    price: {
        type: Object
    },
    serviceId: {
        type: String
    },
    isActive: {
        type: Boolean,
        default: true
    },
    updatedAt: {
        type: Date
    },
    workDuration: {
        type: Object
    },
    workDurationUom: {
=======
    createdAt:{
        type: Date
    },
    fulfillmentMethod:{
        type:Object
    },
    location:{
        type:Object
    },
    media:{
        type:Object
    },
    price:{
        type:Object
    },
    requestId:{
        type:String,
        required: true
    },
    serviceId:{
        type:String,
        required: true
    },
    updatedAt:{
        type:Date
    },
    workDuration:{
        type:Object
    },
    workDurationUom:{
>>>>>>> the request and offer stores are added
        type: String,
        enum: [ 'hour', 'day', 'week' ]
    },
};
