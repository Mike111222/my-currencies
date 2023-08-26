import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCoins = createAsyncThunk('coins/fetchCoins', async () => {
  const response = await fetch('https://api.coincap.io/v2/assets?limit=100');
  const res = response.json();
  return res;
});

export const searchCoins = createAsyncThunk(
  'coins/searchCoins',
  async (searchQuery, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `https://api.coincap.io/v2/assets?search=${searchQuery}`,
      );
      const res = response.json();
      return res;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

const coinSlice = createSlice({
  name: 'coins',
  initialState: {
    coins: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCoins.pending, (state) => {
      state.loading = true;
      state.error = null;
    });

    builder.addCase(fetchCoins.fulfilled, (state, action) => {
      state.loading = false;
      state.coins = action.payload;
    });

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

export const { actions: coinActions, reducer: coinReducer } = coinSlice;
