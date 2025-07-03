import Useeffect from "../../react2/src/useeffect";
import "./App.css";
import { memo, useState } from "react";


function Memoo2() {
  return (
    <>
      
        <Counter />
      
    </>
  );
}

function Counter() {
    const [count,setCount]=useState(0);
    Useeffect(
        setInterval(()=>{
            setCount(count+1)

        },3000),[])
  return (
    <>
      {/* <MemoizedCurrentCount /> */}
      <Countcomp/>
      <IncreaseCounter  />
      <Decreasecounter />
    </>
  );
}

const Countcomp = memo(function () {
    
  return <div>count</div>;
});

const IncreaseCounter = memo(function () {
  
  function click() {
   
  }

  return (
    <div>
      <button onClick={click}>increase </button>
      <br></br>
    </div>
  );
});

const Decreasecounter = memo(function () {
 
  function oclick() {
  
  }

  return <button onClick={oclick}>decrease </button>;
});

export default Memoo2;