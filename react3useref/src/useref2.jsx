import React, { useState, useRef, useEffect } from "react";
//In addition to accessing DOM elements, useRef is useful for
//  storing values that persist across renders. A common use
//  case is storing a previous value, such as the previous state or props.
function PreviousValue() {

    const [count, setCount] = useState(0);
    const prevCountRef = useRef();

    useEffect(() => {
        prevCountRef.current = count;
    }, [count]);

    return (
        <div>
            <p>Current count: {count}</p>
            <p>Previous count: {prevCountRef.current}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
}
export default PreviousValue;