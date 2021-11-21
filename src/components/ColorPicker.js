import React, { useState, useEffect } from 'react';
import { HexColorPicker } from "react-colorful";
import { changeColor } from '../redux/ActionCreator';
import { changeTempColor } from '../redux/ActionCreator';
import { useDispatch } from 'react-redux';

const ColorPicker = () => {
  const [color, setColor] = useState("#BF40BF");
  const dispatch = useDispatch();
  
 

  const refreshPage = () => {
    window.location.reload();
  }

  let temporaryColor;

  if(color !== "#FFFFFF" ) {
    temporaryColor = color;
   
  }

  useEffect(() => {
    dispatch(changeColor(color)); 
    dispatch(changeTempColor(temporaryColor))
  })

  const handleClick = (e) => {
    dispatch(changeColor(temporaryColor));
  };

  return (
  <div className="color-picker-container control-child">
      <HexColorPicker color={color} onChange={setColor} />
      <button type="submit" id="color-button" className="control-button color-display" style={{backgroundColor: color}} onClick={handleClick}></button>
      <button id="reload" className="control-button" onClick={refreshPage}></button>
  </div>
  
  );
};

export default ColorPicker;