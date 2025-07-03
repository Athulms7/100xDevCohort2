import { useState, useEffect } from "react";
import "./App.css";


//conditional rendering for every 5 seconds the counter dissapears

function Ap() {
  // let countervisibl=true
  let [countervisible, setvisible] = useState(true);
  useEffect(() => {
    
    setInterval(() => {
    
      setvisible(countervisible=>!countervisible);
    }, 5000);

  }, []);
  return (<div>
    {countervisible ? <Setinterval /> : null}
    </div>
    );//conditional rendering
}
function Setinterval() {
  const [count, setCount] = useState(0);
  console.log("counter");
  useEffect(function () {
    // use effect only runs once //
    let clock=setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);
    console.log("mounted");
    return (function(){// this helps to make the system make ummounting more easily
        console.log("unmounted");
        clearInterval(clock);
    })
  }, []); //dependancy array,cleanup
  return (
    <div>
      <h1>{count}</h1>
    </div>
  );
}

export default Ap;
