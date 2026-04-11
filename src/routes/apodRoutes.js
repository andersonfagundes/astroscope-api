import express from 'express';
import { fetchApod } from '../controllers/apodController.js';

const router = express.Router();

/**
 * @swagger
 * /apod:
 *   get:
 *     summary: Get Astronomy Picture of the Day
 *     description: Fetch the NASA APOD data for a given date
 *     parameters:
 *       - in: query
 *         name: date
 *         schema:
 *           type: string
 *           format: date
 *         description: Optional date in YYYY-MM-DD format
 *     responses:
 *       200:
 *         description: Successfully fetched APOD data
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 url:
 *                   type: string
 *                   example: https://apod.nasa.gov/image.jpg
 *                 title:
 *                   type: string
 *                 explanation:
 *                   type: string
 *       500:
 *         description: Server error
 *     security:
 *       - bearerAuth: []
 */
router.get('/', fetchApod);

export default router;
