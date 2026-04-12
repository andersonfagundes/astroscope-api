import request from 'supertest';
import express from 'express';
import apodRoutes from '../../src/routes/apodRoutes.js';

// Mock do service
jest.mock('../../src/services/apodService.js', () => ({
  getApod: jest.fn(),
}));

import { getApod } from '../../src/services/apodService.js';

const app = express();
app.use(express.json());
app.use('/api/v1/apod', apodRoutes);

describe('APOD Controller', () => {
  beforeEach(() => jest.clearAllMocks());

  it('GET /api/v1/apod should return 200', async () => {
    const mockData = { url: 'https://apod.nasa.gov/image.jpg' };
    getApod.mockResolvedValue(mockData); // <-- MOCKADO
    const res = await request(app).get('/api/v1/apod');
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual(mockData);
  });

  it('GET /api/v1/apod should return 500 on error', async () => {
    getApod.mockRejectedValue(new Error('API error')); // <-- MOCKADO
    const res = await request(app).get('/api/v1/apod');
    expect(res.statusCode).toBe(500);
    expect(res.body).toHaveProperty('message', 'Error fetching APOD');
    expect(res.body).toHaveProperty('detail', 'API error');
  });
});
