import axios from 'axios';
import nasaConfig from '../config/nasa.js';

export async function getEpic(date) {
  const base = `${nasaConfig.baseUrl}/EPIC/api/natural`;
  const url = date ? `${base}/date/${encodeURIComponent(date)}` : base;
  try {
    const response = await axios.get(url, {
      params: { api_key: nasaConfig.apiKey },
    });
    return response.data;
  } catch (error) {
    console.error('Failed to fetch Epic', error.message);
    throw error;
  }
}
