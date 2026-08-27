import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { BirthContextProvider } from './authorization/birthdayContext.jsx'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <BirthContextProvider>
      <StrictMode>
        <App />
      </StrictMode>
    </BirthContextProvider>
  </BrowserRouter>
)
