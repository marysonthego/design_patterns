import React from 'react';
import PropTypes from 'prop-types';

const draw = (context) => {
  context.fillStyle = "rgb(200, 0, 0)";
  context.fillRect(10, 10, 50, 50);

  context.fillStyle = "rgba(0, 0, 200, 0.5)";
  context.fillRect(30, 30, 50, 50);
};

const Canvas = ({height, width}) => {
  let canvas;

  React.useEffect(() => {
    canvas = React.useRef()
    const context = canvas.current.getContext('2d');
    draw(context);
  }, []);

return (
    <canvas ref={canvas} height={height} width={width} />
  );
};
Canvas.propTypes = {
  draw: PropTypes.func.isRequired,
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
};


// function createReportList(wrapperId) {
//   let list = document.createElement('ul');
//   list.id = wrapperId + '-reporter';

//   let canvasWrapper = document.getElementById(wrapperId);
//   canvasWrapper.appendChild(list);

//   return list.id;
// }

export { Canvas };
