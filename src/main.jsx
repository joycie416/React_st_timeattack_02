import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import MockContextProvider from './context/MockContextProvider.jsx'

createRoot(document.getElementById('root')).render(
  <MockContextProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </MockContextProvider>,
)
