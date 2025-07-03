import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Counter from './App.jsx'
import Ap from './usestateeffect.jsx'
import Useeffect from './useeffect.jsx'
import New from './new.jsx'
import Appe from './errorhandling.jsx'

createRoot(document.getElementById('root')).render(
  <div>
    <App />
    <Ap/>
    <Useeffect/>
    <New/>
    <Appe/>

</div>  
)
