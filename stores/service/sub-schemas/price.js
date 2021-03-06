const Schema = require('../../../databases/mongo').Schema;

module.exports = new Schema({
    description:{
        type: String,
        required: true
    },
    location:{
        type: Object,
        index:true
    },
    price:{
        type: Number,
        required: true
    },
    time:{
        type: Number,
        required: true
    },
    timeUnitOfMeasure:{
        type: String,
        required: true,
        enum: [ 'hour', 'day', 'week' ]
    }
});
