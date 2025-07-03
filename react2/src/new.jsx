import { useState, useEffect } from "react";
import "./App.css";

function New() {
  return (
    <div style={{display:"flex",background:"grey"}}>
      
    <Card>children={"hithere"}</Card>
    <Card children={<div style={{color:"green",padding:"10px"}}>
        hello<div>
        <input type="text" />
        </div>
    </div>}></Card>
    <Card>
        <div style={{color:"green",padding:"10px",display:"flex"}}>
        hello<div>
        <input type="text" />
        </div>
        <div>
            flex working
        </div>
    </div>
    </Card>
    </div>
    
  );
}
function Card({children}) {

  return (
    <div style={{background:"black",borderRadius:"5px",color:"white",margin:"10px",}}>
      {children}
    </div>
  );
}

export default New;
