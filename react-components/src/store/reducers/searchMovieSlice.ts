import { createSlice, PayloadAction } from '@reduxjs/toolkit';
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

const initialState: IState = {
  cards: [],
  searchQuery: '',
  currentPage: 1,
  totalPages: 1,
  limit: 20,
  isLoading: false,
  error: '',
};

export const searchMovieSlice = createSlice({
  name: 'Movie Search',
  initialState,
  reducers: {
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
      console.log(state.currentPage);
    },
    setSearchQuery(state, action: PayloadAction<string>) {
      state.searchQuery = action.payload;
      console.log(state.searchQuery);
    },
    setLimit(state, action: PayloadAction<number>) {
      state.limit = action.payload;
    },
    /*
    moviesFetching(state) {
      state.isLoading = true;
    },
    moviesFetchingSuccess(state, action: PayloadAction<Array<ICard>>) {
      state.isLoading = false;
      state.error = '';
      state.cards = action.payload;
    },
    moviesFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
    */
  },

  extraReducers: (builder) => {
    builder.addCase(searchMovies.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = '';
      state.totalPages = action.payload.total_pages;
      console.log(state.limit);
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
