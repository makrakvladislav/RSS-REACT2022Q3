import CardsList from '../components/CardsList/CardsList';
import Loader from '../components/UI/Loader/Loader';
import Search from '../components/Search/Search';
import React, { memo, useEffect, useState } from 'react';
import Data from '../api/api';
import SearchError from 'components/UI/SearchError/SearchError';
import Modal from 'components/UI/Modal/Modal';
import { ICard } from 'components/Card/Card';
import { useCustomState, useDispatch } from 'components/GlobalState/StateContext';
import {
  fetchDataAction,
  initializePaginationAction,
  saveSearchQueryAction,
} from 'components/GlobalState/Actions';
import Pagination from 'components/UI/Pagination/Pagination';

const Main = memo(() => {
  const [items, setItems] = useState<Array<ICard>>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [visibleModalId, setVisibleModalId] = useState<number | null>(null); // modalId === movieId

  const dispatch = useDispatch();
  const state = useCustomState();

  const getItems = async () => {
    const response = await Data.getMovies(1);
    console.log(response);

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
      console.log(response.results.total_pages);
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
      <h1>Main</h1>
      <Search handleSearch={searchHandler} />
      {items.length == 0 && !isLoading && <SearchError />}
      {isLoading ? <Loader /> : <CardsList items={items} setVisible={setVisibleModalId} />}
      <Pagination pageCount={state.workspace.mainPage.pagination.pagesCount!} />
      {visibleModalId && <Modal movieId={visibleModalId} setVisible={setVisibleModalId} />}
    </>
  );
});

export default Main;
