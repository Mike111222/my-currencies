import { configureStore } from '@reduxjs/toolkit';
import { coinReducer, fetchCoins } from './coin/coinSlice';
import detailReducer from './detail/detailSlice';

const store = configureStore({
  reducer: {
    coins: coinReducer,
    detail: detailReducer,
  },
});
store.dispatch(fetchCoins());
export default store;
