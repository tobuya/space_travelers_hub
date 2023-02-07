import axios from 'axios';

const ADD_ROCKETS = 'rockets/ROCKETS';

const initialState = [];

export const addedRockets = () => async (dispatch) => {
  const respons = await axios.get('https://api.spacexdata.com/v4/rockets');
  const rocketsData = [];
  respons.data.forEach((rockets) => {
    rocketsData.push({
      id: rockets.id,
      rocket_name: rockets.rocket_name,
      description: rockets.description,
      flickr_images: rockets.flickr_images,
    });
  });

  dispatch({
    type: ADD_ROCKETS,
    payload: rocketsData,
  });
};
const rocketReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ROCKETS:
      return [...state, action.payload];

    default:
      return state;
  }
};

export default rocketReducer;
