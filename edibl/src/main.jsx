import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Week2 from './week2.jsx'
import { Router } from 'react-router'
import Week3 from './Week3.jsx'
import Week4 from './Week4.jsx'
import Week5 from './Week5.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Week5/>

  </StrictMode>,
)
