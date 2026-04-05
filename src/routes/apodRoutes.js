import express from 'express';
import { fetchApod } from '../controllers/apodController.js';

const router = express.Router();

router.get('/', fetchApod);

export default router;
