const joi = require('joi');


module.exports = joi.object().keys({
    city: joi.string(),
    country: joi.string(),
    geoJson: joi.object().keys({
        type: joi.string().required(),
        coordinates: joi.array().items(joi.number()).length(2).required()
    }),
    postalCode: joi.string(),
    province: joi.string(),
    state: joi.string()
});
