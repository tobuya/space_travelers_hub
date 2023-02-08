import { MDBBtn } from 'mdb-react-ui-kit';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { toggleMissionReserveState } from '../Redux/Missions/missions';

const Mission = ({ mission }) => {
  const {
    id, name, description, reserved,
  } = mission;

  const dispatch = useDispatch();

  const toggleReservation = () => {
    dispatch(toggleMissionReserveState(id));
  };

  return (
    <tr>
      <td className="fw-bold align-top">{name}</td>
      <td>{description}</td>
      <td>
        {reserved ? (
          <MDBBtn className="text-nowrap" size="sm" disabled>Active Member</MDBBtn>
        ) : (
          <MDBBtn className="text-nowrap" color="dark" size="sm" disabled>NOT A MEMBER</MDBBtn>
        )}
      </td>
      <td>
        {reserved ? (
          <button type="button" className="btn btn-outline-danger text-nowrap" onClick={toggleReservation}>Leave Mission</button>
        ) : (
          <button type="button" className="btn btn-outline-dark text-nowrap" onClick={toggleReservation}>Join Mission</button>
        )}
      </td>
    </tr>
  );
};

// An object taking on a particular shape
Mission.propTypes = {
  mission: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    reserved: PropTypes.bool.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
};

export default Mission;
