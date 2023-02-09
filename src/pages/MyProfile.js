import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addedRockets } from '../Redux/Rockets/Rockets';
import MyProfileRockets from '../components/MyProfile/MyProfileRockets';

const MyProfile = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rocket);
  useEffect(() => {
    if (rockets.length === 0) {
      dispatch(addedRockets());
    }
  }, [dispatch, rockets.length]);
  return (
    <>
      <table className="table w-50 m-5">
        <thead>
          <tr>
            <th scope="col"><h3> My Rockets</h3></th>
          </tr>
        </thead>
        {rockets.map((rocket) => (
          <MyProfileRockets key={rocket.id} rocket={rocket} />
        ))}
      </table>
    </>
  );
};

export default MyProfile;
