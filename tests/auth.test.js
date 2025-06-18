import request from 'supertest';
import dotenv from 'dotenv';
import { connectDB } from '../src/config/database.js';
import app from '../src/app.js'; // Only if exported
dotenv.config();

beforeAll(async () => {
  await connectDB();
});

describe('Auth API', () => {
  it('should return access and refresh tokens on valid login', async () => {
    const res = await request(app)
      .post('/api/auth/login')
      .send({ username: 'admin', password: 'password' });

    expect(res.statusCode).toBe(200);
    expect(res.body.data).toHaveProperty('accessToken');
    expect(res.body.data).toHaveProperty('refreshToken');
  });

  it('should fail login with wrong credentials', async () => {
    const res = await request(app)
      .post('/api/auth/login')
      .send({ username: 'bad', password: 'wrong' });

    expect(res.statusCode).toBe(401);
  });
});
