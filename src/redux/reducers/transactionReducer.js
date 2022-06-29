import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  amount: 4049809,
  topCoins: [],
};

export const transactionReducer = createSlice({
  name: 'transaction',
  initialState,
  reducers: {
    setTopCoins: (state, action) => {
      state.topCoins = action.payload;
    },
  },
});

export const {setTopCoins} = transactionReducer.actions;

export default transactionReducer.reducer;
