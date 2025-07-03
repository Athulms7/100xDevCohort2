import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './Atom.jsx'
import Atom2 from './atom2.jsx'

createRoot(document.getElementById('root')).render(
  <>
    atom
    <App/>
    <Atom2/>
    </>
  
)
