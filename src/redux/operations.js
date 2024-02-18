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
      return { data: response.data, page };
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const getByMake = createAsyncThunk(
  'adverts/getByMake',
  async ({ brand, price, mileageFrom, mileageTo }, thunkAPI) => {
    try {
      const response = await axios.get(
        `${BASE_URL}/advert?make=${brand || ''}`
      );
      const result = response.data.filter(({ rentalPrice, mileage }) => {
        return (
          (!price ||
            parseInt(rentalPrice.replace(/\D/g, '')) <= parseInt(price)) &&
          (!mileageFrom || mileage >= parseInt(mileageFrom)) &&
          (!mileageTo || mileage <= parseInt(mileageTo))
        );
      });

      return result;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);
