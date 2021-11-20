import React, { useState, useEffect } from 'react';
import { HexColorPicker } from "react-colorful";
import { changeColor } from '../redux/ActionCreator';
import { useDispatch } from 'react-redux';

const ColorPicker = () => {
  const [color, setColor] = useState("#aabbcc");
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(changeColor(color)); 
  })

  return (
  <div className="color-picker-container">
      <HexColorPicker color={color} onChange={setColor} />
      <div className="color-selection">
          <p>Current Color: </p> 
          <div className="color-display" style={{backgroundColor: color}}></div>
          
          <p>Transparency</p>
          <button>0.1</button>
          <button>0.5</button>
          <button>1.0</button>
          <button>Eraser</button>
      </div>
  </div>
  
  );
};

export default ColorPicker;