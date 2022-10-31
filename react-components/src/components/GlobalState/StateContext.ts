import React, { Dispatch, useContext } from 'react';
import { TAction } from './Actions';
import { IState } from './StateProvider';

interface IContext {
  state: IState;
  dispatch: Dispatch<TAction>;
}

export const StateContext = React.createContext<IContext | null>(null);

export const useDispatch = () => {
  const value = useContext(StateContext);
  if (!value) {
    throw new Error('error');
  }
  return value.dispatch;
};

export const useCustomState = () => {
  const value = useContext(StateContext);
  if (!value) {
    throw new Error('error');
  }
  return value.state;
};

export const itemSelector = (id: number) => (state: IState) => {
  const item = state.cache.cards.find((item) => item.id === id);
  if (!item) {
    throw new Error('error');
  }
  return item;
};

export const useSelector = <V>(selector: (state: IState) => V) => {
  const state = useCustomState();
  const value = selector(state);
  return value;
};
