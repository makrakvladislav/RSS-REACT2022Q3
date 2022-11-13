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
  name: 'movie',
  initialState,
  reducers: {
    setMovies(state, action: PayloadAction<Array<ICard>>) {
      state.cards = action.payload;
    },
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
    changePage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
    setLimit(state, action: PayloadAction<number>) {
      state.currentPage = 1;
      state.limit = action.payload;
    },
    setSortType(state, action: PayloadAction<string>) {
      state.currentPage = 1;
      state.sortType = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchMovies.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = '';
      state.cards = action.payload.slice(0, state.limit);
      //movieSlice.caseReducers.setMovies(state, action);
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
  extraReducers: (builder) => {
    builder.addCase('app/firstLoad', (state, action) => {
      console.log('[projectSlice]:', action);
    });
    builder.addCase(fetchMovies.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = '';
      state.cards = action.payload.slice(0, state.limit);
      //movieSlice.caseReducers.setMovies(state, action);
    });
  },
  */
});

export default movieSlice.reducer;
