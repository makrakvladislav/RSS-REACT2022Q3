import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosResponse } from 'axios';
import { IFormCard } from 'components/Form/FormCard/FormCard';
import { AppDispatch } from 'store/store';
import { formSlice } from './formSlice';
import { movieSlice } from './movieSlice';
import { searchMovieSlice } from './searchMovieSlice';

import { cacheSlice } from './cacheSlice';
import { ICard } from 'components/Card/Card';

export const fetchMovies = createAsyncThunk(
  'movies/FetchAll',
  async ({ currentPage, sortType }: { currentPage: number; sortType: string }, thunkAPI) => {
    try {
      const response = await axios.get('https://api.themoviedb.org/3/discover/movie?', {
        params: {
          api_key: '1939abe3d00976407f86acd63c341f94',
          page: currentPage,
          sort_by: sortType + '.desc',
        },
      });
      return response.data.results;
    } catch {
      return thunkAPI.rejectWithValue('Movies load Error');
    }
  }
);

export const searchMovies = createAsyncThunk(
  'movies/Seach',
  async (
    { currentPage, searchQuery }: { currentPage: number; searchQuery: string; limit: number },
    thunkAPI
  ) => {
    console.log('search fetch');
    try {
      const response = await axios.get('https://api.themoviedb.org/3/search/movie?', {
        params: {
          api_key: '1939abe3d00976407f86acd63c341f94',
          page: currentPage,
          query: searchQuery,
        },
      });
      return response.data;
    } catch {
      return thunkAPI.rejectWithValue('Movies load Error');
    }
  }
);

export const addCache = (data: Array<ICard>) => (dispatch: AppDispatch) => {
  dispatch(cacheSlice.actions.addCache(data));
};

export const setCurrentPage = (page: number) => (dispatch: AppDispatch) => {
  dispatch(movieSlice.actions.setCurrentPage(page));
};

export const setSearchCurrentPage = (page: number) => (dispatch: AppDispatch) => {
  dispatch(searchMovieSlice.actions.setCurrentPage(page));
};

export const setLimitPage = (limit: number) => (dispatch: AppDispatch) => {
  dispatch(movieSlice.actions.setLimit(limit));
};

export const setSortType = (sortBy: string) => (dispatch: AppDispatch) => {
  dispatch(movieSlice.actions.setSortType(sortBy));
};

export const setLimitSearchPage = (limit: number) => (dispatch: AppDispatch) => {
  dispatch(searchMovieSlice.actions.setLimit(limit));
};

export const setSearchQuery = (query: string) => (dispatch: AppDispatch) => {
  dispatch(searchMovieSlice.actions.setSearchQuery(query));
};

export const setFormCard = (data: IFormCard) => (dispatch: AppDispatch) => {
  dispatch(formSlice.actions.addCards([data]));
};

export const abcAction = (data: AxiosResponse) => ({
  type: 'abc',
  payload: { data },
});
