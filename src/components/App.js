import React, { useState } from "react";
import "../styles/App.css";
const App = () => {
  const [msg, setMsg] = useState("I was not double clicked");

  const handleDoubleClick = (event) => {
    setMsg("I was double clicked");
  };

  console.log(msg);

  return (
    <div id="main">
      <button id="dblclick-btn" onDoubleClick={handleDoubleClick}>
        Double click me
      </button>
      {/* <h1>{msg}</h1> */}
    </div>
  );
};

export default App;
