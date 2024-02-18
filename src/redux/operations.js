import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'https://65ce55d4c715428e8b40861a.mockapi.io/api';

export const fetchPage = createAsyncThunk(
  'adverts/fetchPage',
  async ({ page, limit }, thunkAPI) => {
    try {
      const response = await axios.get(
        `${BASE_URL}/advert?page=${page}&limit=${limit}`
      );
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.config.method);
    }
  }
);

export const getByMake = createAsyncThunk(
  'adverts/getByMake',
  async (make, thunkAPI) => {
    try {
      const response = await axios.get(`${BASE_URL}/advert?make=${make}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.config.method);
    }
  }
);
