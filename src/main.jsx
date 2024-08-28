import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import MockContextProvider from './context/MockContextProvider.jsx'
import { Provider } from 'react-redux'
import store from './redux/config/configStore.js'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <StrictMode>
      <App />
    </StrictMode>
  </Provider>,
)
