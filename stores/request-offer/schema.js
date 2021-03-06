const {Schema} = require('mongoose');

module.exports = {
    userId: {
        type: Schema.Types.ObjectId,
        required: true,
        index: true,
        ref: 'user'
    },
    createdAt:{
        type: Date,
        default: new Date()
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
        type:Schema.Types.ObjectId,
        required: true
    },
    isActive: {
        type: Boolean,
        default: true
    },
    updatedAt:{
        type:Date
    },
    workDuration:{
        type:Object
    },
    workDurationUom:{
        type: String,
        enum: [ 'hour', 'day', 'week' ]
    },
};
