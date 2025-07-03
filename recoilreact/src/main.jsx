import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import ContextApi from "./contextapi";
import Atom from "./atomrecoil.jsx";
import Zustand from "./zustand.jsx";
import Memoo from "./memo.jsx";
import Memoo2 from "./memo2.jsx";
import Selector from "./selector.jsx";

createRoot(document.getElementById("root")).render(
  <>
    
    {/* <Atom />
    <Zustand />
    <Memoo />
    <Memoo2 /> */}
    <Selector/>
  </>
);
