import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { changeTransparency } from '../redux/ActionCreator';
import { useSelector } from 'react-redux';
import { changeColor } from '../redux/ActionCreator';

function TransparencyComponent() {

    const [transparency, setTransparency] = useState(1);
    const currentColor = useSelector((state) => state.Reducer.Color.Color);
    const temporaryColor = useSelector((state) => state.Reducer.TempColor.TempColor);
    const dispatch = useDispatch()

    useEffect(() => {
      dispatch(changeTransparency(transparency)); 
    },)

    const handleClick = (e) => {
      setTransparency(e.target.value);
      if(currentColor === "#FFFFFF"){
        dispatch(changeColor(temporaryColor));
      }
    };
  
  return (
    <div className="control-child">
          <button type="submit" id="transp-1" className="control-button" onClick={handleClick} value={1}></button>
          <button type="submit" id="transp-2" className="control-button" onClick={handleClick} value={0.05}></button>
          <button type="submit" id="transp-3" className="control-button" onClick={handleClick} value={0.01}></button>
    </div>
  )
}

export default TransparencyComponent;


