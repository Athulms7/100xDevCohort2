import "./App.css";
import { memo, useState } from "react";


function Memoo() {
  const[count,setCount]=useState(0)  
  return (
    <>
      
        <Counter />
      
    </>
  );
}

function Counter() {
    const[count,setCount]=useState(0)
  return (
    <>
      {/* <MemoizedCurrentCount /> */}
      <Countcomp count={count}/>
      <IncreaseCounter setCount={setCount} />
      <Decreasecounter setCount={setCount}/>
    </>
  );
}

// const MemoizedCurrentCount = memo(Countcomp); //1. way it will give a component that is same as Countcom
//  and it will not rerender as prop or state changes.

// function Countcomp() {
//   const count = useRecoilValue(counterAtom);
//   return <div>count{count}</div>;
// }

const Countcomp = memo(function (props) {
    
  return <div>count1{props.count}</div>;
});

const IncreaseCounter = memo(function (props) {
  
  function click() {
   props.setCount(c=>c+1);
  }

  return (
    <div>
      <button onClick={click}>increase </button>
      <br></br>
    </div>
  );
});

const Decreasecounter = memo(function (props) {
 
  function oclick() {
   props.setCount(c=>c-1);
  }

  return <button onClick={oclick}>decrease </button>;
});

export default Memoo;