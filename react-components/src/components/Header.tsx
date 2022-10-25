import React, { memo } from 'react';
import Menu from './Menu/Menu';

const Header = memo(() => {
  return (
    <>
      <header className="header gap-3 p-3 bg-gray-50 rounded border-gray-200 flex flex-wrap justify-between">
        <Menu />
      </header>
    </>
  );
});

export default Header;
