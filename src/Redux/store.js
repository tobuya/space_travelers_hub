import { configureStore } from '@reduxjs/toolkit';
import missionsReducer from './Missions/missions';
import rocketReducer from './Rockets/Rockets';

const store = configureStore({
  reducer: {
    rocket: rocketReducer,
    missions: missionsReducer,
  },
});

export default store;
