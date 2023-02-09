import { configureStore } from '@reduxjs/toolkit';
import missionsReducer from './Missions/missions';
import dragonSlice from './Dragons/dragonSlice';
import rocketReducer from './Rockets/Rockets';

const store = configureStore({
  reducer: {
    rocket: rocketReducer,
    missions: missionsReducer,
    dragons: dragonSlice,
  },
});

export default store;
