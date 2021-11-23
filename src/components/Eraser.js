import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeThickness } from '../redux/ActionCreator';
import { changeColor } from '../redux/ActionCreator';
import { changeTransparency } from '../redux/ActionCreator';

function EraserComponent() {

    const [thickness, setThickness] = useState(2);
    const [transparency, setTransparency] = useState(1);
    const temporaryColor = useSelector((state) => state.Reducer.TempColor.TempColor);
    const dispatch = useDispatch()

    useEffect(() => {
      dispatch(changeThickness(thickness)); 
      
      dispatch(changeTransparency(transparency))
    })

    const refreshPage = () => {
      window.location.reload();
    }

    const handleClick = (e) => {
      console.log('Im clicking');
      setThickness(e.target.value);
      dispatch(changeColor("#FFFFFF"));
      setTransparency(1);
    };
  
  return (
    <div className="control-child eraser-container">
      <p className="control-title-eraser">Clear &nbsp; &nbsp;   Eraser&nbsp;&nbsp;&nbsp;&nbsp;</p>
      <button id="reload" className="control-button" onClick={refreshPage}></button>
      <button type="submit" id="thin-eraser" className="control-button" onClick={handleClick} value={2} ></button>
      <button type="submit" id="med-eraser" className="control-button" onClick={handleClick} value={6}></button>
      <button type="submit" id="lg-eraser" className="control-button"onClick={handleClick} value={18}></button>

    </div>
  )
}

export default EraserComponent;