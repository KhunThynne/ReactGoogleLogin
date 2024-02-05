import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import Footer from './footer/Footer.tsx'
import { GoogleOAuthProvider } from '@react-oauth/google'

ReactDOM.createRoot(document.getElementById('root')!).render(

  <GoogleOAuthProvider clientId="669218354063-a8e9l709lup91qj2ml7n8ch07piqemt5.apps.googleusercontent.com">
  <React.StrictMode>
    <App />
    <Footer />
  </React.StrictMode></GoogleOAuthProvider>
)
