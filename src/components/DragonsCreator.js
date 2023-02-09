/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch } from 'react-redux';
import {
  bookADragon,
  cancelADragonBooking,
} from '../Redux/ Bragons/bragonSlice';
import '../styles/dragonStyle.css';

function DragonsCreator(props) {
  const { dragons } = props;
  const {
    id, dragonName, description, flickrImages, reserved,
  } = dragons;

  const theDispatch = useDispatch();

  return (
    <div id={id} className="a-dragon">
      <div className="dragons-img-cont">
        <img src={flickrImages[0]} alt="dragon" className="dragons-img" />
      </div>
      <div>
        <h2>{dragonName}</h2>
        <p>
          {reserved ? <span className="res-badge"> Reserved </span> : null}
          {description}
          {' '}
        </p>
        {reserved ? (
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => theDispatch(cancelADragonBooking(id))}
          >
            Cancel Reservation
          </button>
        ) : (
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => theDispatch(bookADragon(id))}
          >
            Reserve Dragon
          </button>
        )}
      </div>
    </div>
  );
}

export default DragonsCreator;

// DragonsCreator.propTypes = {
//   id: propTypes.string.isRequired,
//   dragonName: propTypes.string.isRequired,
//   description: propTypes.string.isRequired,
//   flickrImages: propTypes.string.isRequired,
//   dragons: propTypes.string.isRequired,
// };
