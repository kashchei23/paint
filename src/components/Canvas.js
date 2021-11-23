import React, { useEffect } from "react";
import { useSelector } from 'react-redux';

function CanvasComponent(){

  const currentColor = useSelector((state) => state.Reducer.Color.Color);
  const currentThickness = useSelector((state) => state.Reducer.Thickness.Thickness);
  const currentTrasparency = useSelector((state) => state.Reducer.Transparency.Transparency);

  useEffect(() => {

    let isDrawing = false;
    let x = 0;
    let y = 0;
    const canvas = document.querySelector('canvas');
    const context = canvas.getContext('2d');

     /* Setting size of canvas based on screen size */
    function canvasSize(screenSize) {
      if (screenSize.matches) { 
        canvas.width=600;
      } else {
        canvas.width=900;
      }
    }
  
  let screenSize = window.matchMedia("(max-width: 1165px)")
  canvasSize(screenSize) 
  screenSize.onchange = canvasSize;

    /* tracking mouse for free-drawing */

    canvas.addEventListener('mousedown', e => {
      context.lineWidth = currentThickness;
      context.strokeStyle = currentColor;
      context.globalAlpha = currentTrasparency;
      x = e.offsetX;
      y = e.offsetY;
      isDrawing = true;
    });

    canvas.addEventListener('mousemove', e => {
      if (isDrawing === true) {
        drawLine(context, x, y, e.offsetX, e.offsetY);
        x = e.offsetX;
        y = e.offsetY;
      }
    });

    window.addEventListener('mouseup', e => {
      if (isDrawing === true) {
        drawLine(context, x, y, e.offsetX, e.offsetY);
        x = 0;
        y = 0;
        isDrawing = false;
      }
    });

    function drawLine(context, x1, y1, x2, y2) {
      context.lineJoin = 'round';
      context.lineCap = 'round';
      context.beginPath();
      context.moveTo(x1, y1);
      context.lineTo(x2, y2);
      context.stroke();
      context.closePath();
    }
  })
  
  return (
    <div>
      <canvas width="900" height="600">Alt text: this is the canvas</canvas>
    </div>
  )
}

export default CanvasComponent;