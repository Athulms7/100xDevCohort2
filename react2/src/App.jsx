import { useState, useEffect } from "react";
import "./App.css";

function App() {
  return (
    <div>
      hithere
      <Counter></Counter>
    </div>
  );
}
function Counter() {
  const [count, setCount] = useState(0);
  function click() {
    setCount(count + 1);
  }
  function oclick() {
    setCount(count - 1);
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={oclick}>decrease </button>
      <button onClick={click}>increase </button>
      <br></br>
    </div>
  );
}

export default App;
