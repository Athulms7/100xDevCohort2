import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { createContext } from "react";
import { useContext } from "react";

const Bulbcontext=createContext();// 1.initializing context api context,provider,consumer
// 3 things to do
function ContextApi() {
 
const [bulbon, setbulb] = useState(false);
  return (
    <>
    <Bulbcontext.Provider value={{// 2.using provider of context api 
      bulbon:bulbon,
      setbulb:setbulb
    }}>
      <LightBulb />
    </Bulbcontext.Provider>
      
    </>
  );
}

function LightBulb() {


  return (
    <div>
      <Bulbstate></Bulbstate>
      <Togglebulbstate >
        <div >children working</div>
      </Togglebulbstate>
    </div>
  );
}

function Bulbstate() {
  const {bulbon}=useContext(Bulbcontext);// 3.using consumer using usecontext
  return <div>{bulbon ? "Bulbon" : "Bulboff"}</div>;
}

function Togglebulbstate({ children }) {
  const {setbulb}=useContext(Bulbcontext);//3. using consumer using usecontext
  return (
    <div>
      <button
        onClick={() => {
          setbulb((bulbstate) => !bulbstate);
        }}
      >
        Toggle the bulb
      </button>
      {children}
    </div>
  );
}
export default ContextApi;
