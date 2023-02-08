import { configureStore } from '@reduxjs/toolkit';
import rocketReducer from './Rockets/Rockets';
import missionsReducer from './Missions/missions';
import dragonSlice from './dragons/DragonSlice';

const store = configureStore({
  reducer: {
    rocket: rocketReducer,
    missions: missionsReducer,
    dragons: dragonSlice,
  },
});

export default store;
