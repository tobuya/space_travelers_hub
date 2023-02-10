import React from 'react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { render, screen, cleanup } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import Missions from '../../pages/Missions';
import missionsReducer from '../../Redux/Missions/missions';

const initialMissionState = {
  missions: [
    {
      id: '9D1B7E0',
      name: 'Thaicom',
      description: 'Thaicom is the name of a series of communications satellites operated from Thailand, and also the name of Thaicom Public Company Limited, which is the company that owns and operates the Thaicom satellite fleet and other telecommunication businesses in Thailand and throughout the Asia-Pacific region. The satellite projects were named Thaicom by the King of Thailand, His Majesty the King Bhumibol Adulyadej, as a symbol of the linkage between Thailand and modern communications technology.',
      joined: false,
    },
  ],
};

const store = configureStore({
  reducer: missionsReducer,
  preloadedState: initialMissionState,
});

describe('Missions', () => {
  afterEach(cleanup);

  it('Missions page should render correctly', () => {
    const mission = render(
      <Provider store={store}>
        <Missions />
      </Provider>,
    );
    expect(mission).toMatchSnapshot();
  });

  it('Mission page should display', () => {
    render(
      <Provider store={store}>
        <Missions />
      </Provider>,
    );
    const missionName = screen.getByText('Thaicom');
    expect(missionName).toBeInTheDocument();
  });
});
