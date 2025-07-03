import { useState } from "react";

//its a custom hook
//
//  function useValue(){
//     const [value,setValue]=useState(1);
//     return value;
// }


import "./App.css";

function useCounter() {
  // it is a custom hook that maintains counter
  const [count, setCount] = useState(0);
  function increaseCount() {
    setCount(count + 1);
  }
  return{
    count:count,
    increaseCount:increaseCount,
}
}
function Customhook() {
return(
    <div>
<Counter/>
<Counter/>
</div>

)
}

function Counter(){
    const{count,increaseCount}=useCounter();
  return (
    <div>
      {count}
      <button onClick={increaseCount
      }>increase {count}</button>
      <br></br>
    </div>
  );
}



export default Customhook;
