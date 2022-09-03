import React, {useEffect, useState} from "react";
import { Canvas } from './modules/canvas.js';
import { draw, reportArea, reportPerimeter } from './modules/square.js';
import randomSquare from './modules/square.js';

export default function BasicModules() {
  const [hasMounted, setHasMounted] = useState(false);

useEffect(() => {
  setHasMounted(true);
}, []);

// if(!hasMounted) {
//   return null;
// }

  let  canvas = Canvas('canvas');
  //let reportList = createReportList('reportList');
  let square = randomSquare(canvas.context);

  draw(canvas, square);
  reportArea(reportList, square);
  reportPerimeter(reportList, square);

  let myCanvas = Canvas(480, 320);
  //reportList = (createReportList(myCanvas.id));

  let square1 = draw(myCanvas.ctx, 50, 50, 100, 'blue');
  reportArea(square1.length, reportList);
  reportPerimeter(square1.length, reportList);
  // Use the default
  let square2 = randomSquare(myCanvas.ctx);
}
