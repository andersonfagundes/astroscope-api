import express from 'express';
import { fetchApod } from '../controllers/apodController.js';

const router = express.Router();

router.get('/apod', fetchApod); //Get api/apod?date=YYYY-MM-DD

export default router;
