import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICard } from 'components/Card/Card';
import { fetchMovies, searchMovies } from './ActionCreators';

interface IState {
  cache: Array<ICard>;
  isCached: boolean;
}

const initialState: IState = {
  cache: [],
  isCached: true,
};

export const cacheSlice = createSlice({
  name: 'Cache',
  initialState,
  reducers: {
    addCache(state, action: PayloadAction<Array<ICard>>) {
      state.cache = state.cache.concat(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMovies.fulfilled, (state, action) => {
      state.cache = state.cache.concat(action.payload);
      state.isCached = false;
    });

    builder.addCase(searchMovies.fulfilled, (state, action) => {
      state.cache = state.cache.concat(action.payload.results);
      state.isCached = false;
    });
  },
});

export default cacheSlice.reducer;
