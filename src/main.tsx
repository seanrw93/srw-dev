import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import './styles/index.css'
import App from './App'

const root = document.getElementById('root')!
const app = (
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>
)

// Hydrate pre-rendered HTML in production, fresh render in dev
if (root.innerHTML) {
  hydrateRoot(root, app)
} else {
  createRoot(root).render(app)
}
