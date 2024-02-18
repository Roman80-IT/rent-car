import { fetchAll } from './operations';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  favorites: [],
  isLoading: false,
  error: null,
};

const advertsSlice = createSlice({
  name: 'adverts',
  initialState,
  reducers: {
    addFavorites: {
      reducer(state, action) {
        state.favorites.push(action.payload);
      },
    },
    removeFavorites: {
      reducer(state, action) {
        state.favorites = [
          ...state.favorites.filter(item => item.id !== action.payload),
        ];
      },
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchAll.fulfilled, (state, action) => {
      state.items = [...state.items, ...action.payload];
      state.isLoading = false;
      state.error = null;
    });
    builder.addCase(fetchAll.pending, state => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchAll.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export const { addFavorites, removeFavorites } = advertsSlice.actions;
export const advertsReducer = advertsSlice.reducer;
