import Input from 'components/UI/Input/Input';
import React, { useEffect, useRef, useState } from 'react';
import './Search.css';
interface ChildProps {
  handleSearch?: (searchQuery: string) => void;
}

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

function Search(props: ChildProps) {
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
    e.preventDefault();
    props.handleSearch!(searchQuery);
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
      <form className="flex-1 mt-8 mb-8 max-w-sm mx-auto" onSubmit={onSubmitForm}>
        <div className="relative">
          <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <IconSearch />
          </div>
          <Input
            ref={valueRef}
            data-testid="search"
            type="search"
            name="search"
            value={searchQuery}
            iserror={1}
            placeholder="Search..."
            onChange={handleChange}
          />

          <button
            type="submit"
            disabled={disabledSearch}
            className={
              disabledSearch
                ? 'bg-blue-400 cursor-not-allowed text-white absolute right-2.5 bottom-2.5 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-1'
                : 'text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-1'
            }
          >
            Search
          </button>
        </div>
      </form>
    </>
  );
}

export default Search;
