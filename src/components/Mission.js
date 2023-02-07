import { MDBBtn } from 'mdb-react-ui-kit';

const Mission = () => (
  <tr>
    <td className="fw-bold align-top">Mission Name</td>
    <td>
      Mission Description Mission Description Mission Description Mission Description
      Mission Description Mission Description Mission Description Mission Description
      Mission Description Mission Description Mission Description Mission Description
      Mission Description Mission Description Mission Description Mission Description
      Mission Description Mission Description Mission Description Mission Description
    </td>
    <td>
      <MDBBtn className="text-nowrap" color="dark" size="sm" disabled>NOT A MEMBER</MDBBtn>
      <MDBBtn className="text-nowrap" size="sm" disabled>Active Member</MDBBtn>
    </td>
    <td>
      <MDBBtn className="text-nowrap" outline color="dark">Join Mission</MDBBtn>
      <MDBBtn className="text-nowrap" outline color="danger">Leave Mission</MDBBtn>
    </td>
  </tr>
);

export default Mission;
