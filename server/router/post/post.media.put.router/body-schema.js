const joi = require('joi');

const mediaType = [ 'image', 'video' ];

module.exports = joi.array().items(joi.object().keys({
    fileName:joi.string(),
    mediaType: joi.string().valid(mediaType)
}));
