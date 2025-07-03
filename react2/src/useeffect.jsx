import { useState, useEffect } from "react";
import "./App.css";

function Useeffect() {
  const [count, setCount] = useState(0);
  function incresecount(){
    setCount(count=>count+1);
  }
  return (
    <div>
      <Use count={count}></Use>
      <button onClick={incresecount}>Count{count}</button>
    </div>
  ); //conditional rendering
}
function Use(props) {
  useEffect(function () {
    // use effect only runs once //
    console.log("mounted");
    return function () {
      console.log("unmounted");
    };
  }, []); 
  useEffect(function(){
    console.log("count changes")
    return(function(){
        console.log("the useffect clean the previous one and loads new count changes")
    })
  },[props.count]);//dependancy array when ever we change props.count we use useffect to log
  return (
    <div>
      <h1>count{props.count}</h1>
    </div>
  );
}

export default Useeffect;
