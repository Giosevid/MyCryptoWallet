import {configureStore} from '@reduxjs/toolkit';
import tradeReducer from '../reducers/tabReducer';
import transactionReducer from '../reducers/transactionReducer';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const middlewares = [thunk, logger];

if (__DEV__) {
  const createDebugger = require('redux-flipper').default;
  middlewares.push(createDebugger());
}

export default configureStore({
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(middlewares),
  devTools: process.env.NODE_ENV !== 'production',
  reducer: {
    trade: tradeReducer,
    transaction: transactionReducer,
  },
});
