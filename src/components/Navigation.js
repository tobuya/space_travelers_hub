import React from 'react';
import { NavLink } from 'react-router-dom';
import icon from '../images/planet.png';

const Navigation = () => (
  <nav className="d-flex justify-content-between nav-head px-5 mt-3">
    <div className="d-flex align-middle gap-3">
      <img src={icon} alt="logo" />
      <h3 className="mt-2">Space Travelers Hub</h3>
    </div>
    <ul className="d-flex justify-content-around align-items-center list-unstyled gap-3 mt-3">
      <li>
        <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Rockets</NavLink>
      </li>
      <li>
        <NavLink to="/missions" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Missions</NavLink>
      </li>
      <li>
        <NavLink to="/dragons" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Dragons</NavLink>
      </li>
      |
      <li>
        <NavLink to="/my_profile" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>My Profile</NavLink>
      </li>
    </ul>
  </nav>
);

export default Navigation;
