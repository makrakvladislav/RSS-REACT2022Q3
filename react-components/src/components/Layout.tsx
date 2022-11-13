import React, { memo } from 'react';
import Header from '../components/Header';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import { useAppDispatch } from 'store/hooks/redux';

const Layout = memo(() => {
  return (
    <>
      <Header />
      <main>
        <Outlet></Outlet>
      </main>
      <Footer />
    </>
  );
});

export default Layout;
