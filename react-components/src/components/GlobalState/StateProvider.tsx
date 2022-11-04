import React from 'react';
import { ICard } from 'components/Card/Card';
import { Reducer, useReducer } from 'react';
import { TAction } from './Actions';
import { StateContext } from './StateContext';
import stateReducer from './StateReducer';
import { IFormCard } from 'components/Form/FormCard/FormCard';

export interface IState {
  cache: {
    cards: Array<ICard>;
  };

  workspace: {
    limit: number;
    searchPage: {
      searchQuery: string;
      pagination: {
        pagesCount: number;
        currentPage: number;
      };
    };
    mainPage: {
      sortBy: string;
      pagination: {
        pagesCount: number;
        currentPage: number;
      };
    };
    formPage: {
      cards: Array<IFormCard>;
    };
  };
}

//cache
//syncSearchQuery

export const initialState: IState = {
  cache: {
    cards: [],
  },
  workspace: {
    limit: 20,
    searchPage: {
      searchQuery: localStorage!.getItem('searchQuery')! || ' ',
      pagination: {
        pagesCount: 1,
        currentPage: 1,
      },
    },
    mainPage: {
      sortBy: 'popularity',
      pagination: {
        pagesCount: 1,
        currentPage: 1,
      },
    },
    formPage: {
      cards: [],
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
