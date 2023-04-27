const Joi = require('joi');

module.exports = {
    payload: Joi.object({
        name: Joi.string(),
        id: Joi.string(),
        DateOfJoining: Joi.number(),
        Role: Joi.string(),
        email: Joi.string(),
        phoneNumber: Joi.string()

     })
    
}


