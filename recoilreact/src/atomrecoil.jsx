import "./App.css";
import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
import { counterAtom } from "./store/atom&selector.js";


//Atoms represent units of state, while selectors derive
//  new state based on other atoms or selectors. 
// Essentially, atoms are the basic building blocks,
//  and selectors are functions that compute derived data from those blocks. 
function Atom() {
  return (
    <>
      <RecoilRoot>
        <Counter />
      </RecoilRoot>
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
  const count = useRecoilValue(counterAtom);
  return <div>count{count}</div>;
}
function IncreaseCounter() {
  const setCount = useSetRecoilState(counterAtom);
  function click() {
    setCount((count) => count + 1);
  }

  return (
    <div>
      <button onClick={click}>increase </button>
      <br></br>
    </div>
  );
}
function Decreasecounter() {
  const setCount = useSetRecoilState(counterAtom);
  function oclick() {
    setCount((c) => c - 1);
  }

  return <button onClick={oclick}>decrease </button>;
}

export default Atom;
