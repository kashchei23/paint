import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { changeThickness } from '../redux/ActionCreator';

function ThicknessComponent() {

    const [thickness, setThickness] = useState(2);
    const dispatch = useDispatch()

    useEffect(() => {
      dispatch(changeThickness(thickness)); 
    },)
  
  return (
    <div>
      <p>Thickness:</p>
      <button onClick={() => setThickness(2)}>Thin</button>
      <button onClick={() => setThickness(6)}>Medium</button>
      <button onClick={() => setThickness(12)}>Thick</button>
    </div>
  )
}

export default ThicknessComponent;