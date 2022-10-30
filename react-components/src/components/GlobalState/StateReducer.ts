import { ICard } from 'components/Card/Card';
import { TAction } from './Actions';
import { addItemAction, removeItemAction } from './StateContext';
import { IState } from './StateProvider';

const stateReducer = (state: IState, action: TAction): IState => {
  switch (action.type) {
    case 'ADD_ITEM': {
      console.log('ADD_TODO_ITEM', action.payload);
      return {
        ...state,
        items: [...state.items, action.payload.item],
      };
    }
    case 'REMOVE_ITEM': {
      console.log('REMOVE_TODO_ITEM', action.payload);
      const filtered = state.items.filter(({ id }) => id !== action.payload.id);
      return {
        ...state,
        items: filtered,
      };
    }
    default:
      throw new Error('Error');
  }
};

export default stateReducer;
