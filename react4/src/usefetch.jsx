import { useState } from "react";
import { useEffect } from "react";
/// custom hookk
function usefetch() {
  const [post, setPost] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getposts();
  }, []);
  async function getposts() {
    console.log("hello");
    // created getpost function because we cannot make useffect function async
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const res = await response.json();
    console.log("res data", res);
    setPost(res);
    setLoading(false);
  }

  return {post, loading};
}

export default usefetch;
