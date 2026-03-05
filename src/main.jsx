import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './css/root.css'
import './css/scroll.css'
import './css/nav.css'
import PaginaMonkeys from './PaginaMonkeys.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PaginaMonkeys />
  </StrictMode>,
)
