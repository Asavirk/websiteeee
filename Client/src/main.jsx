import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'
import { ClerkProvider } from '@clerk/clerk-react'
import AppContetxProvider from './context/AppContext'

// Import your Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error('Add your Clerk Publishable Key to the .env file')
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <BrowserRouter>
  <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
  <AppContetxProvider>
      <App />
  </AppContetxProvider>
  </ClerkProvider>
  </BrowserRouter>
  </React.StrictMode>
)

// Safely handle service worker registration
if ('serviceWorker' in navigator && document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    try {
      if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/sw.js').catch(() => {
          // Service worker registration is optional - silently fail if not available
        })
      }
    } catch (error) {
      // Ignore service worker errors
    }
  })
} else if ('serviceWorker' in navigator && document.readyState === 'interactive') {
  try {
    navigator.serviceWorker.register('/sw.js').catch(() => {})
  } catch (error) {
    // Ignore service worker errors
  }
}
