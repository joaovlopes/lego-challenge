import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './components/home/home.tsx'
import Header from './components/header/header.tsx'
import Footer from './components/footer/footer.tsx'
import './styles/global.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header />
    <Home />
    <Footer />
  </React.StrictMode>
)
