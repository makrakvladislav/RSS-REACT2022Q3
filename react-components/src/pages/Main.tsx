import CardsList from '../components/CardsList/CardsList';
import Loader from '../components/UI/Loader/Loader';
import React, { memo, useEffect, useState } from 'react';
import Data from '../api/api';
import SearchError from 'components/UI/SearchError/SearchError';
import Modal from 'components/UI/Modal/Modal';
import {
  cachedItemsSelector,
  limitPerPageSelector,
  currentMainPageSelector,
  useCustomState,
  useDispatch,
  useSelector,
  sortTypeSelector,
} from 'components/GlobalState/StateContext';
import { fetchDataAction, paginationMainAction } from 'components/GlobalState/Actions';
import Pagination from 'components/UI/Pagination/Pagination';
import CatalogSelector from 'components/UI/CatalogSelector/CatalogSelector';
import { limitOptions, sortOptions } from 'utils/helpers';

const Main = memo(() => {
  const dispatch = useDispatch();
  const state = useCustomState();
  const cachedItems = useSelector(cachedItemsSelector);
  const limitPerPage = useSelector(limitPerPageSelector);
  const [isLoading, setIsLoading] = useState(true);
  const [visibleModalId, setVisibleModalId] = useState<number | null>(null); // modalId === movieId

  const currentPage = useSelector(currentMainPageSelector);
  const sortType = useSelector(sortTypeSelector);

  const getData = async (page: number, sortBy: string, limit: number) => {
    setIsLoading(true);
    const response = await Data.getMovies(page, sortBy);
    if (response !== undefined) {
      dispatch(fetchDataAction(response.results.results.slice(0, limit)));
      dispatch(paginationMainAction(response.results.page, response.results.total_pages));
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getData(currentPage, sortType, limitPerPage);
  }, [sortType, currentPage, limitPerPage]);

  return (
    <>
      <h1>Main</h1>
      <div className="flex gap-2 mb-3 justify-end">
        <CatalogSelector type="limit" options={limitOptions} />
        <CatalogSelector type="sort" options={sortOptions} />
      </div>
      {cachedItems.length == 0 && !isLoading && <SearchError />}
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <CardsList items={cachedItems} setVisible={setVisibleModalId} />
          {cachedItems.length > 0 && (
            <Pagination
              pageType="main"
              pageCount={300}
              currentPage={state.workspace.mainPage.pagination.currentPage!}
            />
          )}
        </>
      )}

      {visibleModalId && <Modal movieId={visibleModalId} setVisible={setVisibleModalId} />}
    </>
  );
});

export default Main;
