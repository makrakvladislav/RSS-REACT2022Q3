/* eslint-disable @typescript-eslint/no-explicit-any */
import { combineReducers, configureStore, Middleware } from '@reduxjs/toolkit';
import movieReducer from './reducers/movieSlice';
import searchMovieReducer from './reducers/searchMovieSlice';
import formReducer from './reducers/formSlice';
import cache from './reducers/cacheSlice';
import {
  createRouterMiddleware,
  createRouterReducerMapObject,
  // routerReducer,
} from '@lagunovsky/redux-react-router';
import { History } from 'history';
import { thunkMainPageMiddleware } from './middleware/mainPageMiddleware';
import { thunkSearchPageMiddleware } from './middleware/searchPageMiddleWare';

const createRootReducer = (history: History) =>
  combineReducers({
    cache,
    formReducer,
    movieReducer,
    searchMovieReducer,
    /*
    appState: (state, action) => {
    
      if (!state) {
        return {
          cache: [],
        };
      }
     
      if (action.type === ROUTER_ON_LOCATION_CHANGED) {
        console.log('custom state', state);
        console.log('custom action', action);
      }
     
      return state;
    },
 */
    ...createRouterReducerMapObject(history),
  });

export const routerMiddleware: Middleware =
  ({ getState, dispatch }) =>
  (next) =>
  async (action) => {
    const state = getState();
    /*
    if (action.type === 'app/firstLoad') {
      try {
        if (matchPath({ path: '', end: true }, location.pathname)) {
          console.log("matchPath({ path: '', end: true }, location.pathname)");
          const response = await axios.get('https://api.themoviedb.org/3/discover/movie?', {
            params: {
              api_key: '1939abe3d00976407f86acd63c341f94',
              page: state.movieReducer.currentPage,
              sort_by: state.movieReducer.sortType + '.desc',
            },
          });
          //dispatch(fetchMovies(state.movieReducer.currentPage, state.movieReducer.sortType));
          //dispatch(movieSlice.actions.setMovies(response.data.results));

          console.log(response);
          return next(action);
        }
      } catch {
        console.log('fail');
        return next(action);
      }
    }
    */
    /*
    if (action.type === ROUTER_ON_LOCATION_CHANGED) {
      try {
        if (matchPath({ path: 'search', end: true }, location.pathname)) {
          const response = await axios.get('https://api.themoviedb.org/3/search/movie?', {
            params: {
              api_key: '1939abe3d00976407f86acd63c341f94',
              query: state.searchMovieReducer.searchQuery,
              page: 1,
              // sort_by: state.movieReducer.sortType + '.desc',
            },
          });
          dispatch(searchMovieAction(response.data.results));
          console.log(response);
          return next(action);
        }
      } catch {
        console.log('fail');
        return next(action);
      }
    }
    */
    /*
    if (action.type === 'Movie/setCurrentPage') {
      try {
        if (matchPath({ path: '', end: true }, location.pathname)) {
          const response = await axios.get('https://api.themoviedb.org/3/discover/movie?', {
            params: {
              api_key: '1939abe3d00976407f86acd63c341f94',
              page: action.payload,
              sort_by: state.movieReducer.sortType + '.desc',
            },
          });
          dispatch(movieSlice.actions.setMovies(response.data.results));
          return next(action);
        }
      } catch {
        console.log('fail');
        return next(action);
      }
    }
    */
    return next(action);
  };

function logger({ getState }: any) {
  return (next: any) => (action: any) => {
    //console.log('will dispatch', action);
    const returnValue = next(action);
    //console.log('state after dispatch', getState());
    return returnValue;
  };
}

const getRouterMiddleware = (history: History) => createRouterMiddleware(history);

export const setupStore = (history: History) => {
  return configureStore({
    reducer: createRootReducer(history),
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware()
        .prepend(getRouterMiddleware(history))
        .concat(logger, routerMiddleware, thunkMainPageMiddleware, thunkSearchPageMiddleware),
  });
};

export type RootState = ReturnType<ReturnType<typeof createRootReducer>>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
