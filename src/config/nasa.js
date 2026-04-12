/** Se `NASA_API_KEY` não estiver no `.env`, a NASA aceita `DEMO_KEY` (limites mais baixos). */
export default {
  apiKey: process.env.NASA_API_KEY || 'DEMO_KEY',
  baseUrl: 'https://api.nasa.gov',
};
