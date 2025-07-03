import { createContext, useContext, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const ContextCount = createContext();
function ContextApi() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <ContextCount.Provider value={{ count: count, setCount: setCount }}>
        <Countcomp></Countcomp>
        <IncreaseCounter></IncreaseCounter>
        <Decreasecounter></Decreasecounter>
      </ContextCount.Provider>
    </div>
  );
}

function Countcomp() {
  const {count}=useContext(ContextCount);
  return <div>count{count}</div>;
}
function IncreaseCounter() {
  const { count,setCount } = useContext(ContextCount);
  function click() {
    setCount(count + 1);
  }

  return (
    <div>
      <button onClick={click}>increase </button>
      <br></br>
    </div>
  );
}
function Decreasecounter() {
  const {count,setCount } = useContext(ContextCount);
  function oclick() {
    setCount(count - 1);
  }

  return <button onClick={oclick}>decrease </button>;
}

export default ContextApi;
