import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICard } from 'components/Card/Card';
import { fetchMovies } from './ActionCreators';

export interface IMovieSliceState {
  cards: Array<ICard>;
  currentPage: number;
  totalPages: number;
  limit: number;
  sortType: string;
  isLoading: boolean;
  error: string;
}

const initialState: IMovieSliceState = {
  cards: [],
  currentPage: 1,
  totalPages: 1,
  limit: 20,
  sortType: 'popularity',
  isLoading: false,
  error: '',
};

export const movieSlice = createSlice({
  name: 'Movie',
  initialState,
  reducers: {
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
      console.log(state.currentPage);
    },
    setLimit(state, action: PayloadAction<number>) {
      state.limit = action.payload;
    },
    setSortType(state, action: PayloadAction<string>) {
      state.sortType = action.payload;
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
    builder.addCase(fetchMovies.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = '';
      state.cards = action.payload.slice(0, state.limit);
    });
    builder.addCase(fetchMovies.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchMovies.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload as string;
    });
  },

  /*
  extraReducers: {
    [fetchMovies.fulfilled.type]: (state, action: PayloadAction<Array<ICard>>) => {
      state.isLoading = false;
      state.error = '';
      state.cards = action.payload;
    },
    [fetchMovies.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchMovies.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
  */
});

export default movieSlice.reducer;
