import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navigation from '../../components/Navigation';

describe('Navigation Component', () => {
  afterEach(cleanup);

  test('Renders the logo', () => {
    render(
      <Router>
        <Navigation />
      </Router>,
    );
    const logoImage = screen.getByAltText(/logo/i);
    expect(logoImage).toBeInTheDocument();
  });

  test('Renders the Navigation component', () => {
    const { getByText } = render(
      <Router>
        <Navigation />
      </Router>,
    );
    const linkElement = getByText(/Missions/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('Builds the snapshot of the Navigation component', () => {
    const navigation = render(
      <Router>
        <Navigation />
      </Router>,
    );
    expect(navigation).toMatchSnapshot();
  });
});
