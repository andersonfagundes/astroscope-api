import express from 'express';
import epicRoutes from './epicRoutes.js';

const router = express.Router();

//api routes
router.use('/epic', epicRoutes);

export default router;
