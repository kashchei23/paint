import React, { useState, useEffect } from 'react';
import { HexColorPicker } from "react-colorful";
import { changeColor } from '../redux/ActionCreator';
import { useDispatch } from 'react-redux';

const ColorPicker = () => {
  const [color, setColor] = useState("#7EC8E3");
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(changeColor(color)); 
  })
  const refreshPage = () => {
    window.location.reload();
  }

  return (
  <div className="color-picker-container control-child">
      <HexColorPicker color={color} onChange={setColor} />
      <div className="color-display" style={{backgroundColor: color}}></div>
      <button id="reload" className="control-button" onClick={refreshPage}></button>
  </div>
  
  );
};

export default ColorPicker;