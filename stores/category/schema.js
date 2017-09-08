const {schema: subCategories} = require('./sub-schema/sub-category');

module.exports = {
    userId: {
        type: String,
        required: true,
        index: true,
        ref: 'user'
    },
    keywords: [ String ],
    name: {
        type: String,
        required: true
    },
    subCategories: [ subCategories ]
};
