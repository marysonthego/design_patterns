import React, {useEffect, useRef, useState} from "react";
import Canvas from "./modules/canvas";

export default function BasicModules() {



  return (
    <div>
      <h1>Basic Modules</h1>
      <Canvas>
        Your browser does not support the HTML canvas tag.
      </Canvas>
    </div>
  );
}
