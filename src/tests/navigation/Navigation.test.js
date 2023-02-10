import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navigation from '../../components/Navigation';

describe('Navbar Component', () => {
  afterEach(cleanup);

  test('Renders the Navbar component', () => {
    const { getByText } = render(
      <Router>
        <Navigation />
      </Router>,
    );
    const linkElement = getByText(/Missions/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('Builds the snapshot of the Navbar component', () => {
    const navbar = render(
      <Router>
        <Navigation />
      </Router>,
    );
    expect(navbar).toMatchSnapshot();
  });
});
