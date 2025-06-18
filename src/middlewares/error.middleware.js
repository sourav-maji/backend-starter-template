import logger from '../utils/logger.js';

const errorMiddleware = (err, req, res, next) => {
  logger.error(err.stack || err.message);
  res.status(err.statusCode || 500).json({
    success: false,
    message: err.message || 'Internal Server Error',
  });
};

export default errorMiddleware;
