const Joi = require('@hapi/joi');
var validator = require("email-validator");
 
const registerValidation = (data) => 
{

    const schema = {
        username: Joi.string().required(),
        email: Joi.string().email().required(),
        password: Joi.string().required(),
        confirmPassword: Joi.string().required(),
        gender: Joi.string().min(1).max(1).required(),
    };

    return Joi.validate(data, schema);

}

const loginValidation = (data) => 
{

    const schema = {
        user: Joi.string().required(),
        password: Joi.string().required(),
    };

    return Joi.validate(data, schema);

}

const isEmail = (email) => 
{

    return validator.validate(email);

}

module.exports.isEmail = isEmail;
module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
