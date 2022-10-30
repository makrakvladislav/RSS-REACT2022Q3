import React, { memo } from 'react';
import { NavLink } from 'react-router-dom';

const Footer = memo(() => {
  return (
    <>
      <footer className="w-full p-4 bg-gray-50 rounded border-gray-200 flex flex-wrap justify-between items-center mx-auto mt-auto">
        <span className="text-sm text-gray-500 sm:text-center">
          <a
            href="https://github.com/makrakvladislav"
            target="_blank"
            className="hover: underline"
            rel="noreferrer"
          >
            ©&nbsp;2022&nbsp;github
          </a>
        </span>
        <ul className="flex flex-wrap items-center text-sm text-gray-5">
          <li>
            <NavLink to="/" end className="mr-4 font-medium hover:underline">
              Main
            </NavLink>
          </li>
          <li>
            <NavLink to="/catalog" end className="mr-4 font-medium hover:underline">
              Catalog
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="mr-4 font-medium hover:underline">
              About us
            </NavLink>
          </li>
          <li>
            <NavLink to="/forms" className="mr-4 font-medium hover:underline">
              Forms
            </NavLink>
          </li>
        </ul>
      </footer>
    </>
  );
});

export default Footer;
