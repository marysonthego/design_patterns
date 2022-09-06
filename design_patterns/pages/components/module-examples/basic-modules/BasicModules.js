import React, {useEffect, useState} from "react";
//import Canvas from './modules/canvas.js';
import { draw, reportArea, reportPerimeter } from './modules/square.js';
import randomSquare from './modules/square.js';
import NoSSRWrapper from '../../NoSSRWrapper.js';

export default function BasicModules() {

//useEffect(() => {
  const draw = (ctx) => {
  const canvas = document.getElementById("canvas");
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
  ctx.fillStyle = 'rgb(200, 0, 0)';
  ctx.fillRect(10, 10, 50, 50);

  ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
  ctx.fillRect(30, 30, 50, 50);
}
//}, []);

return (
  <div>
    <h1>Basic Modules</h1>
    <canvas
      id="canvas"
      width="200"
      height="100"
      style={{ border: "1px solid #d3d3d3" }}
    >
      Your browser does not support the HTML canvas tag.
    </canvas>
  </div>
);
}

//   useEffect(() => {
//     console.log('canvas', canvas);
//     const canvas = Canvas(null);
//     let square = randomSquare(canvas.context);

//     draw(canvas, square);
//     reportArea(reportList, square);
//     reportPerimeter(reportList, square);

//     let myCanvas = Canvas(480, 320);
//     //reportList = (createReportList(myCanvas.id));

//     let square1 = draw(myCanvas.context, 50, 50, 100, 'blue');
//     reportArea(square1.length, reportList);
//     reportPerimeter(square1.length, reportList);
//     // Use the default
//     let square2 = randomSquare(myCanvas.context);
//   }, [draw, randomSquare, reportArea, reportPerimeter]);
// };

