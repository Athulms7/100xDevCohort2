import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
//        SINGLE PAGE APPLICATION
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
  Outlet,
} from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  function Hellopage() {
    return <div>hello page render</div>;
  }
  function Haiiipage() {
    const navigate = useNavigate(); // navigate is ussed to navigate route to some place
    return (
      <div>
        hai page is being rendered
        <button
          onClick={() => {
            navigate("/");
          }}
        >
          go to firstpage
        </button>
      </div>
    );
  }
  function Error() {
    return (
      <div>
        <b>Page not found 404</b>
      </div>
    );
  }
  function Layout() {
    return(<div style={{height:"100vh"}}>
      firstpage
      <div style={{height:"80vh"}}>
      <Outlet/>
      </div>
    </div>);
  }
  return (
    //another waay rather than a tag is link nut needed to be used inside browser routes
    <>
      {/* <div style={{background:"white",color:"black"}}>
        <link to='/haiii'>haiii</link><br></br>
        <a href="/hello">hello</a>
      </div> */}
      headerrrrrrrrrrrrrrrrrrrrrrrrrrrr
      <BrowserRouter>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            width: "700px",
          }}
        >
          <Link to="/haiii">haiii</Link>
          <Link to="/hello">hello using link</Link>
          <Link to="/">Homepage</Link>
          <a href="*">error</a>
          <a href="/hello">hello using a</a>
        </div>
        <Routes>
          <Route path="/hello" element={<Hellopage></Hellopage>}></Route>
          <Route path="/haiii" element={<Haiiipage></Haiiipage>}></Route>
          <Route path="/" element={<Layout></Layout>}></Route>
          <Route path="*" element={<Error />}></Route>
        </Routes>
      </BrowserRouter>
      footerrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr
    </>
  );
}

export default App;
