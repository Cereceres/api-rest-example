module.exports = {
    userId: {
        type: String,
        required: true,
        index: true,
        ref: 'user'
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
    buyerId: {
        type: String,
        required: true,
        index: true,
        ref: 'user'
    },
    buyerOrderDispute: {
        type: Object
    },
    buyerServiceLocation: [ location ],
    cancellationDate: Date,
    category: {
        type: {},
        required: true
    },
    description: {
        type: String,
        required: true
    },
    isActive: {
        type: Boolean,
        default: true
    },
    fulfillmentMethod: fulfillmentMethod,
    geofence: {
        type: Array
    },
    orderAcceptanceDate: Date,
    orderItems: [ orderedItem ],
    orderMilestoneStatuses: orderMilestoneStatuses,
    paymentDate: Date,
    paymentMethod: {
        type: Object,
        required: true
    },
    servicesPrices: [ price ],
    transactionFee: Number,
    transactionDate: Date,
    updatedAt: Date,
    sellerAcceptedScheduleTime: Boolean,
    sellerAcceptedBuyerServiceLocation: Boolean,
    sellerDeliveredMedia: [ media ],
    sellerId: {
        type: String,
        required: true,
        index: true,
        ref: 'user'
    },
    sellerServiceLocation: [ location ],
    serviceScheduleDate: Date,
    serviceStartDate: Date,
    serviceCompleteDate: Date,
    shippingInfo: {
        type: Object
    },
    taxes: {
        type: Object
    }
};
