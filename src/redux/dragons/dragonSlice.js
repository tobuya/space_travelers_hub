import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  dragons: [],
  isLoading: false,
};

const FETCH_DRAGON_DATA = 'dragons/getDragonsData';

const getDragonData = createAsyncThunk(FETCH_DRAGON_DATA, async () => {
  try {
    const response = await axios.get('https://api.spacexdata.com/v3/dragons');
    response.data.forEach((data) =>
      //   console.log(data);
      data);
  } catch (error) {
    // console.log(error);
    return error;
  }
});

const dragonSlice = createSlice({
  name: 'dragons',
  initialState,
  extraReducers: {
    [getDragonData.fulfilled]: (state, action) => ({
      //   console.log(action.payload);
      ...state,
      dragons: action.payload,
      isLoading: false,
      //   console.log(state.dragons);
    }),
    [getDragonData.rejected]: (state) => ({
      ...state,
      isLoading: false,
    }),
    [getDragonData.pending]: (state) => ({
      ...state,
      isLoading: true,
    }),
  },
});

export default dragonSlice.reducer;
