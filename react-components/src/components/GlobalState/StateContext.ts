import { ICard } from 'components/Card/Card';
import React, { Children, Dispatch, ReactNode, Reducer, useContext, useReducer } from 'react';
import { TAction } from './Actions';
import { IState } from './StateProvider';
import stateReducer from './StateReducer';

interface IContext {
  state: IState;
  dispatch: Dispatch<TAction>;
}

export const StateContext = React.createContext<IContext | null>(null);

export const addItemAction = (item: ICard) => ({
  type: 'ADD_ITEM' as const,
  payload: { item },
});

export const removeItemAction = (id: number) => ({ type: 'REMOVE_ITEM' as const, payload: { id } });

export const useDispatch = () => {
  const value = useContext(StateContext);
  if (!value) {
    throw new Error('error');
  }
  return value.dispatch;
};

export const useState = () => {
  const value = useContext(StateContext);
  if (!value) {
    throw new Error('error');
  }
  return value.state;
};

export const itemSelector = (id: number) => (state: IState) => {
  const item = state.items.find((item) => item.id === id);
  if (!item) {
    throw new Error('error');
  }
  return item;
};

export const useSelector = <V>(selector: (state: IState) => V) => {
  const state = useState();
  const value = selector(state);
  return value;
};
