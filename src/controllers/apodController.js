import { getApod } from '../services/apodService.js';

export async function fetchApod(request, response) {
  const { date } = request.query;
  try {
    const data = await getApod(date);
    response.json(data);
  } catch (error) {
    const detail = error instanceof Error ? error.message : String(error);
    console.error('fetchApod', detail);
    response.status(500).json({
      message: 'Error fetching APOD',
      detail,
    });
  }
}
