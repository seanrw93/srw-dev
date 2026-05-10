import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import ServicePage from './components/layout/ServicePage'
import ScrollToTop from './components/ui/ScrollToTop'
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'

const CreationWeb = lazy(() => import('./pages/services/CreationWeb'))
const BoutiqueEnLigne = lazy(() => import('./pages/services/BoutiqueEnLigne'))
const PerformanceVitesse = lazy(() => import('./pages/services/PerformanceVitesse'))
const SeoTechnique = lazy(() => import('./pages/services/SeoTechnique'))
const MaintenanceSupport = lazy(() => import('./pages/services/MaintenanceSupport'))
const FaqPage = lazy(() => import('./pages/FaqPage'))

const fallback = <div style={{ height: '100vh', background: '#0e0c0a' }} />

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Suspense fallback={fallback}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicePage />}>
            <Route path="creation-site-web" element={<CreationWeb />} />
            <Route path="boutique-en-ligne" element={<BoutiqueEnLigne />} />
            <Route path="performance-vitesse" element={<PerformanceVitesse />} />
            <Route path="seo-technique" element={<SeoTechnique />} />
            <Route path="maintenance-support" element={<MaintenanceSupport />} />
          </Route>
          <Route path="/faq" element={<ServicePage />}>
            <Route index element={<FaqPage />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  )
}
