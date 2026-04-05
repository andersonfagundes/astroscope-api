import { getApod } from '../services/apodService.js';

export async function fetchApod(request, response) {
  const { date } = request.query; //opcional: permitir passar a data
  try {
    const data = await getApod(date);
    response.json(data);
  } catch (error) {
    response.status(500).json({ message: 'Error to featch APOD' });
  }
}