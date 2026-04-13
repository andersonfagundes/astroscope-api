import express from 'express';
import request from 'supertest';
import epicRoutes from '../../src/routes/epicRoutes.js';

jest.mock('../../src/services/epicService.js', () => ({
  getEpic: jest.fn(),
}));

import { getEpic } from '../../src/services/epicService.js';

const app = express();
app.use(express.json());
app.use('/api/v1/epic', epicRoutes);

describe('EPIC Controller', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('GET /api/v1/epic returns 200 and payload', async () => {
    const mockData = [{ identifier: '20260409_000830' }];
    getEpic.mockResolvedValue(mockData);

    const res = await request(app).get('/api/v1/epic');

    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual(mockData);
    expect(getEpic).toHaveBeenCalledWith(undefined);
  });

  it('passes date query to service', async () => {
    getEpic.mockResolvedValue([{ identifier: '20240601_120000' }]);

    const res = await request(app).get('/api/v1/epic?date=2024-06-01');

    expect(res.statusCode).toBe(200);
    expect(getEpic).toHaveBeenCalledWith('2024-06-01');
  });

  it('GET /api/v1/epic returns 500 when service throws', async () => {
    getEpic.mockRejectedValue(new Error('API error'));

    const res = await request(app).get('/api/v1/epic');

    expect(res.statusCode).toBe(500);
    expect(res.body).toHaveProperty('message', 'Error fetching EPIC');
    expect(res.body).toHaveProperty('detail', 'API error');
  });
});
