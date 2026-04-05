import express from 'express';
import { fetchApod } from '../controllers/apodController.js';

const router = express.Router();

router.get('/epic', fetchApod);

export default router;
