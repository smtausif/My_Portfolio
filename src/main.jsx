import React from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import App from './App.jsx'   // <- EXACT name with extension

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)