import CardsList from '../components/CardsList/CardsList';
import Loader from '../components/UI/Loader/Loader';
import Search from '../components/Search/Search';
import React, { memo, useEffect, useState } from 'react';
import Data from '../api/api';
import SearchError from 'components/UI/SearchError/SearchError';
import Modal from 'components/UI/Modal/Modal';
import { ICard } from 'components/Card/Card';

const Main = memo(() => {
  const [items, setItems] = useState<Array<ICard>>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [visibleModalId, setVisibleModalId] = useState<number | null>(null); // modalId === movieId

  const getItems = async () => {
    const response = await Data.getMovies(1);
    if (response !== undefined) {
      console.log(response.results);
      setItems(response.results.results);
      setIsLoading(false);
    }
  };

  const searchHandler = async (query: string) => {
    setIsLoading(true);
    const response = await Data.getByQuery(1, query);
    if (response !== undefined) {
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
      {visibleModalId && <Modal movieId={visibleModalId} setVisible={setVisibleModalId} />}
    </>
  );
});

export default Main;
