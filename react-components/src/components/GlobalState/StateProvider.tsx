import React from 'react';
import { ICard } from 'components/Card/Card';
import { Reducer, useReducer } from 'react';
import { TAction } from './Actions';
import { StateContext } from './StateContext';
import stateReducer from './StateReducer';

export interface IState {
  cache: {
    cards: Array<ICard>;
  };

  workspace: {
    searchPage: {
      searchQuery: string | null;
    };
    mainPage: {
      sortBy: string | null;
      pagination: {
        pagesCount: number | null;
        currentPage: number | null;
      };
    };
  };

  /*
  items: Array<ICard>;
  */
}

//cache
//syncSearchQuery

export const initialState: IState = {
  cache: {
    cards: [],
  },
  workspace: {
    searchPage: {
      searchQuery: null,
    },
    mainPage: {
      sortBy: null,
      pagination: {
        pagesCount: null,
        currentPage: null,
      },
    },
  },
};

interface IProps {
  children: React.ReactNode;
}

export const StateProvider = ({ children }: IProps) => {
  const [state, dispatch] = useReducer<Reducer<IState, TAction>>(stateReducer, initialState);

  return <StateContext.Provider value={{ state, dispatch }}>{children}</StateContext.Provider>;
};
