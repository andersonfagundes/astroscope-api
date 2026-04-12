import express from 'express';
import { fetchEpic } from '../controllers/epicController.js';

const router = express.Router();

/**
 * @swagger
 * /epic:
 *   get:
 *     summary: Get Earth images from NASA EPIC API
 *     description: Fetch Earth imagery from NASA’s EPIC (Earth Polychromatic Imaging Camera) API for a given date
 *     parameters:
 *       - in: query
 *         name: date
 *         schema:
 *           type: string
 *           format: date
 *         description: Optional date in YYYY-MM-DD format. If not provided, returns the latest available images
 *     responses:
 *       200:
 *         description: Successfully fetched EPIC data
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   identifier:
 *                     type: string
 *                     example: "20230405_001234"
 *                   caption:
 *                     type: string
 *                     example: "Earth image captured by NASA EPIC camera"
 *                   image:
 *                     type: string
 *                     example: "epic_1b_20230405001234.png"
 *                   date:
 *                     type: string
 *                     format: date-time
 *                     example: "2023-04-05 12:34:56"
 *                   coords:
 *                     type: object
 *                     properties:
 *                       lat:
 *                         type: number
 *                         example: 34.05
 *                       lon:
 *                         type: number
 *                         example: -118.25
 *       500:
 *         description: Server error
 *     security:
 *       - bearerAuth: []
 */
router.get('/', fetchEpic);

export default router;
