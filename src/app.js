import express from 'express';
import cors from 'cors';
import routes from './routes/index.js';
import swaggerUi from 'swagger-ui-express'
import swaggerSpec from './config/swagger.js';

const app = express();

app.use(cors());
app.use(express.json());

const API_PREFIX = '/api/v1';

//routes
app.use(API_PREFIX, routes);

// Swagger
if (process.env.NODE_ENV !== 'production') {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
}


export default app;
