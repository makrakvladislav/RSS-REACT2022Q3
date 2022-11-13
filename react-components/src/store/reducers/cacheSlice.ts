import { createSlice } from '@reduxjs/toolkit';
import { ICard } from 'components/Card/Card';
import { fetchMovies, searchMovies } from './ActionCreators';

interface IState {
  cards: Array<ICard>;
}

const initialState: IState = {
  cards: [],
};

export const cacheSlice = createSlice({
  name: 'cache',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(searchMovies.fulfilled, (state, action) => {
      action.payload.results.forEach((item: ICard) => {
        if (!state.cards.map((item: ICard) => item.id).includes(item.id)) {
          state.cards = state.cards.concat(item);
        }
      });
    });
    builder.addCase(fetchMovies.fulfilled, (state, action) => {
      action.payload.forEach((item: ICard) => {
        if (!state.cards.map((item: ICard) => item.id).includes(item.id)) {
          state.cards = state.cards.concat(item);
        }
      });
    });
  },
});

export default cacheSlice.reducer;
