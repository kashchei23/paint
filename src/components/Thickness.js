import React from 'react';
import { useDispatch } from 'react-redux';
import { changeThickness } from '../redux/ActionCreator';
import { useSelector } from 'react-redux';
import { changeColor } from '../redux/ActionCreator';

function ThicknessComponent() {


    const temporaryColor = useSelector((state) => state.Reducer.TempColor.TempColor);
    const dispatch = useDispatch()
    
    const handleClick = (e) => {
      dispatch(changeThickness(e.target.value));
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