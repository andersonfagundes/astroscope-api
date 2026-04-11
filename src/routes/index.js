import express from 'express';
import apodRoutes from './apodRoutes.js';
import epicRoutes from './epicRoutes.js';

const router = express.Router();

//api routes
router.use('/apod', apodRoutes);
router.use('/epic', epicRoutes);

export default router;
