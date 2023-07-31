// coinSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Define the async thunk to fetch coin data
export const fetchCoins = createAsyncThunk('coins/fetchCoins', async () => {
  const response = await axios.get('https://api.coincap.io/v2/assets?limit=150');
  return response.data.data;
});

export const searchCoins = createAsyncThunk(
  'coins/searchCoins',
  async (searchQuery, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `https://api.coincap.io/v2/assets?search=${searchQuery}`,
      );
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

// Create the coin slice
const coinSlice = createSlice({
  name: 'coins',
  initialState: {
    coins: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    // Handle the fetchCoins.pending action
    builder.addCase(fetchCoins.pending, (state) => {
      state.loading = true;
      state.error = null;
    });

    // Handle the fetchCoins.fulfilled action
    builder.addCase(fetchCoins.fulfilled, (state, action) => {
      state.loading = false;
      state.coins = action.payload;
    });

    // Handle the fetchCoins.rejected action
    builder.addCase(fetchCoins.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    builder.addCase(searchCoins.pending, (state) => {
      state.loading = true;
      state.error = null;
    });

    builder.addCase(searchCoins.fulfilled, (state, action) => {
      state.coins = action.payload;
      state.loading = false;
      state.error = null;
    });

    builder.addCase(searchCoins.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

// Export the async thunk and the coin reducer
export const { actions: coinActions, reducer: coinReducer } = coinSlice;
