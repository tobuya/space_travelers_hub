import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const missionsAPI = 'https://api.spacexdata.com/v3/missions';

const initialState = [];
const FETCHED_MISSIONS = 'space_travelers_hub/missions/FETCHED_MISSIONS';

const fetchMissions = createAsyncThunk(
  FETCHED_MISSIONS,
  async () => {
    const response = await axios.get(missionsAPI);
    const { data } = response;
    const missions = data.map((mission) => ({
      name: mission.mission_name,
      id: mission.mission_id,
      description: mission.description,
      membership: true,
    }));
    return missions;
  },
);

const missionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case `${FETCHED_MISSIONS}/fulfilled`:
      return [...state, ...action.payload];
    default:
      return state;
  }
};

export { fetchMissions };
export default missionsReducer;
