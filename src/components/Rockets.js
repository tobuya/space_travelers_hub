import React from 'react';

const Rockets = () => (
  <div className="d-flex m-3 p-2 border border-primary gap-3">
    <img className="w-25 border border-primary" alt="rockets img" />
    <div className="w-75 border border-primary gap-2">
      <h2>Falcon</h2>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industrys standard dummy text ever since the 1500s when
        an unknown printer took a galley of type and scrambled
        it to make a type specimen book.
      </p>
      <button type="button" className="btn btn-primary mb-2">Resrve Rocket</button>
    </div>
  </div>
);

export default Rockets;
