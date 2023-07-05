import React from 'react';
import { useSelector } from 'react-redux';

const MyProfile = () => {
  const rockets = useSelector((state) => state.rocket);
  const missions = useSelector((state) => state.missions);
  const dragons = useSelector((state) => state.dragons.dragons);
  return (
    <>
      <div className="d-flex gap-3 p-3 profile">
        <table className="table w-50">
          <thead>
            <tr>
              <th>
                <h3>My Missions</h3>
              </th>
            </tr>
          </thead>
          <tbody>
            {missions
              .filter((mission) => mission.reserved)
              .map((mission) => (
                <tr key={mission.id} className="border">
                  <p className="m-2">{mission.name}</p>
                </tr>
              ))}
          </tbody>
        </table>

        <table className="table w-50">
          <thead>
            <tr>
              <th>
                <h3>My Rockets</h3>
              </th>
            </tr>
          </thead>
          <tbody>
            {rockets
              .filter((rocket) => rocket.reserved)
              .map((rocket) => (
                <tr key={rocket.id} className="border">
                  <p className="m-2">{rocket.rocketName}</p>
                </tr>
              ))}
          </tbody>
        </table>
        <table className="table w-50">
          <thead>
            <tr>
              <th>
                <h3>My Dragons</h3>
              </th>
            </tr>
          </thead>
          <tbody>
            {dragons
              .filter((dragons) => dragons.reserved)
              .map((dragons) => (
                <tr key={dragons.id} className="border">
                  <p className="m-2">{dragons.dragonName}</p>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default MyProfile;
