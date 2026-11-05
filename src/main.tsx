import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './global.css'
import App from './App.tsx'
import HomePage from './Pages/Home/index.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
        </Routes>
      </App>
    </BrowserRouter>
  </StrictMode>,
)
