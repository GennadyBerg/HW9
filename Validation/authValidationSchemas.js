const Joi = require("joi");

const signupSchema = Joi.object({
  login: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

const signinSchema = Joi.object({
  login: Joi.string().required(),
  password: Joi.string().required(),
});

module.exports = {signupSchema, signinSchema}