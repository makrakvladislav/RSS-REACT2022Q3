import React from 'react';
import { ICard } from 'components/Card/Card';
import { Reducer, useReducer } from 'react';
import { TAction } from './Actions';
import { StateContext } from './StateContext';
import stateReducer from './StateReducer';

export interface IState {
  items: Array<ICard>;
  /*
  cache: {
    cards: Array<ICard>;
  };
  workspace: {
    searchPage: {
      searchQuery: string;
    };
    catalogPage: {
      sortBy: string;
    };
  };
  */
}

//cache
//syncSearchQuery

export const initialState: IState = {
  items: [],
  //addItem: (item: ICard) => {},
  //removeItem: (item: ICard) => {},
};

interface IProps {
  children: React.ReactNode;
}

export const StateProvider = ({ children }: IProps) => {
  const [state, dispatch] = useReducer<Reducer<IState, TAction>>(stateReducer, initialState);

  return <StateContext.Provider value={{ state, dispatch }}>{children}</StateContext.Provider>;
};
