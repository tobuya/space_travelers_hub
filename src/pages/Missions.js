import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import Mission from '../components/Mission';

const Missions = () => (
  <section className="m-5 d-flex justify-content-around">
    <MDBTable bordered striped align="middle" className="w-auto">
      <MDBTableHead>
        <tr>
          <th scope="col">Mission</th>
          <th scope="col">Description</th>
          <th scope="col">Status</th>
          <th scope="col"> </th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        <Mission />
        <Mission />
        <Mission />
      </MDBTableBody>
    </MDBTable>
  </section>
);

export default Missions;
