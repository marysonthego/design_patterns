import React from 'react'
import useCanvas from './useCanvas';
import NoSSRWrapper from '../../../NoSSRWrapper.js';


const Canvas = props => {

  const { draw, options, ...rest } = props
  const { ctx, ...moreConfig } = options
  const canvasRef = useCanvas(draw, {ctx})

  return (
  <NoSSRWrapper>
    <canvas ref={canvasRef} {...rest}/>
  </NoSSRWrapper>
  );
}

export default Canvas
