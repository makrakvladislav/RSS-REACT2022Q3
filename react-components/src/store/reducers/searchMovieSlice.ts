import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import { ICard } from 'components/Card/Card';
import { searchMovies } from './ActionCreators';

interface IState {
  cards: Array<ICard>;
  searchQuery: string;
  currentPage: number;
  totalPages: number;
  limit: number;
  isLoading: boolean;
  error: string;
}

const lSValue = localStorage!.getItem('searchQuery');

const initialState: IState = {
  cards: [],
  searchQuery: lSValue || 'matrix',
  currentPage: 1,
  totalPages: 1,
  limit: 20,
  isLoading: false,
  error: '',
};

export const searchMovieSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setMovies(state, action: PayloadAction<AxiosResponse>) {
      state.cards = action.payload.data;
    },
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
    changeSearchPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
    setSearchQuery(state, action: PayloadAction<string>) {
      state.searchQuery = action.payload;
    },
    setLimit(state, action: PayloadAction<number>) {
      state.currentPage = 1;
      state.limit = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(searchMovies.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = '';
      state.totalPages = action.payload.total_pages;
      state.cards = action.payload.results.slice(0, state.limit);
    });
    builder.addCase(searchMovies.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(searchMovies.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload as string;
    });
  },
});

export default searchMovieSlice.reducer;
