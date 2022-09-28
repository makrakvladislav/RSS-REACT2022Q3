import React, { Component } from 'react';
import Header from 'components/UI/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from './UI/Footer/Footer';

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
