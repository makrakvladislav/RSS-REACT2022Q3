import CardsList from 'components/CardsList/CardsList';
import Loader from 'components/UI/Loader/Loader';
import Modal from 'components/UI/Modal/Modal';
import SearchError from 'components/UI/SearchError/SearchError';
import React, { memo, useState } from 'react';
import SearchInput from 'components/Search/Search';
import Pagination from 'components/UI/Pagination/Pagination';
import { useAppselector } from 'store/hooks/redux';

const Search = memo(() => {
  const { cards, isLoading, currentPage, totalPages, error } = useAppselector(
    (state) => state.searchPageState
  );
  const [visibleModalId, setVisibleModalId] = useState<number | null>(null); // modalId === movieId

  return (
    <>
      <h1>Search</h1>
      <SearchInput />
      {cards.length === 0 && !isLoading && <SearchError error={error} />}
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <CardsList items={cards} setVisible={setVisibleModalId} />
          {cards.length > 0 && (
            <Pagination pageType="search" pageCount={totalPages} currentPage={currentPage} />
          )}
        </>
      )}
      {visibleModalId && <Modal movieId={visibleModalId} setVisible={setVisibleModalId} />}
    </>
  );
});

export default Search;
