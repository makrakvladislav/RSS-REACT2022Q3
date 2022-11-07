import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IFormCard } from 'components/Form/FormCard/FormCard';

interface IState {
  cards: Array<IFormCard>;
}

const initialState: IState = {
  cards: [],
};

export const formSlice = createSlice({
  name: 'Form',
  initialState,
  reducers: {
    addCards(state, action: PayloadAction<Array<IFormCard>>) {
      state.cards = state.cards.concat(action.payload);
    },
  },
});

export default formSlice.reducer;
