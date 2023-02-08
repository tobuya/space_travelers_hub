import { configureStore } from '@reduxjs/toolkit';
import rocketReducer from './Rockets/rockets';
import missionsReducer from './Missions/missions.jsx';

const store = configureStore({
  reducer: {
    rocket: rocketReducer,
    missions: missionsReducer,
  },
});

export default store;
