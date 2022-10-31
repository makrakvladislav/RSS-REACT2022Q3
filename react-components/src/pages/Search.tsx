import Data from 'api/api';
import { ICard } from 'components/Card/Card';
import CardsList from 'components/CardsList/CardsList';
import {
  fetchDataAction,
  initializePaginationAction,
  saveSearchQueryAction,
} from 'components/GlobalState/Actions';
import { useCustomState, useDispatch } from 'components/GlobalState/StateContext';
import Loader from 'components/UI/Loader/Loader';
import Modal from 'components/UI/Modal/Modal';
import SearchError from 'components/UI/SearchError/SearchError';
import React, { memo, useEffect, useState } from 'react';
import SearchInput from 'components/Search/Search';
import Pagination from 'components/UI/Pagination/Pagination';

const Search = memo(() => {
  const [items, setItems] = useState<Array<ICard>>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [visibleModalId, setVisibleModalId] = useState<number | null>(null); // modalId === movieId

  const dispatch = useDispatch();
  const state = useCustomState();

  const getItems = async () => {
    const response = await Data.getMovies(1);
    if (response !== undefined) {
      setIsLoading(false);
      if (state.cache.cards.length > 0) {
        setItems(state.cache.cards);
      } else {
        dispatch(fetchDataAction(response.results.results));
        setItems(response.results.results);
      }
    }
  };

  const searchHandler = async (query: string) => {
    setIsLoading(true);
    const response = await Data.getByQuery(1, query);
    if (response !== undefined) {
      dispatch(initializePaginationAction(response.results.page, response.results.total_pages));

      dispatch(fetchDataAction(response.results.results));
      dispatch(saveSearchQueryAction(query));
      setItems(response.results.results);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getItems();
  }, []);

  return (
    <>
      <h1>Search</h1>
      <SearchInput handleSearch={searchHandler} />
      {items.length == 0 && !isLoading && <SearchError />}
      {isLoading ? <Loader /> : <CardsList items={items} setVisible={setVisibleModalId} />}
      <Pagination pageCount={state.workspace.mainPage.pagination.pagesCount!} />
      {visibleModalId && <Modal movieId={visibleModalId} setVisible={setVisibleModalId} />}
    </>
  );
});

export default Search;
