import { ThunkMiddleware } from '@reduxjs/toolkit';
import { fetchMovies } from 'store/reducers/ActionCreators';

export const thunkMainPageMiddleware: ThunkMiddleware =
  ({ dispatch, getState }) =>
  (next) =>
  (action) => {
    const state = getState();
    const currentPage = state.mainPageState.currentPage;
    const sortType = state.mainPageState.sortType;

    if (action.type === 'app/firstLoad') {
      dispatch(fetchMovies({ currentPage, sortType }));
    }

    if (action.type === 'movie/changePage') {
      const currentPage: number = action.payload; // it`s mean nextPage
      dispatch(fetchMovies({ currentPage, sortType }));
    }

    if (action.type === 'movie/setSortType') {
      const sortType: string = action.payload;
      const currentPage = 1;
      dispatch(fetchMovies({ currentPage, sortType }));
    }

    if (action.type === 'movie/setLimit') {
      const currentPage = 1;
      dispatch(fetchMovies({ currentPage, sortType }));
    }

    return next(action);
  };
