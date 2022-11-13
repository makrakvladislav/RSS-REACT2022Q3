import { ThunkMiddleware } from '@reduxjs/toolkit';
import { searchMovies } from 'store/reducers/ActionCreators';

export const thunkSearchPageMiddleware: ThunkMiddleware =
  ({ dispatch, getState }) =>
  (next) =>
  (action) => {
    const state = getState();
    const currentPage = state.searchPageState.currentPage;
    const searchQuery = state.searchPageState.searchQuery;

    if (action.type === 'app/firstLoad') {
      dispatch(searchMovies({ currentPage, searchQuery }));
    }

    if (action.type === 'search/setSearchQuery') {
      const searchQuery: string = action.payload;
      const currentPage = 1;
      dispatch(searchMovies({ currentPage, searchQuery }));
    }

    if (action.type === 'search/changeSearchPage') {
      const currentPage: number = action.payload; // it`s mean nextPage
      dispatch(searchMovies({ searchQuery, currentPage }));
    }

    if (action.type === 'search/setLimit') {
      const currentPage = 1;
      dispatch(searchMovies({ searchQuery, currentPage }));
    }

    return next(action);
  };
