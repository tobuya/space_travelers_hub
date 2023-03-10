import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getDragonData } from '../Redux/Dragons/dragonSlice';
import DragonsCreator from '../components/DragonsCreator';
import '../styles/dragonStyle.css';

const Dragons = () => {
  const dragons = useSelector((state) => state.dragons.dragons);
  const theDispatch = useDispatch();

  useEffect(() => {
    if (dragons.length === 0) theDispatch(getDragonData());
  }, [theDispatch, dragons.length]);
  return (
    <div className="all-dragons">
      {dragons.map((dragons) => (
        <DragonsCreator key={dragons.id} dragons={dragons} />
      ))}
    </div>
  );
};

export default Dragons;
