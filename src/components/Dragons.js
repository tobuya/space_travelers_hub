import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getDragonData } from '../Redux/Dragons/dragonSlice';
import DragonsCreator from './DragonsCreator';
import '../styles/dragonStyle.css';

const Dragon = () => {
  const dragons = useSelector((state) => state.dragons.dragons);
  const theDispatch = useDispatch();

  useEffect(() => {
    theDispatch(getDragonData());
  }, [theDispatch]);
  return (
    <div className="all-dragons">
      {dragons.map((dragons) => (
        <DragonsCreator key={dragons.id} dragons={dragons} />
      ))}
    </div>
  );
};

export default Dragon;
