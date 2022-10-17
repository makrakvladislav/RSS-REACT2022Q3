/*
import React from 'react';
import { render, screen } from '@testing-library/react';
import axios, { AxiosResponse } from 'axios';
import ICard from 'interface/ICard';
import Api from '../../../api/api';
import Modal from './Modal';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('Modal test', () => {
  it('Show modal', async () => {
    const mockedData: ICard[] = [
      {
        adult: false,
        backdrop_path: '/l4QHerTSbMI7qgvasqxP36pqjN6.jpg',
        genre_ids: [28, 878],
        id: 603,
        original_language: 'en',
        original_title: 'The Matrix',
        overview:
          'Set in the 22nd century, The Matrix tells the story of a computer hacker who joins a group of underground insurgents fighting the vast and powerful computers who now rule the earth.',
        popularity: 64.587,
        poster_path: '/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg',
        release_date: '1999-03-30',
        title: 'The Matrix',
        video: false,
        vote_average: 8.2,
        vote_count: 22212,
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
    const response = await Api.getByMovieId(624860);
    const data = response!.results;
    expect(axios.get).toHaveBeenCalled();
    if (response !== undefined) {
      console.log([data]);
      expect(data).toEqual(mockedData);

      const modal = render(<Modal modalData={[data]} isVisible={true} />);

      // expect(modal).toMatchSnapshot();
    }
  });
});
*/
