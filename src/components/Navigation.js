import React from 'react';
import { Link } from 'react-router-dom';
import icon from '../images/planet.png';

const Navigation = () => (
  <nav>
    <div>
      <img src={icon} alt="logo" />
      <h1>Space Travelers Hub</h1>
    </div>
    <ul>
      <li>
        <Link to="/">Rockets</Link>
      </li>
      <li>
        <Link to="/missions">Missions</Link>
      </li>
      <li>
        <Link to="/my_profile">My Profile</Link>
      </li>
    </ul>
  </nav>
);

export default Navigation;
