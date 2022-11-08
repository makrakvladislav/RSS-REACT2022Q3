/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  combineReducers,
  configureStore,
  applyMiddleware,
  createAsyncThunk,
  Middleware,
} from '@reduxjs/toolkit';
import movieReducer, { IMovieSliceState } from './reducers/movieSlice';
import searchMovieReducer from './reducers/searchMovieSlice';
import formReducer from './reducers/formSlice';
import cacheReducer from './reducers/cacheSlice';
import {
  createRouterMiddleware,
  createRouterReducerMapObject,
  LocationChangeAction,
  ROUTER_ON_LOCATION_CHANGED,
  // routerReducer,
} from '@lagunovsky/redux-react-router';
import { History } from 'history';
import axios from 'axios';
import { abcAction } from './reducers/ActionCreators';
import { matchPath } from 'react-router-dom';

const createRootReducer = (history: History) =>
  combineReducers({
    cacheReducer,
    formReducer,
    movieReducer,
    searchMovieReducer,
    custom: (state, action) => {
      if (!state) {
        return {};
      }
      if (action.type === ROUTER_ON_LOCATION_CHANGED) {
        console.log('custom state', state);
        console.log('custom action', action);
      }
      return state;
    },
    ...createRouterReducerMapObject(history),
  });

export const routerMiddleware: Middleware =
  ({ getState, dispatch }) =>
  (next) =>
  async (action) => {
    if (action.type === ROUTER_ON_LOCATION_CHANGED) {
      const state = getState();
      console.log('routerMiddleware', state);

      try {
        if (matchPath({ path: 'search', end: true }, location.pathname)) {
          console.log("matchPath({ path: 'search', end: true }, location.pathname)");
          const response = await axios.get('https://api.themoviedb.org/3/search/movie?', {
            params: {
              api_key: '1939abe3d00976407f86acd63c341f94',
              query: 'asd',
              page: 1,
              // sort_by: state.movieReducer.sortType + '.desc',
            },
          });
          dispatch(abcAction(response));

          return next(action);
        }
      } catch {
        console.log('fail');
        return next(action);
      }
    }

    return next(action);
  };

function logger({ getState }: any) {
  return (next: any) => (action: any) => {
    console.log('will dispatch', action);

    // Call the next dispatch method in the middleware chain.
    const returnValue = next(action);

    console.log('state after dispatch', getState());

    // This will likely be the action itself, unless
    // a middleware further in chain changed it.
    return returnValue;
  };
}

const getRouterMiddleware = (history: History) => createRouterMiddleware(history);

export const setupStore = (history: History) => {
  return configureStore({
    reducer: createRootReducer(history),
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().prepend(getRouterMiddleware(history)).concat(logger, routerMiddleware),
  });
};

export type RootState = ReturnType<ReturnType<typeof createRootReducer>>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
