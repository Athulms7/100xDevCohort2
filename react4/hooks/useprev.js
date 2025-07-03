import { useEffect, useRef, useState } from "react";

export function usePrev(value){
    const ref=useRef();
    console.log("re-render happened with new value:"+value)
    useEffect(()=>{
        console.log("updated the value with:"+value)
        ref.current=value;

    },[value]);
    console.log("returned the value is:"+value);
    return ref.current;

}