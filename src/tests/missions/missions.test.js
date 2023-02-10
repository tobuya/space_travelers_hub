import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import Missions from '../../pages/Missions';
import Mission from '../../components/Mission';
import missionsReducer from '../../Redux/Missions/missions';

const initialMissionState = {
  missions: [
    {
      id: 'missionID',
      name: 'missionName',
      description: 'missionDescription',
      reserved: false,
    },
  ],
};

const store = configureStore({
  reducer: missionsReducer,
  preloadedState: initialMissionState,
});

describe('Missions', () => {
  afterEach(cleanup);

  it('Should render a single mission', () => {
    const { mission } = render(
      <Provider store={store}>
        <Mission mission={initialMissionState.missions[0]} />
      </Provider>,
    );
    expect(mission).toMatchSnapshot();
  });

  it('Should render the Missions page correctly', () => {
    const { missions } = render(
      <Provider store={store}>
        <Missions />
      </Provider>,
    );
    expect(missions).toMatchSnapshot();
  });

  it('Should display the mission page with correct information', () => {
    const { getByText } = render(
      <Provider store={store}>
        <Missions />
      </Provider>,
    );
    const missionName = getByText('missionName');
    expect(missionName).toBeInTheDocument();
  });
});
