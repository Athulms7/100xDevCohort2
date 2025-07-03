import { useState, useEffect } from "react";
export function usePostTitle() {}

export function useFetch(url) {
  const [finaldata, setfinaldata] = useState([]);

  useEffect(() => {
    getdetails();
  }, []);
  async function getdetails() {
    const response = await fetch(url);
    const res = await response.json();
    setfinaldata(res);
    
  }
  
  return{finaldata}
}
