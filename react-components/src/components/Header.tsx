import React, { Component } from 'react';
import Menu from './UI/Menu/Menu';
import Search from './UI/Search/Search';

export class Header extends Component {
  render() {
    return (
      <>
        <header className="header gap-3 p-3 bg-gray-50 rounded border-gray-200 flex flex-wrap justify-between">
          <Menu></Menu>
          <Search></Search>
        </header>
      </>
    );
  }
}

export default Header;
