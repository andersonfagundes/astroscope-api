import express from 'express';
import cors from 'cors';
import apodRoutes from './routes/apodRoutes.js';

const app = express();

app.use(cors());
app.use(express.json());

const API_PREFIX = '/api/v1';

//api_routes
app.use(API_PREFIX, apodRoutes); //Astronomy Picture of the Day

export default app;
