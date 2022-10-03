import React from 'react';
import { render, screen } from '@testing-library/react';
import Search from './Search';

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

test('check search value from LS', () => {
  Object.defineProperty(window, 'localStorage', {
    value: new LocalStorageMock('mocked value'),
  });

  localStorage.setItem('searchQuery', 'example value');
  const { getByRole } = render(<Search />);
  expect(screen.getByRole('searchbox')).toHaveValue('mocked value');
  screen.debug();
});
