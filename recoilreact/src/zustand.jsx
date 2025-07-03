import "./App.css";
import { useStore } from "./store/zustands.js";

function Zustand() {
    const{count,increment,decrement}=useStore();
  return (
    <>
        <Counter />
    </>
  );
}

function Counter() {
  return (
    <>
      <Countcomp />
      <IncreaseCounter />
      <Decreasecounter />
    </>
  );
}

function Countcomp() {
  const {count} = useStore()
  return <div>count{count}</div>;
}
function IncreaseCounter() {
  const{increment}  = useStore()
  

  return (
    <div>
      <button onClick={increment}>increase </button>
      <br></br>
    </div>
  );
}
function Decreasecounter() {
  const {decrement} = useStore()

  return <button onClick={decrement}>decrease </button>;
}

export default Zustand;
