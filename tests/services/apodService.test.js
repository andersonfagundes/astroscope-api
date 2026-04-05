import { getApod } from '../../src/services/apodService.js';
import axios from 'axios';

jest.mock('axios'); // MOCK do axios

describe('APOD Service', () => {
  it('should return data with url', async () => {
    const mockData = { url: 'https://apod.nasa.gov/image.jpg' };
    axios.get.mockResolvedValue({ data: mockData });
    const data = await getApod();
    expect(data).toEqual(mockData);
  });

  it('should throw error when API fails', async () => {
    axios.get.mockRejectedValue(new Error('API error'));
    await expect(getApod()).rejects.toThrow('API error');
  });
});
