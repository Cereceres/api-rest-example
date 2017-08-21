module.exports = {
    userId: {
        type: String,
        required: true,
        index: true,
        ref: 'user'
    },
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
        type: String,
<<<<<<< HEAD
        enum: [ 'hour', 'day', 'week' ]
=======
        enum: ['hour', 'day', 'week']
>>>>>>> router to offer is added
    },
};
