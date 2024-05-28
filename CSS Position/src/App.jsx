import { useState } from "react";
import "./App.css";

function App() {
  const [position, setPosition] = useState("static");

  const handlePositionChange = (newPosition) => {
    setPosition(newPosition);
  };

  return (
    <div className="App">
      <div className="button-group">
        <button onClick={() => handlePositionChange("static")}>Static</button>
        <button onClick={() => handlePositionChange("relative")}>
          Relative
        </button>
        <button onClick={() => handlePositionChange("absolute")}>
          Absolute
        </button>
        <button onClick={() => handlePositionChange("fixed")}>Fixed</button>
      </div>
      <div className="container">
        <div className="box box1" style={{position}}> Box 1 </div>
        <div className="box box2" style={{position}}>  Box 2 </div>
      </div>
    </div>
  );
}

export default App;
