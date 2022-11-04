import { saveSearchQueryAction } from 'components/GlobalState/Actions';
import { useDispatch } from 'components/GlobalState/StateContext';
import { CatalogSelector } from 'components/UI/CatalogSelector/CatalogSelector';
import React, { memo, useEffect, useRef, useState } from 'react';
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
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState('');
  const [disabledSearch, setDisabledSearch] = useState(true);
  const valueRef = useRef<HTMLInputElement | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    if (e.target.value.length === 0) {
      setDisabledSearch(true);
    } else {
      setDisabledSearch(false);
    }
  };

  const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    dispatch(saveSearchQueryAction(searchQuery));
    e.preventDefault();
    //dispatch(paginationSearchAction(1, 1));
  };

  useEffect(() => {
    const value = valueRef!.current;
    const lSValue = localStorage!.getItem('searchQuery');
    if (lSValue) {
      setDisabledSearch(false);
      setSearchQuery(lSValue);
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
              value={searchQuery}
              placeholder="Search..."
              onChange={handleChange}
              className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5"
            />
          </div>
          <button
            type="submit"
            disabled={disabledSearch}
            className={
              disabledSearch
                ? 'bg-blue-400 cursor-not-allowed text-white absolute right-2.5 bottom-2 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-1'
                : 'text-white absolute right-2.5 bottom-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-1'
            }
          >
            Search
          </button>
        </div>
        <CatalogSelector type="limit" options={limitOptions} />
      </form>
    </>
  );
});

export default Search;
