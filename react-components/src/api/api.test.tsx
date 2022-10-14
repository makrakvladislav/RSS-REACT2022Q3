import axios, { AxiosResponse } from 'axios';
import ICard from 'interface/ICard';
import Api from './api';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

test('should return data array', async () => {
  const mockedData: ICard[] = [
    {
      adult: false,
      backdrop_path: '/5hoS3nEkGGXUfmnu39yw1k52JX5.jpg',
      genre_ids: [28, 12, 14],
      id: 960704,
      original_language: 'ja',
      original_title: '鋼の錬金術師 完結編 最後の錬成',
      overview:
        'The Elric brothers’ long and winding journey comes to a close in this epic finale, where they must face off against an unworldly, nationwide threat.',
      popularity: 4030.287,
      poster_path: '/AeyiuQUUs78bPkz18FY3AzNFF8b.jpg',
      release_date: '2022-06-24',
      title: 'Fullmetal Alchemist: The Final Alchemy',
      video: false,
      vote_average: 6.7,
      vote_count: 47,
    },
  ];

  const mockedResponse: AxiosResponse = {
    data: mockedData,
    status: 200,
    statusText: 'ok',
    headers: {},
    config: {},
  };

  mockedAxios.get.mockResolvedValueOnce(mockedResponse);
  expect(axios.get).not.toHaveBeenCalled();
  const response = await Api.getMovies(1);
  expect(axios.get).toHaveBeenCalled();
  if (response !== undefined) expect(response!.results).toEqual(mockedData);
});
