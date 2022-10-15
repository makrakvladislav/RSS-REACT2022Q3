import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from './Card';

const data = {
  albumId: 1,
  id: 1,
  title: 'accusamus beatae ad facilis cum similique qui sunt',
  url: 'https://via.placeholder.com/600/92c952',
  thumbnailUrl: 'https://via.placeholder.com/150/92c952',
};
/*
test('renders card component', () => {
  render(<Card item={data} />);
  screen.debug();
  expect(
    screen.getByText(/accusamus beatae ad facilis cum similique qui sunt/i)
  ).toBeInTheDocument();
});
*/
