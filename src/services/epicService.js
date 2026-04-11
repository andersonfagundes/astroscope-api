import axios from 'axios';
import nasaConfig from '../config/nasa.js';

export async function getApod(date) {
  try {
    const response = await axios.get(
      `${nasaConfig.baseUrl}/EPIC/api/natural/all?`,
      {
        params: {
          api_key: nasaConfig.apiKey,
          date,
        },
      },
    );
    return response.data;
  } catch (error) {
    console.error('Failed to fetch APOD', error.message);
    throw error;
  }
}
