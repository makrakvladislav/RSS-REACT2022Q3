import CardsList from 'components/CardsList/CardsList';
import Loader from 'components/UI/Loader/Loader';
import Modal from 'components/UI/Modal/Modal';
import SearchError from 'components/UI/SearchError/SearchError';
import React, { memo, useEffect, useState } from 'react';
import SearchInput from 'components/Search/Search';
import Pagination from 'components/UI/Pagination/Pagination';
import { useAppDispatch, useAppselector } from 'store/hooks/redux';
import { searchMovies } from 'store/reducers/ActionCreators';

const Search = memo(() => {
  const dispatch = useAppDispatch();
  const { cards, isLoading, searchQuery, currentPage, totalPages, limit, error } = useAppselector(
    (state) => state.searchMovieReducer
  );
  const [visibleModalId, setVisibleModalId] = useState<number | null>(null); // modalId === movieId

  const { cache } = useAppselector((state) => state.cacheReducer);

  useEffect(() => {
    if (searchQuery) {
      dispatch(searchMovies({ currentPage, searchQuery, limit }));
    }
    console.log(cache);
  }, [currentPage, searchQuery, limit]);

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
