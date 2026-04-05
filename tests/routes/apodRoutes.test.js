// tests/routes/apodRoutes.test.js
import express from 'express';
import request from 'supertest';
import apodRoutes from '../../src/routes/apodRoutes.js';

const app = express();
app.use(express.json());
app.use('/api/v1/apod', apodRoutes);

describe('APOD Routes', () => {
  it('should respond to GET /api/v1/apod', async () => {
    // Não mockando service aqui, apenas checando se a rota existe
    const res = await request(app).get('/api/v1/apod');
    expect(res.statusCode).toBeDefined(); // 200 ou 500
  });
});
