import Data from 'api/api';
import CardsList from 'components/CardsList/CardsList';
import { fetchDataAction, paginationSearchAction } from 'components/GlobalState/Actions';
import {
  cachedItemsSelector,
  limitPerPageSelector,
  pageCurrentSelector,
  searchQuerySelector,
  useCustomState,
  useDispatch,
  useSelector,
} from 'components/GlobalState/StateContext';
import Loader from 'components/UI/Loader/Loader';
import Modal from 'components/UI/Modal/Modal';
import SearchError from 'components/UI/SearchError/SearchError';
import React, { memo, useEffect, useState } from 'react';
import SearchInput from 'components/Search/Search';
import Pagination from 'components/UI/Pagination/Pagination';

const Search = memo(() => {
  const dispatch = useDispatch();
  const state = useCustomState();
  const cachedItems = useSelector(cachedItemsSelector);
  const currentPageNumber = useSelector(pageCurrentSelector);
  const searchQuery = useSelector(searchQuerySelector);
  const limitPerPage = useSelector(limitPerPageSelector);
  const [isLoading, setIsLoading] = useState(false);
  const [visibleModalId, setVisibleModalId] = useState<number | null>(null); // modalId === movieId

  const getData = async (query: string, page: number, limit: number) => {
    setIsLoading(true);
    const response = await Data.getByQuery(page, query);
    if (response !== undefined) {
      dispatch(fetchDataAction(response.results.results.slice(0, limit)));
      dispatch(paginationSearchAction(response.results.page, response.results.total_pages));
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getData(searchQuery, currentPageNumber, limitPerPage);
  }, [searchQuery, currentPageNumber, limitPerPage]);

  return (
    <>
      <h1>Search</h1>
      <SearchInput />
      {cachedItems.length === 0 && !isLoading && <SearchError />}
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <CardsList items={cachedItems} setVisible={setVisibleModalId} />
          {cachedItems.length > 0 && (
            <Pagination
              pageType="search"
              pageCount={state.workspace.searchPage.pagination.pagesCount}
              currentPage={state.workspace.searchPage.pagination.currentPage}
            />
          )}
        </>
      )}

      {visibleModalId && <Modal movieId={visibleModalId} setVisible={setVisibleModalId} />}
    </>
  );
});

export default Search;
