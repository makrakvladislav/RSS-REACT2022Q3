import React from 'react';
import { render, screen } from '@testing-library/react';
import Forms from 'pages/Forms';

test('renders correclty Form Page', () => {
  render(<Forms />);
  const linkElement = screen.getByText(/Form/i);
  expect(linkElement).toBeInTheDocument();
});
