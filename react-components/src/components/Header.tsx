import React from 'react';
import Menu from './Menu/Menu';

export default React.memo(function Header() {
  return (
    <>
      <header className="header gap-3 p-3 bg-gray-50 rounded border-gray-200 flex flex-wrap justify-between">
        <Menu />
      </header>
    </>
  );
});
