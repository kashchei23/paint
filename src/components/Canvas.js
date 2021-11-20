import React, { useEffect } from "react";
import { useSelector } from 'react-redux';

function CanvasComponent(){

  const currentColor = useSelector((state) => state.ThicknessReducer.Color.Color);
  const currentThickness = useSelector((state) => state.ThicknessReducer.Thickness.Thickness);
  const currentThickness1 = useSelector((state) => state);
  //const currentTrasparency = useSelector((state) => state.TransparencyReducer.Trasnparency)

console.log(currentColor);
console.log(currentThickness);
console.log(currentThickness1);

  useEffect(() => {
    
      let isDrawing = false;
      let x = 0;
      let y = 0;
      const canvas = document.querySelector('canvas');
      const context = canvas.getContext('2d');

   
      /* tracking mouse for free-drawing */
      canvas.addEventListener('mousedown', e => {
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
        context.strokeStyle = currentColor;
        context.lineWidth = currentThickness;
        context.beginPath();
        context.moveTo(x1, y1);
        context.lineTo(x2, y2);
        context.stroke();
        context.closePath();
      }
    })
  
  return (
    <div>
      <canvas width="800" height="450">Alt text: this is the canvas</canvas>
    </div>
  )
}

export default CanvasComponent;