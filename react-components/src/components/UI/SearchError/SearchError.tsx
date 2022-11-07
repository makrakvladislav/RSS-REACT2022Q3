import React, { memo } from 'react';

interface IProps {
  error: string;
}

const SearchError = memo((props: IProps) => {
  return (
    <div>
      <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        We`re Sorry!
      </h1>
      <p className="mb-6 text-lg font-normal text-gray-500 text-center lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
        We can`t seem to find any movies that match your search.
        <br />
        {props.error && (
          <b>
            <i>{props.error}</i>
          </b>
        )}
      </p>
    </div>
  );
});

export default SearchError;
