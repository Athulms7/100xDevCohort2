import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ContextApi from "./contextapi"
import Customhook from './customhook'
import Usefetch from './usefetch'
import App from './App'
import SearchComponent from './debounce'

createRoot(document.getElementById('root')).render(
  <div>
    <ContextApi />
    <Customhook/>
    <App/>
    <SearchComponent/>
    </div>

)
