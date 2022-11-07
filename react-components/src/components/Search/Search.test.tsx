import React from 'react';
import { render, screen } from '@testing-library/react';
import Search from './Search';
import axios, { AxiosResponse } from 'axios';
import { ICard } from 'components/Card/Card';
import Api from '../../api/api';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;
class LocalStorageMock {
  store: { [key: string]: string };
  length: number;
  key: string | null;
  mockedValue: string;
  constructor(mockedValue?: string) {
    this.store = {};
    this.length = 0;
    this.key = 'searchQuery';
    this.mockedValue = mockedValue || '';
  }

  clear() {
    this.store = {};
  }

  getItem(key: string) {
    return this.store[key] || null;
  }

  setItem(key: string, value: unknown) {
    if (this.mockedValue) {
      this.store[key] = this.mockedValue;
    } else {
      this.store[key] = String(value);
    }
  }

  removeItem(key: string) {
    delete this.store[key];
  }
}

describe('Search test', () => {
  it('check search query', async () => {
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
    const response = await Api.getByQuery(1, 'matrix');
    expect(axios.get).toHaveBeenCalled();
    expect(response!.results).toEqual(mockedData);
  });
  it('check search value from LS', () => {
    Object.defineProperty(window, 'localStorage', {
      value: new LocalStorageMock('mocked value'),
    });

    localStorage.setItem('searchQuery', 'example value');
    render(<Search />);
    expect(screen.getByRole('searchbox')).toHaveValue('mocked value');
    screen.debug();
  });
});
