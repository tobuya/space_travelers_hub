import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../Redux/store';
import Rockets from '../pages/Rockets';
import Rocket from '../components/Rocket';
import RocketTest from './rocketsReducer';

const rocket = {
  rocketName: 'Heloo', description: 'Heloof', flickrImages: 'Helookn', reserved: false, id: 2,
};

jest.mock('axios');
describe('Rockets must pass the test', () => {
  test('added Rockets must return data', () => {
    expect(RocketTest.addedRockets()).toBeDefined();
  });
  test('added Rockets return value length must be 3', () => {
    expect(RocketTest.addedRockets()).toHaveLength(4);
  });
  test('added Rockets must return name t', () => {
    expect(RocketTest.addedRockets()[3].description).toBe('easy taske done today');
  });
});

describe('Rockets component', () => {
  it('renders Rockets component', () => {
    const r = renderer.create(
      <Provider store={store}>
        <BrowserRouter>
          <Rockets />
        </BrowserRouter>
      </Provider>,
    ).toJSON();
    expect(r).toMatchSnapshot();
  });
  it('renders Rocket component', () => {
    const m = renderer.create(
      <Provider store={store}>
        <BrowserRouter>
          <Rocket rocket={rocket} />
        </BrowserRouter>
      </Provider>,
    ).toJSON();
    expect(m).toMatchSnapshot();
  });
});
