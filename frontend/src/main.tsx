import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ConfigProvider } from 'antd';
import antdTheme from './theme';
import './index.css'
import App from './App.tsx'
import { initializeStore } from './store'

// Initialize store on app startup
initializeStore()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ConfigProvider theme={antdTheme}>
      <App />
    </ConfigProvider>
  </StrictMode>,
)
