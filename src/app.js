import express from 'express';
import cors from 'cors';
import routes from './routes/index.js';

const app = express();

app.use(cors());
app.use(express.json());

const API_PREFIX = '/api/v1';

//routes
app.use(API_PREFIX, routes);

export default app;
