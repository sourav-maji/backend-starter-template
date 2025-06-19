import Joi from 'joi';
import AppError from '../utils/AppError.js';


const registerSchema = Joi.object({
  username: Joi.string().min(3).max(30).required(),
  password: Joi.string().min(6).required(),
  role: Joi.string().valid('user', 'admin').optional(),
});

export const validateRegister = (req, res, next) => {
  const { error } = registerSchema.validate(req.body);
  if (error) return next(new AppError(error.details[0].message, 400));
  next();
};
const loginSchema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
});

export const validateLogin = (req, res, next) => {
  const { error } = loginSchema.validate(req.body);
  if (error) return next(new AppError(error.details[0].message, 400));
  next();
};
