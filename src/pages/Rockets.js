import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Rocket from '../components/Rocket';
import { addedRockets } from '../Redux/Rockets/Rockets';

const Rockets = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rocket);

  useEffect(() => {
    if (rockets.length === 0) {
      dispatch(addedRockets());
    }
  }, [dispatch, rockets.length]);
  return (
    <div className="mt-3">
      {rockets.map((rocket) => (
        <Rocket key={rocket.id} rocket={rocket} />
      ))}
    </div>
  );
};

export default Rockets;
