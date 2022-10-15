import React from 'react';
import { render } from '@testing-library/react';
import CardList from './CardsList';
import axios, { AxiosResponse } from 'axios';
import Api from '../../api/api';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;
/*
test('Get Cardslist', async () => {
  const mockedData = [
    {
      albumId: 1,
      id: 1,
      title: 'accusamus beatae ad facilis cum similique qui sunt',
      url: 'https://via.placeholder.com/600/92c952',
      thumbnailUrl: 'https://via.placeholder.com/150/92c952',
    },
    {
      albumId: 1,
      id: 2,
      title: 'reprehenderit est deserunt velit ipsam',
      url: 'https://via.placeholder.com/600/771796',
      thumbnailUrl: 'https://via.placeholder.com/150/771796',
    },
  ];

  const mockedResponse: AxiosResponse = {
    data: mockedData,
    status: 200,
    statusText: 'OK',
    headers: {},
    config: {},
  };
  mockedAxios.get.mockResolvedValueOnce(mockedResponse);
  expect(axios.get).not.toHaveBeenCalled();
  const response = await Api.getData(10, 1);
  expect(axios.get).toHaveBeenCalled();

  if (response !== undefined) {
    expect(response.items).toEqual(mockedData);
    render(<CardList items={response.items} />);
  }
});
*/
