import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { changeThickness } from '../redux/ActionCreator';
import { useSelector } from 'react-redux';
import { changeColor } from '../redux/ActionCreator';

function ThicknessComponent() {

    const [thickness, setThickness] = useState(2);
    const temporaryColor = useSelector((state) => state.Reducer.TempColor.TempColor);
    const dispatch = useDispatch()

    useEffect(() => {
      dispatch(changeThickness(thickness)); 
    },)
    
    const handleClick = (e) => {
      setThickness(e.target.value);
      dispatch(changeColor(temporaryColor));
    };
  
  return (
    <div className="control-child">
      <button type="submit" id="thickness-1" className="control-button" onClick={handleClick} value={2}></button>
      <button type="submit" id="thickness-2" className="control-button" onClick={handleClick} value={6}></button>
      <button type="submit" id="thickness-3" className="control-button" onClick={handleClick} value={18}></button>
    </div>
  )
}

export default ThicknessComponent;