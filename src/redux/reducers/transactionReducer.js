import {createSlice} from '@reduxjs/toolkit';
import {uuid} from '../../utils/uuid';

const initialState = {
  amount: 4049809,
  topCoins: [],
  dataTransaction: {
    id: '',
    direction: '',
    withdraw: 0,
  },
  arrTransactions: [],
};

export const transactionReducer = createSlice({
  name: 'transaction',
  initialState,
  reducers: {
    setTopCoins: (state, action) => {
      state.topCoins = action.payload;
    },
    setTransferId: (state, action) => {
      state.dataTransaction.id = uuid();
      state.dataTransaction.direction = action.payload.direction;
    },
    setAmount: (state, action) => {
      state.dataTransaction.withdraw = action.payload.withdraw;
      state.amount = state.amount - action.payload.withdraw;
      state.arrTransactions.push(state.dataTransaction);
    },
  },
});

export const {setTopCoins, setTransferId, setAmount} =
  transactionReducer.actions;

export default transactionReducer.reducer;
