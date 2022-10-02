import React, { Component } from 'react';
import Header from '../components/Header';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';

class Layout extends Component {
  render() {
    return (
      <>
        <Header />
        <main>
          <Outlet></Outlet>
        </main>
        <Footer />
      </>
    );
  }
}

export default Layout;
