import { configureStore } from '@reduxjs/toolkit';
import rocketReducer from './Rockets/Rockets';

const store = configureStore({
  reducer: {
    rocket: rocketReducer,
  },
});

export default store;
