
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './useref.jsx'
import PreviousValue from './useref2.jsx'

createRoot(document.getElementById('root')).render(
  <>
  <App /> 
<PreviousValue/>
</>
)
