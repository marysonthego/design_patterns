import { useRef, useEffect } from 'react'

const useCanvas = (draw, options={}) => {

  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current;

    console.log('canvasRef.current', canvasRef.current);
    const ctx = canvas.getContext(options.ctx || '2d')
    let frameCount = 0
    let animationFrameId
    const render = () => {
      frameCount++
      draw(ctx, frameCount)
      animationFrameId = window.requestAnimationFrame(render)
    }
    render()
    return () => {
      window.cancelAnimationFrame(animationFrameId)

  }
  }, [canvas])
    return canvasRef
}
export default useCanvas
