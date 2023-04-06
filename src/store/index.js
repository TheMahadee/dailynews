import { configureStore } from '@reduxjs/toolkit';
import promiseMiddleware from 'redux-promise';
import appReducers from './reducers';

const ReduxStore = configureStore({
  reducer: appReducers,
  middleware: [promiseMiddleware],
  devTools: process.env.NODE_ENV !== 'production',
  /* preloadedState: , enhancers: , */
});

export default ReduxStore;