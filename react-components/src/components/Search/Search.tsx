import LimitSelector from 'components/UI/LimitSelector/LimitSelector';
import React, { memo, useEffect, useRef, useState } from 'react';
import { useAppDispatch } from 'store/hooks/redux';
import { setSearchCurrentPage, setSearchQuery } from 'store/reducers/ActionCreators';
import { limitOptions } from 'utils/helpers';

import './Search.css';

const IconSearch = () => (
  <svg
    aria-hidden="true"
    className="w-5 h-5 text-gray-500 dark:text-gray-400"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
    ></path>
  </svg>
);

const Search = memo(() => {
  const dispatch = useAppDispatch();
  const [query, saveSearchQuery] = useState('');
  const valueRef = useRef<HTMLInputElement | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    saveSearchQuery(e.target.value);
  };

  const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    dispatch(setSearchQuery(query));
    dispatch(setSearchCurrentPage(1));
    e.preventDefault();
  };

  useEffect(() => {
    const value = valueRef!.current;
    const lSValue = localStorage!.getItem('searchQuery');
    if (lSValue) {
      dispatch(setSearchQuery(lSValue));
      saveSearchQuery(lSValue);
    }
    return () => {
      if (value!.value !== null) {
        localStorage!.setItem('searchQuery', `${value!.value}`);
      }
    };
  }, []);

  return (
    <>
      <form className="flex flex-row mt-8 mb-8 max-w-sm mx-auto gap-3" onSubmit={onSubmitForm}>
        <div className="relative w-full">
          <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <IconSearch />
          </div>
          <div className="flex items-center">
            <input
              ref={valueRef}
              data-testid="search"
              type="search"
              name="search"
              value={query}
              placeholder="Search..."
              onChange={handleChange}
              className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5"
            />
          </div>
          <button
            type="submit"
            className={
              'text-white absolute right-2.5 bottom-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-1'
            }
          >
            Search
          </button>
        </div>
        <LimitSelector page="search" options={limitOptions} />
      </form>
    </>
  );
});

export default Search;
