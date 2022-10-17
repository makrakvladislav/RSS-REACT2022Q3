import React from 'react';
import Header from '../components/Header';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';

export default React.memo(function Layout() {
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
