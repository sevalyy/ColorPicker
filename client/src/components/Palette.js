import { useState } from "react";

import { send } from "../socketApi";

function Palette() {
  const [color, setColor] = useState("#5e30eb");
  return (
    <div>
      <h1>Palette</h1>
      <div className="palette">
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <br />
        {color}
        <button onClick={send(color)}>Click</button>
      </div>
    </div>
  );
}

export default Palette;
