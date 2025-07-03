// import usefetch from "../src/usefetch.jsx";
// export default function UseDebounce(){
// function debounceSearchBackend(){
//     const clock=setTimeout(usefetch,200);
//     clearTimeout(clock);
// }
// return(<div>
//     <input type="text" placeholder="message will send within 5 seconds" onChange={debounceSearchBackend}></input>
// </div>)
// }

    import { useState, useEffect } from 'react';

    function useDebounce(value, delay) {
      const [debouncedterm, setDebouncedValue] = useState(value);

      useEffect(() => {
        const handler = setTimeout(() => {
          setDebouncedValue(value);
        }, delay);

        // Cleanup function to clear the timeout if value or delay changes
        return () => {
          clearTimeout(handler);
        };
      }, [value, delay]); // Re-run effect if value or delay changes

      return debouncedterm;
    }

    export default useDebounce;