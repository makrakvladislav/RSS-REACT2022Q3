import React from 'react';
import { render } from '@testing-library/react';
import CardList from './CardsList';
import axios, { AxiosResponse } from 'axios';
import Api from '../../api/api';
import { voidFn } from '../../utils/helpers';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

test('Get Cardslist', async () => {
  const mockedData = {
    results: [
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
      {
        adult: false,
        backdrop_path: '/etP5jwlwvkNhwe7jnI2AyA6ZKrR.jpg',
        genre_ids: [878],
        id: 575322,
        original_language: 'en',
        original_title: 'Звёздный разум',
        overview:
          "After depleting Earth's resources for centuries, humankind's survival requires an exodus to outer space. An international expedition is quickly formed to find a suitable new planet, but when plans go awry, the crew is suddenly stranded without power on a strange planet, where something unimaginable lies in wait.",
        popularity: 3661.034,
        poster_path: '/aVLV38txajXhEy2qNEClPIsDbAH.jpg',
        release_date: '2022-01-06',
        title: 'Project Gemini',
        video: false,
        vote_average: 5.4,
        vote_count: 89,
      },
    ],
  };

  const mockedResponse: AxiosResponse = {
    data: mockedData,
    status: 200,
    statusText: 'OK',
    headers: {},
    config: {},
  };
  mockedAxios.get.mockResolvedValueOnce(mockedResponse);
  expect(axios.get).not.toHaveBeenCalled();
  const response = await Api.getMovies(1, 'popularity');
  expect(axios.get).toHaveBeenCalled();

  if (response !== undefined) {
    expect(response.results).toEqual(mockedData);
    render(<CardList items={response.results.results} setVisible={voidFn} />);
  }
});
