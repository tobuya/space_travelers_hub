import React from 'react';
import PropTypes from 'prop-types';

const MyProfileRockets = ({ rocket }) => {
  const {
    rocketName, reserved,
  } = rocket;
  return (
    <>
      {reserved ? (
        <tbody>
          <tr>
            <th className="border w-5 border-secondary px-5 ">{rocketName}</th>
          </tr>
        </tbody>
      ) : ('')}
    </>
  );
};

export default MyProfileRockets;
MyProfileRockets.propTypes = {
  rocket: PropTypes.shape({
    rocketName: PropTypes.string.isRequired,
    reserved: PropTypes.bool.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
};
