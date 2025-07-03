import { useState } from "react";
import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
import { counterAtom, evenSelector } from "./store/atom&selector";

//Atoms represent units of state, while selectors derive
//  new state based on other atoms or selectors. 
// Essentially, atoms are the basic building blocks,
//  and selectors are functions that compute derived data from those blocks. 
function Selector(){
    return ( <div>
        <RecoilRoot>
        <Buttons/>
        <Counter/>
        <Iseven/>
        </RecoilRoot>
    </div>)
}

function Buttons(){
    const setCount=useSetRecoilState(counterAtom);
    function increase(){
        setCount(count=>count+2)
    }
    function decrease(){
        setCount(count=>count-1)
    }
    return(
        <div>
        <h1>selector</h1>    
        <button onClick={increase}>increase by 2</button>
        <button onClick={decrease}>decrease</button>

        </div>
    )


}
function  Counter(){
    const count=useRecoilValue(counterAtom);
    return<div>
        {count}
    </div>
}
function Iseven(){
    const even=useRecoilValue(evenSelector);
    return<div>
        {even?"even":"odd"}
    </div>

}

export default Selector;