/* eslint-disable react/prop-types */
import React from 'react';
import '../styles/dragonStyle.css';

function DragonsCreator(props) {
  const { dragons } = props;
  const {
    id, dragonName, description, flickrImages,
  } = dragons;

  return (
    <div id={id} className="a-dragon">
      <div className="dragons-img-cont">
        <img src={flickrImages[0]} alt="dragon" className="dragons-img" />
      </div>
      <div>
        <h2>{dragonName}</h2>
        <p>
          {' '}
          {description}
          {' '}
        </p>
        <button type="button" className="btn" id="btn">
          Reserve Dragon
        </button>
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
