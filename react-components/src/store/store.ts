import { combineReducers, configureStore } from '@reduxjs/toolkit';
import mainPageState from './reducers/movieSlice';
import searchPageState from './reducers/searchMovieSlice';
import formPageState from './reducers/formSlice';
import cache from './reducers/cacheSlice';
import { thunkMainPageMiddleware } from './middleware/mainPageMiddleware';
import { thunkSearchPageMiddleware } from './middleware/searchPageMiddleWare';

const createRootReducer = () =>
  combineReducers({
    cache,
    formPageState,
    mainPageState,
    searchPageState,
  });

export const setupStore = () => {
  return configureStore({
    reducer: createRootReducer(),
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(thunkMainPageMiddleware, thunkSearchPageMiddleware),
  });
};

export type RootState = ReturnType<ReturnType<typeof createRootReducer>>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
