import React from 'react';
import { Link } from 'react-router-dom';
import icon from '../images/planet.png';

const Navigation = () => (
  <nav className="d-flex justify-content-between nav-head px-5 mt-3">
    <div className="d-flex align-middle gap-3">
      <img src={icon} alt="logo" />
      <h3 className="mt-2">Space Travelers Hub</h3>
    </div>
    <ul className="d-flex justify-content-around align-items-center list-unstyled gap-3 mt-3">
      <li>
        <Link
          to="/dragons"
          exact="true"
          // className={({ isActive }) => (isActive ? "active" : "inactive")}
        >
          Dragon
        </Link>
      </li>
      <li>
        <Link
          to="/"
          exact="true"
          // className={({ isActive }) => (isActive ? 'active' : 'inactive')}
        >
          Rockets
        </Link>
      </li>
      <li>
        <Link
          to="/missions"
          // className={({ isActive }) => (isActive ? 'active' : 'inactive')}
        >
          Missions
        </Link>
      </li>
      |
      <li>
        <Link
          to="/my_profile"
          // className={({ isActive }) => (isActive ? 'active' : 'inactive')}
        >
          My Profile
        </Link>
      </li>
    </ul>
  </nav>
);

export default Navigation;
