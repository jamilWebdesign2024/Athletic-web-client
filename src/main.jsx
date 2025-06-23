import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router'
import router from './Router/Router.jsx'
import AuthProvider from './Contexts/AuthProvider.jsx'
import { Toaster } from 'react-hot-toast'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
      <Toaster
      position="top-right"
      toastOptions={{
        success: {
          style: {
            background: 'linear-gradient(135deg, #3b82f6, #06b6d4)', // Blue-cyan gradient
            color: 'white',
            fontWeight: '500',
            borderRadius: '10px',
            padding: '12px 16px',
          },
          iconTheme: {
            primary: '#ffffff',
            secondary: '#06b6d4',
          },
        },
        error: {
          style: {
            background: 'linear-gradient(135deg, #ef4444, #f97316)', // Red-orange gradient
            color: 'white',
            fontWeight: '500',
            borderRadius: '10px',
            padding: '12px 16px',
          },
          iconTheme: {
            primary: '#ffffff',
            secondary: '#f97316',
          },
        },
      }}
/>
    </AuthProvider>
  </StrictMode>,
)
