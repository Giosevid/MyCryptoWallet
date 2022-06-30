import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isTrade: false,
};

export const tradeReducer = createSlice({
  name: 'trade',
  initialState,
  reducers: {
    setIsTrade: (state, action) => {
      state.isTrade = action.payload;
    },
  },
});

export const {setIsTrade} = tradeReducer.actions;

export default tradeReducer.reducer;
