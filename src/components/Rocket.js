import React from 'react';
import PropTypes from 'prop-types';

const Rocket = ({ rocket }) => {
  const {
    rocketName, description, flickrImages,
  } = rocket;
  return (
    <div className="d-flex py-3 px-5 height gap-5">
      <img src={flickrImages} className="w-25 h " alt="rockets img" />
      <div className="w-75 gap-2">
        <h2>{rocketName}</h2>
        <p>
          {description}
        </p>
        <button type="button" className="btn btn-primary mb-2">Resrve Rocket</button>
      </div>
    </div>
  );
};

Rocket.propTypes = {
  rocket: PropTypes.shape({
    rocketName: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    flickrImages: PropTypes.isRequired,
  }).isRequired,
};
export default Rocket;
