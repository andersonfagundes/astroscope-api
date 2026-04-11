import axios from 'axios';
import nasaConfig from '../config/nasa.js';

function nasaErrorMessage(error) {
  if (!axios.isAxiosError(error)) return error.message ?? 'Unknown error';

  const status = error.response?.status;
  const data = error.response?.data;

  if (data && typeof data === 'object') {
    const nested = data.error;
    const text =
      (typeof nested === 'object' && nested?.message) ||
      data.msg ||
      data.message ||
      (typeof nested === 'string' ? nested : null);
    if (text) return `NASA (${status ?? '?'}): ${text}`;
  }
  if (typeof data === 'string' && data.trim())
    return `NASA (${status ?? '?'}): ${data}`;

  if (error.code === 'ECONNABORTED')
    return 'NASA did not respond in time (timeout).';
  if (error.code === 'ENOTFOUND' || error.code === 'ECONNREFUSED')
    return 'No network or DNS when contacting api.nasa.gov.';

  return error.message || 'Failed to contact NASA.';
}

export async function getApod(date) {
  try {
    const response = await axios.get(`${nasaConfig.baseUrl}/planetary/apod`, {
      params: {
        api_key: nasaConfig.apiKey,
        ...(date ? { date } : {}),
      },
      timeout: 15_000,
    });
    return response.data;
  } catch (error) {
    const msg = nasaErrorMessage(error);
    console.error('Failed to fetch APOD', msg);
    throw new Error(msg);
  }
}
