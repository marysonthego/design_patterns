import React, {useEffect} from 'react'

const Canvas = () => {

  useEffect(() => {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext('2d')
    const draw = (ctx) => {
      console.log('draw');
      ctx.fillStyle = 'rgb(200, 0, 0)';
      ctx.fillRect(10, 10, 50, 50);
      ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
      ctx.fillRect(30, 30, 50, 50);
      ctx.beginPath();
      ctx.strokeStyle = 'rgb(0, 0,200)';
      ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // Outer circle
      ctx.moveTo(110, 75);
      ctx.arc(75, 75, 35, 0, Math.PI, false); // Mouth (clockwise)
      ctx.moveTo(65, 65);
      ctx.arc(60, 65, 5, 0, Math.PI * 2, true); // Left eye
      ctx.moveTo(95, 65);
      ctx.arc(90, 65, 5, 0, Math.PI * 2, true); // Right eye
      ctx.stroke();
    }
    draw(ctx);
  }, []);

  return (
    <div>
      <h2>html5 canvas</h2>
      <canvas
        id="canvas"
        width="200"
        height="300"
        style={{ border: "10px solid #d3d3d3" }}
      >
        Your browser does not support the HTML canvas tag.
      </canvas>
    </div>
  );
};

export default Canvas
