import React from 'react';
import { render, screen } from '@testing-library/react';
import NotFound from '../404';
import { BrowserRouter } from 'react-router-dom';

test('renders correclty 404 Page', () => {
  render(<NotFound />, { wrapper: BrowserRouter });
  const linkElement = screen.getByText(/404 page not found/i);
  expect(linkElement).toBeInTheDocument();
});
