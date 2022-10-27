import React from 'react';
import { render, screen } from '@testing-library/react';
import Main from '../Main';

test('renders correclty Main Page', () => {
  render(<Main />);
  expect(screen.getByText(/Main/i)).toBeInTheDocument();
});
