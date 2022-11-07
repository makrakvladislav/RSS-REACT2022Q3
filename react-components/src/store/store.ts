import { combineReducers, configureStore } from '@reduxjs/toolkit';
import movieReducer from './reducers/movieSlice';
import searchMovieReducer from './reducers/searchMovieSlice';
import formReducer from './reducers/formSlice';
//import cacheReducer from './reducers/cacheSlice';

const rootReducer = combineReducers({
  //cacheReducer,
  formReducer,
  movieReducer,
  searchMovieReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
