import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import icon from '../images/planet.png';

const Navigation = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleToggleClick = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const handleNavLinkClick = () => {
    setIsPopupOpen(false);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom nav-head px-2">
      <div className="d-flex align-items-center">
        <img src={icon} alt="logo" className="logo" />
        <h3 className="mt-2">Space Travelers Hub</h3>
      </div>
      <button
        className="navbar-toggler"
        type="button"
        onClick={handleToggleClick}
        aria-expanded={isPopupOpen ? 'true' : 'false'}
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className={`collapse navbar-collapse${isPopupOpen ? ' show' : ''} justify-content-end`} id="navbarNav">
        <ul className="navbar-nav ml-auto align-items-end" style={{ backgroundColor: isPopupOpen ? 'rgba(0, 0, 0, 0.1)' : 'transparent' }}>
          <li className="nav-item">
            <NavLink
              exact
              to="/"
              activeClassName="active"
              className="nav-link"
              onClick={handleNavLinkClick}
            >
              Rockets
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/missions"
              activeClassName="active"
              className="nav-link"
              onClick={handleNavLinkClick}
            >
              Missions
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/dragons"
              activeClassName="active"
              className="nav-link"
              onClick={handleNavLinkClick}
            >
              Dragons
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/my_profile"
              activeClassName="active"
              className="nav-link"
              onClick={handleNavLinkClick}
            >
              My Profile
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
