import { getEpic } from '../services/epicService.js';

export async function fetchEpic(request, response) {
  const { date } = request.query;
  try {
    const data = await getEpic(date);
    response.json(data);
  } catch (error) {
    const detail = error instanceof Error ? error.message : String(error);
    console.error('fetchEpic', detail);
    response.status(500).json({
      message: 'Error fetching EPIC',
      detail,
    });
  }
}
