import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const RocketsAPI = 'https://api.spacexdata.com/v4/rockets';

const initialState = [];
const ADD_ROCKETS = 'rockets/ROCKETS';

const addedRockets = createAsyncThunk(
  ADD_ROCKETS,
  async () => {
    const response = await axios.get(RocketsAPI);
    const rocket = response.data.map((rockets) => ({
      id: rockets.id,
      rocketName: rockets.name,
      description: rockets.description,
      flickrImages: rockets.flickr_images,
    }));
    return rocket;
  },
);

const rocketReducer = (state = initialState, action) => {
  switch (action.type) {
    case `${ADD_ROCKETS}/fulfilled`:
      return [...state, ...action.payload];
    default:
      return state;
  }
};

export { addedRockets };
export default rocketReducer;
