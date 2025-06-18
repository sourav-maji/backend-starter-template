import AppError from '../utils/AppError.js';

export const authorizeRoles = (...allowedRoles) => {
  return (req, res, next) => {
    const userRole = req.user?.role;
    if (!allowedRoles.includes(userRole)) {
      return next(new AppError('Forbidden: Access Denied', 403));
    }
    next();
  };
};
