import CardsList from '../components/CardsList/CardsList';
import Loader from '../components/UI/Loader/Loader';
import React, { memo, useEffect, useState } from 'react';
import SearchError from 'components/UI/SearchError/SearchError';
import Modal from 'components/UI/Modal/Modal';
import Pagination from 'components/UI/Pagination/Pagination';
import { limitOptions, sortOptions } from 'utils/helpers';
import { useAppDispatch, useAppselector } from 'store/hooks/redux';
import { addCache, fetchMovies } from 'store/reducers/ActionCreators';
import LimitSelector from 'components/UI/LimitSelector/LimitSelector';
import SortSelector from 'components/UI/SortSelector/SortSelector';

const Main = memo(() => {
  const dispatch = useAppDispatch();
  const { cards, isLoading, currentPage, limit, sortType, error } = useAppselector(
    (state) => state.movieReducer
  );
  const [visibleModalId, setVisibleModalId] = useState<number | null>(null); // modalId === movieId
  const { cache, isCached } = useAppselector((state) => state.cacheReducer);

  useEffect(() => {
    dispatch(fetchMovies({ currentPage, sortType }));
    console.log(cache);
  }, [sortType, currentPage, limit, isCached]);

  return (
    <>
      <h1>Main</h1>
      <div className="flex gap-2 mb-3 justify-end">
        <LimitSelector page="main" options={limitOptions} />
        <SortSelector options={sortOptions} />
      </div>
      {cards.length == 0 && !isLoading && <SearchError error={error} />}
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <CardsList items={cards} setVisible={setVisibleModalId} />
          {cards.length > 0 && (
            <Pagination pageType="main" pageCount={300} currentPage={currentPage} />
          )}
        </>
      )}
      {visibleModalId && <Modal movieId={visibleModalId} setVisible={setVisibleModalId} />}
    </>
  );
});

export default Main;
