/* eslint-disable camelcase */
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const missionsAPI = 'https://api.spacexdata.com/v3/missions';

const initialState = [];
const FETCHED_MISSIONS = 'space_travelers_hub/missions/FETCHED_MISSIONS';
const TOGGLED_MISSION_STATE = 'space_travelers_hub/missions/TOGGLED_MISSIONS_STATE';

const fetchMissions = createAsyncThunk(
  FETCHED_MISSIONS,
  async () => {
    const { data } = await axios.get(missionsAPI);
    const missions = data.map(({ mission_name, mission_id, description }) => ({
      name: mission_name,
      id: mission_id,
      description,
      reserved: false,
    }));
    return missions;
  },
);

const missionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case `${FETCHED_MISSIONS}/fulfilled`:
      return [...state, ...action.payload];
    case TOGGLED_MISSION_STATE: {
      return state.map((mission) => (mission.id === action.payload
        ? { ...mission, reserved: !mission.reserved }
        : mission));
    }
    default:
      return state;
  }
};

const toggleMissionReserveState = (id) => ({
  type: TOGGLED_MISSION_STATE,
  payload: id,
});

export { fetchMissions, toggleMissionReserveState };
export default missionsReducer;
