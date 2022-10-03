import React, { Component } from 'react';
import Menu from './Menu/Menu';

export class Header extends Component {
  render() {
    return (
      <>
        <header className="header gap-3 p-3 bg-gray-50 rounded border-gray-200 flex flex-wrap justify-between">
          <Menu />
        </header>
      </>
    );
  }
}

export default Header;
