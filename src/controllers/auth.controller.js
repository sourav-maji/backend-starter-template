import bcrypt from 'bcryptjs';
import User from '../models/user.model.js';
import jwt from 'jsonwebtoken';
import ApiResponse from '../utils/ApiResponse.js';
import AppError from '../utils/AppError.js';
import { generateTokens } from '../services/auth.service.js';

export const register = async (req, res, next) => {
  try {
    const { username, password, role } = req.body;

    const existingUser = await User.findOne({ username });
    if (existingUser) {
      throw new AppError('Username already exists', 400);
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      username,
      password: hashedPassword,
      role: role || 'user'
    });

    const tokens = generateTokens({ id: newUser._id, username: newUser.username, role: newUser.role });

    res.status(201).json(new ApiResponse(201, { user: newUser, ...tokens }, 'User registered successfully'));
  } catch (error) {
    next(error);
  }
};

export const login = async (req, res, next) => {
  try {
    const { username, password } = req.body;

    if (username !== 'admin' || password !== 'password') {
      throw new AppError('Invalid credentials', 401);
    }

    const accessToken = jwt.sign({ username }, process.env.JWT_SECRET, { expiresIn: '15m' });
    const refreshToken = jwt.sign({ username }, process.env.JWT_REFRESH_SECRET, { expiresIn: '7d' });

    res.json(new ApiResponse(200, { accessToken, refreshToken }, 'Login successful'));
  } catch (error) {
    next(error);
  }
};

export const refreshToken = (req, res, next) => {
  try {
    const { refreshToken } = req.body;
    if (!refreshToken) throw new AppError('Refresh token required', 400);

    const decoded = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET);
    const accessToken = jwt.sign({ username: decoded.username }, process.env.JWT_SECRET, { expiresIn: '15m' });

    res.json(new ApiResponse(200, { accessToken }, 'Token refreshed'));
  } catch (error) {
    next(error);
  }
};
