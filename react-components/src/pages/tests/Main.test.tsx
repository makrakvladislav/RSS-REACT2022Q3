import React from 'react';
import { render, screen } from '@testing-library/react';
import Main from '../Main';

test('renders correclty Main Page', () => {
  render(<Main />);
  const linkElement = screen.getByText(/Main page/i);
  expect(linkElement).toBeInTheDocument();
});
