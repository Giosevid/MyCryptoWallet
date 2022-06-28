import {configureStore} from '@reduxjs/toolkit';
import tradeReducer from '../reducers/tabReducer';

export default configureStore({
  reducer: {
    trade: tradeReducer,
  },
});
