import { useDispatch, useSelector } from 'react-redux';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { useEffect } from 'react';
import Mission from '../components/Mission';
import { fetchMissions } from '../Redux/Missions/missions';

const Missions = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions);
  useEffect(() => {
    if (missions.length === 0) {
      dispatch(fetchMissions());
    }
  }, [dispatch, missions.length]);

  return (
    <section className="m-3 d-flex justify-content-around">
      <div className="table-responsive">
        <MDBTable bordered striped align="middle">
          <MDBTableHead>
            <tr>
              <th scope="col">Mission</th>
              <th scope="col">Description</th>
              <th scope="col">Status</th>
              <th scope="col"> </th>
            </tr>
          </MDBTableHead>
          <MDBTableBody>
            {missions.map((mission) => (
              <Mission key={mission.id} mission={mission} />
            ))}
          </MDBTableBody>
        </MDBTable>
      </div>
    </section>
  );
};

export default Missions;
