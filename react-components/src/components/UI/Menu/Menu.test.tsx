import React from 'react';
import { create } from 'react-test-renderer';
import { MemoryRouter, Routes, Route } from 'react-router-dom';

import Main from 'pages/Main';
import NotFound from 'pages/404';
import About from 'pages/About';

describe('Check react router', () => {
  it('renders correctly About Page', () => {
    const renderer = create(
      <MemoryRouter initialEntries={['/about']}>
        <Routes>
          <Route path="about" element={<About />} />
        </Routes>
      </MemoryRouter>
    );

    //expect(renderer.toJSON()).toMatchSnapshot();
  });

  it('renders correctly Home Page', () => {
    const renderer = create(
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </MemoryRouter>
    );

    //expect(renderer.toJSON()).toMatchSnapshot();
  });

  it('renders correctly 404 Page', () => {
    const renderer = create(
      <MemoryRouter initialEntries={['/*']}>
        <Routes>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </MemoryRouter>
    );

    //expect(renderer.toJSON()).toMatchSnapshot();
  });
});
