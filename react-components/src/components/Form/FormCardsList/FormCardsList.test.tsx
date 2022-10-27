import React from 'react';
import { render, screen } from '@testing-library/react';
import FormCardsList from './FormCardsList';

const mockedData = [
  {
    name: 'Jhon',
    lastName: 'Doe',
    birthday: '20221009',
    email: 'test@yandex.ru',
    avatar: 'https://via.placeholder.com/600/92c952',
    country: 'Belarus',
    subscribe: false,
    agree: true,
  },
  {
    name: 'Agent',
    lastName: 'Smith',
    birthday: '19991009',
    email: 'test2@yandex.ru',
    avatar: 'https://via.placeholder.com/600/92c952',
    country: 'Ukraine',
    subscribe: true,
    agree: true,
  },
];

describe('Form Cards list', () => {
  it('Render form cards list', () => {
    //render(<FormCardsList items={mockedData} />);
    expect(screen.getByTestId('form-cardsList')).toBeInTheDocument();
    const name = screen.getByText(/Jhon/i);
    const lastName = screen.getByText(/Doe/i);
    expect(name).toBeInTheDocument();
    expect(lastName).toBeInTheDocument();
  });
});
