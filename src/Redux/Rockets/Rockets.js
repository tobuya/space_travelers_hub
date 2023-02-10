import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const RocketsAPI = 'https://api.spacexdata.com/v4/rockets';

const initialState = [];
const ADD_ROCKETS = 'rockets/ROCKETS';
const RESREVD = 'reserved/rockets';

const addedRockets = createAsyncThunk(
  ADD_ROCKETS,
  async () => {
    const response = await axios.get(RocketsAPI);
    const rocket = response.data.map((rockets) => ({
      id: rockets.id,
      rocketName: rockets.name,
      description: rockets.description,
      flickrImages: rockets.flickr_images,
      reserved: false,
    }));
    return rocket;
  },
);

const rocketReducer = (state = initialState, action) => {
  switch (action.type) {
    case `${ADD_ROCKETS}/fulfilled`:
      return [...state, ...action.payload];
    case RESREVD:
      return state.map((rocket) => {
        if (rocket.id === action.payload) return { ...rocket, reserved: !rocket.reserved };
        return rocket;
      });
    default:
      return state;
  }
};

export const toggleRockets = (id) => ({
  type: RESREVD,
  payload: id,
});

export { addedRockets };
export default rocketReducer;
