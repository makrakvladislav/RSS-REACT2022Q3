import CardsList from '../components/CardsList/CardsList';
import Loader from '../components/UI/Loader/Loader';
import Search from '../components/Search/Search';
import React, { useEffect, useState } from 'react';
import Data from '../api/api';
import IMyState from '../interface/IMyState';
import SearchError from 'components/UI/SearchError/SearchError';
import Modal from 'components/UI/Modal/Modal';

function Main() {
  const [items, setItems] = useState<IMyState>({ items: [] });
  const [isLoading, setIsLoading] = useState(false);
  const [modalIsvisible, setModalIsvisible] = useState(false);
  const [movieId, setModalMovieId] = useState(0);

  const getItems = async () => {
    setIsLoading(true);
    const response = await Data.getMovies(1);
    if (response !== undefined) {
      setItems({ items: response.results.results });
      setIsLoading(false);
    }
  };

  const modalHandler = async (isVisible: boolean, movieId?: number) => {
    if (isVisible) {
      setModalIsvisible(isVisible);
      setModalMovieId(movieId!);
    } else {
      setModalIsvisible(isVisible);
    }
  };

  const searchHandler = async (query: string) => {
    setIsLoading(true);
    const response = await Data.getByQuery(1, query);
    if (response !== undefined) {
      setItems({ items: response.results.results });
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
      {items.items.length == 0 && !isLoading && <SearchError />}
      {isLoading ? <Loader /> : <CardsList items={items.items} setVisible={modalHandler} />}
      {modalIsvisible && (
        <Modal isVisible={modalIsvisible} movieId={movieId} setVisible={modalHandler} />
      )}
    </>
  );
}

export default Main;
