import usefetch from "./usefetch";
import { useFetch } from "../hooks/usefectchh";
import { useState } from "react";
import { usePrev } from "../hooks/useprev";

export default function App() {
  const { post, loading } = usefetch();
  const { finaldata } = useFetch("https://jsonplaceholder.typicode.com/posts");
  const [count, setcount] = useState(0);
  const prevcount = usePrev(count);

  if (loading) {
    return <div>loading</div>;
  }
  return (
    <div>
      <div>
        useprev{count}
        <br></br>
        <button
          onClick={() => {
            setcount(count + 1);
          }}
        >
          click
        </button>
        <p>previous count is{prevcount}</p>
      </div>
      <div>
        {post.map((p,index) => (
          <div key={index}>
            <div>{p.id}</div>
            <div>{p.title}</div>
          </div>
        ))}
      </div>

      {finaldata.map((p, index) => (
        <div key={index}>
          <div>{p.id}</div>
          <div>{p.title}</div>
        </div>
      ))}
    </div>
  );
}
