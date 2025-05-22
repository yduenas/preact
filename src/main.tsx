// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import './index.css'
// import App from './App.tsx'
import Home from './pages/Home/index.tsx'
import Cart from './pages/Cart/index.tsx'
import ProductDetail from './pages/ProductDetail/index.tsx'

createRoot(document.getElementById('root')!).render(
  // <StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={ <Home/>} />
      <Route path="/cart" element={ <Cart />} />
      <Route path="/producto/:CO_EMPR/:CO_DEPA/:CO_AREA" element={ <ProductDetail />} />
    </Routes>
  </BrowserRouter>
  // </StrictMode>,
)
