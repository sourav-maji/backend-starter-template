import Joi from 'joi';
import AppError from '../utils/AppError.js';

const loginSchema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
});

export const validateLogin = (req, res, next) => {
  const { error } = loginSchema.validate(req.body);
  if (error) return next(new AppError(error.details[0].message, 400));
  next();
};
