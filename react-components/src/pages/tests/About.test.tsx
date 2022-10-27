import React from 'react';
import { render, screen } from '@testing-library/react';
import About from '../About';

test('renders correclty Main Page', () => {
  render(<About />);
  const linkElement = screen.getByText(/About/i);
  expect(linkElement).toBeInTheDocument();
});
