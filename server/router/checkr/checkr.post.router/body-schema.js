const joi = require('joi');

<<<<<<< HEAD
<<<<<<< HEAD
module.exports = joi.object().keys({
    firstName: joi.string(),
    middleName: joi.string(),
    lastName: joi.string(),
    email: joi.string(),
    phone: joi.string(),
    zipcode: joi.string(),
    dob: joi.date(),
    ssn:joi.string(),
    driverLicenseNumber: joi.string(),
    driverLicenseState: joi.string()
=======

const workDurationUom = ['hour', 'day', 'week'];

module.exports = joi.object().keys({
    fulfillmentMethod: joi.object(),
    location: joi.object(),
    media: joi.object(),
    price: joi.object(),
    workDuration: joi.object(),
    workDurationUom: joi.string().valid(workDurationUom)
>>>>>>> the check andpoint is updated
=======
module.exports = joi.object().keys({
    firstName: joi.string(),
    middleName: joi.string(),
    lastName: joi.string(),
    email: joi.string(),
    phone: joi.string(),
    zipcode: joi.string(),
    dob: joi.date(),
    ssn:joi.string(),
    driverLicenseNumber: joi.string(),
    driverLicenseState: joi.string()
>>>>>>> the 404 message from update is addd
});
