import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICard } from 'components/Card/Card';

interface IState {
  cache: Array<ICard>;
}

const initialState: IState = {
  cache: [],
};

export const cacheSlice = createSlice({
  name: 'Cache',
  initialState,
  reducers: {
    addCache(state, action: PayloadAction<Array<ICard>>) {
      state.cache = state.cache.concat(action.payload);
    },
  },
});

export default cacheSlice.reducer;
