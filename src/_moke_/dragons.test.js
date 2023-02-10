import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../Redux/store';
import Dragon from '../pages/Dragons';
import DragonTest from './dragonReducer';

const dragon = {
  dragonName: 'Heloo',
  description: 'Heloof',
  flickrImages: 'Helookn',
  reserved: false,
  id: 2,
};

jest.mock('axios');
describe('dragon must pass the test', () => {
  test('added dragon must return data', () => {
    expect(DragonTest.addedRockets()).toBeDefined();
  });
  test('added dragon return value length must be 3', () => {
    expect(DragonTest.addedRockets()).toHaveLength(4);
  });
  test('added dragon must return name t', () => {
    expect(DragonTest.addedRockets()[3].description).toBe(
      'easy taske done today',
    );
  });
});

describe('Dragon component', () => {
  it('renders dragon component', () => {
    const r = renderer
      .create(
        <Provider store={store}>
          <BrowserRouter>
            <Dragon />
          </BrowserRouter>
        </Provider>,
      )
      .toJSON();
    expect(r).toMatchSnapshot();
  });
  it('renders dragon component', () => {
    const m = renderer
      .create(
        <Provider store={store}>
          <BrowserRouter>
            <Dragon rocket={dragon} />
          </BrowserRouter>
        </Provider>,
      )
      .toJSON();
    expect(m).toMatchSnapshot();
  });
});
