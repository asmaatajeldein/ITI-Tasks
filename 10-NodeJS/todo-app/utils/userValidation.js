const Joi = require("joi");
const AppError = require("./AppError");

const userSchema = new Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(8).max(20).required()
});

const userValidation = (req, res, next) => {
  const { email, password } = req.body;
  const { error } = userSchema.validate({ email: email, password: password });
  if (error) return next(new AppError(error, 404, error.details));
  next();
};

module.exports = { userValidation };
