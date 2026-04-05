import { getEpic } from '../services/epicService.js';

export async function fetchApod(request, response) {
  const { date } = request.query;
  try {
    const data = await getApod(date);
    response.json(data);
  } catch (error) {
    response.status(500).json({ message: 'Error to featch APOD' });
  }
}
