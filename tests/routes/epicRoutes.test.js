import request from 'supertest';
import app from '../../src/app.js';

jest.mock('../../src/services/epicService.js', () => ({
  getEpic: jest.fn(),
}));

import { getEpic } from '../../src/services/epicService.js';

describe('EPIC Routes', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('GET /api/v1/epic should be wired and return 200', async () => {
    getEpic.mockResolvedValue([{ identifier: '20260409_000830' }]);

    const res = await request(app).get('/api/v1/epic');

    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('POST /api/v1/epic should return 404 (method not implemented)', async () => {
    const res = await request(app).post('/api/v1/epic').send({});

    expect(res.statusCode).toBe(404);
  });
});
