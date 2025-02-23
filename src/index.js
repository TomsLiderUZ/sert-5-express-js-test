import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import Index from "./root/Index"


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
        <Index></Index>
  </BrowserRouter>
)
