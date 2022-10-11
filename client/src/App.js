import "./App.css";
import Palette from "./components/Palette";
import { init, subscribe } from "./socketApi";
import { useEffect, useState } from "react";

function App() {
  const [activeColor, setActiveColor] = useState("#282c34");

  useEffect(() => {
    init();

    subscribe((color) => {
      console.log("Setting active color", color);
      setActiveColor(color);
    });
  }, []);
  return (
    <div className="App" style={{ backgroundColor: activeColor }}>
      <Palette />
    </div>
  );
}

export default App;
