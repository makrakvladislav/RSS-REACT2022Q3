import React, { memo } from 'react';
import { NavLink, Link } from 'react-router-dom';

const Menu = memo(() => {
  return (
    <nav className="flex w-full content-center">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <Link to="/" className="flex items-center">
          <span className="self-center text-xl font-semibold whitespace-nowrap">React App</span>
        </Link>
        <div className="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
          <ul className="flex flex-col mt-4 bg-gray-50 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-transparent">
            <li>
              <NavLink
                to="/"
                end
                className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
              >
                Main
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/search"
                end
                className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
              >
                Search
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
              >
                About us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/forms"
                className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
              >
                Forms
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
});

export default Menu;
