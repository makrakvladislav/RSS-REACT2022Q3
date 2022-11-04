import React, { Dispatch, useContext } from 'react';
import { TAction } from './Actions';
import { IState } from './StateProvider';
import { useNavigate } from 'react-router-dom';

interface IContext {
  state: IState;
  dispatch: Dispatch<TAction>;
}

export const StateContext = React.createContext<IContext | null>(null);

export const useDispatch = () => {
  const value = useContext(StateContext);
  if (!value) {
    throw new Error('error');
  }
  return value.dispatch;
};

export const useCustomState = () => {
  const value = useContext(StateContext);
  if (!value) {
    throw new Error('error');
  }
  return value.state;
};

export const itemSelector = (id: number) => (state: IState) => {
  const navigate = useNavigate();
  const item = state.cache.cards.find((item) => item.id === id);
  if (!item) {
    navigate('/');
    throw new Error(`No movie with id ${id}`);
  }
  return item;
};

export const cachedItemsSelector = (state: IState) => {
  const items = state.cache.cards;
  if (!items) {
    throw new Error('error');
  }
  return items;
};

export const formCardSelector = (state: IState) => {
  const cards = state.workspace.formPage.cards;
  if (!cards) {
    throw new Error('error');
  }
  return cards;
};

export const currentSearchPageSelector = (state: IState) => {
  const pageNumber = state.workspace.searchPage.pagination.currentPage;
  if (!pageNumber) {
    throw new Error('didn`t have page number');
  }
  return pageNumber;
};

export const currentMainPageSelector = (state: IState) => {
  const pageNumber = state.workspace.mainPage.pagination.currentPage;
  if (!pageNumber) {
    throw new Error('didn`t have page number');
  }
  return pageNumber;
};

export const searchQuerySelector = (state: IState) => {
  const searchQuery = state.workspace.searchPage.searchQuery;
  if (!searchQuery) {
    throw new Error('didn`t have search query');
  }
  return searchQuery;
};

export const limitPerPageSelector = (state: IState) => {
  const limit = state.workspace.limit;
  if (!limit) {
    throw new Error('didn`t limit per page');
  }
  return limit;
};

export const sortTypeSelector = (state: IState) => {
  const sortBy = state.workspace.mainPage.sortBy;
  if (!sortBy) {
    throw new Error('didn`t have sort type');
  }
  return sortBy;
};

export const useSelector = <V>(selector: (state: IState) => V) => {
  const state = useCustomState();

  const value = selector(state);
  return value;
};
