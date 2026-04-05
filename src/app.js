import express from 'express';
import cors from 'cors';
import routes from './routes/index.js';
import { authenticate } from '../src/middleware/authMiddleware.js';

const app = express();

app.use(cors());
app.use(express.json());

const API_PREFIX = '/api/v1';

//routes
app.use(API_PREFIX, authenticate, routes);

export default app;
