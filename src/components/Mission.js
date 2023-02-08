import { MDBBtn } from 'mdb-react-ui-kit';
import PropTypes from 'prop-types';

const Mission = ({ mission }) => {
  const {
    name, description, membership,
  } = mission;

  return (
    <tr>
      <td className="fw-bold align-top">{name}</td>
      <td>{description}</td>
      <td>
        {membership ? (
          <MDBBtn className="text-nowrap" size="sm" disabled>Active Member</MDBBtn>
        ) : (
          <MDBBtn className="text-nowrap" color="dark" size="sm" disabled>NOT A MEMBER</MDBBtn>
        )}
      </td>
      <td>
        {membership ? (
          <MDBBtn className="text-nowrap" outline color="danger">Leave Mission</MDBBtn>
        ) : (
          <MDBBtn className="text-nowrap" outline color="dark">Join Mission</MDBBtn>
        )}
      </td>
    </tr>
  );
};

Mission.propTypes = {
  mission: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    membership: PropTypes.bool.isRequired,
  }).isRequired,
};

export default Mission;
