import axios from 'axios';
import { getEpic } from '../../src/services/epicService.js';
import nasaConfig from '../../src/config/nasa.js';

jest.mock('axios');

describe('EPIC Service', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('returns EPIC data for latest images', async () => {
    const mockData = [{ identifier: '20260409_000830' }];
    axios.get.mockResolvedValue({ data: mockData });

    const data = await getEpic();

    expect(axios.get).toHaveBeenCalledWith(
      `${nasaConfig.baseUrl}/EPIC/api/natural`,
      { params: { api_key: nasaConfig.apiKey } },
    );
    expect(data).toEqual(mockData);
  });

  it('uses date endpoint when date is provided', async () => {
    const mockData = [{ identifier: '20240601_120000' }];
    axios.get.mockResolvedValue({ data: mockData });

    const data = await getEpic('2024-06-01');

    expect(axios.get).toHaveBeenCalledWith(
      `${nasaConfig.baseUrl}/EPIC/api/natural/date/2024-06-01`,
      { params: { api_key: nasaConfig.apiKey } },
    );
    expect(data).toEqual(mockData);
  });

  it('throws when NASA request fails', async () => {
    axios.get.mockRejectedValue(new Error('NASA unavailable'));

    await expect(getEpic()).rejects.toThrow('NASA unavailable');
  });
});
