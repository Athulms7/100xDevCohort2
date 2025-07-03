

import './App.css'

function App() {
 
const todo:string ="hi"
  return (
    <>
      <Todo title={todo} />
    </>
  )
}

export default App;
interface todoprop{
  title:string
}

function Todo(props:todoprop){
  console.log(props);
  return(<div>
    {props.title}
  </div>)
}
 
