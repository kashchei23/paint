import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { changeThickness } from '../redux/ActionCreator';
import { changeColor } from '../redux/ActionCreator';
import Eraser_1 from '../images/Eraser_1.svg';

function EraserComponent() {

    const [thickness, setThickness] = useState(2);
    const [color, setColor] = useState("#FFFFFF");
    const dispatch = useDispatch()

    useEffect(() => {
      dispatch(changeThickness(thickness)); 
      dispatch(changeColor(color));
    })

    const handleClick = (e) => {
      setThickness(e.target.value);
      setColor("#FFFFFF");
    };
  
  return (
    <div className="control-child">
      <button type="submit" id="thin-eraser" className="control-button" onClick={handleClick} value={2} ></button>
      <button type="submit" id="med-eraser" className="control-button" onClick={handleClick} value={6}></button>
      <button type="submit" id="lg-eraser" className="control-button"onClick={handleClick} value={18}></button>
    </div>
  )
}

export default EraserComponent;