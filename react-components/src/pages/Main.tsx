import CardsList from '../components/CardsList/CardsList';
import Loader from '../components/UI/Loader/Loader';
import React, { memo, useState } from 'react';
import SearchError from 'components/UI/SearchError/SearchError';
import Modal from 'components/UI/Modal/Modal';
import Pagination from 'components/UI/Pagination/Pagination';
import { limitOptions, sortOptions } from 'utils/helpers';
import { useAppselector } from 'store/hooks/redux';
import LimitSelector from 'components/UI/LimitSelector/LimitSelector';
import SortSelector from 'components/UI/SortSelector/SortSelector';

const Main = memo(() => {
  const { cards, isLoading, currentPage, error } = useAppselector((state) => state.mainPageState);
  const [visibleModalId, setVisibleModalId] = useState<number | null>(null); // modalId === movieId

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
