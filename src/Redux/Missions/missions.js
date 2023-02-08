import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const missionsAPI = 'https://api.spacexdata.com/v3/missions';

const initialState = [];
const FETCHED_MISSIONS = 'space_travelers_hub/missions/FETCHED_MISSIONS';
const TOGGLED_MISSION_STATE = 'space_travelers_hub/missions/TOGGLED_MISSIONS_STATE';

const fetchMissions = createAsyncThunk(
  FETCHED_MISSIONS,
  async () => {
    const response = await axios.get(missionsAPI);
    const { data } = response;
    const missions = data.map((mission) => ({
      name: mission.mission_name,
      id: mission.mission_id,
      description: mission.description,
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
      return state.map((mission) => {
        if (mission.id === action.payload) return { ...mission, reserved: !mission.reserved };
        return mission;
      });
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
