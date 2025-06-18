import jwt from 'jsonwebtoken';

export const generateTokens = (userPayload) => {
  const accessToken = jwt.sign(userPayload, process.env.JWT_SECRET, {
    expiresIn: '15m',
  });

  const refreshToken = jwt.sign(userPayload, process.env.JWT_REFRESH_SECRET, {
    expiresIn: '7d',
  });

  return { accessToken, refreshToken };
};
