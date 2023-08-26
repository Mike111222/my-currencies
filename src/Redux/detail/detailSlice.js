import { createSlice } from '@reduxjs/toolkit';

const detailSlice = createSlice({
  name: 'detail',
  initialState: {
    coinDetail: null,
  },
  reducers: {
    setCoinDetail: (state, action) => {
      state.coinDetail = action.payload;
    },
    clearCoinDetail: (state) => {
      state.coinDetail = null;
    },
  },
});

export const { setCoinDetail, clearCoinDetail } = detailSlice.actions;

export default detailSlice.reducer;
