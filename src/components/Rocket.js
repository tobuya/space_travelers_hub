import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { toggleRockets } from '../Redux/Rockets/Rockets';

const Rocket = ({ rocket }) => {
  const dispatch = useDispatch();
  const {
    rocketName, description, flickrImages, reserved, id,
  } = rocket;
  return (
    <div className="d-flex py-3 px-5 height gap-5">
      <img src={flickrImages} className="w-25 h " alt="rockets img" />
      <div className="w-75 gap-2">
        <h2>{rocketName}</h2>
        <p>
          {
            reserved ? (
              <span className="btn btn-info btn-sm mx-2 h-1">Reserved</span>
            )
              : ('')
          }
          {description}
        </p>
        {
            reserved ? (
              <button type="button" className="btn btn-outline-secondary mb-2" onClick={() => { dispatch(toggleRockets(id)); }}>Cancel Reservation</button>
            )
              : (
                <button type="button" className="btn btn-primary mb-2" onClick={() => { dispatch(toggleRockets(id)); }}>Reserve Rocket</button>
              )
          }
      </div>
    </div>
  );
};

Rocket.propTypes = {
  rocket: PropTypes.shape({
    rocketName: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    flickrImages: PropTypes.string.isRequired,
    reserved: PropTypes.bool.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
};
export default Rocket;
