import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router'
import { HelmetProvider, HelmetServerState } from 'react-helmet-async'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import ServicePage from './components/layout/ServicePage'
import ScrollToTop from './components/ui/ScrollToTop'
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'
import FaqPage from './pages/FaqPage'
import CreationWeb from './pages/services/CreationWeb'
import BoutiqueEnLigne from './pages/services/BoutiqueEnLigne'
import PerformanceVitesse from './pages/services/PerformanceVitesse'
import SeoTechnique from './pages/services/SeoTechnique'
import MaintenanceSupport from './pages/services/MaintenanceSupport'

// Eager (non-lazy) version of App for SSR — renderToString doesn't support Suspense/lazy
function AppSSR() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
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
      <Footer />
    </>
  )
}

export function render(url: string) {
  const helmetContext: { helmet?: HelmetServerState } = {}

  const html = renderToString(
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={url}>
        <AppSSR />
      </StaticRouter>
    </HelmetProvider>
  )

  const { helmet } = helmetContext

  return { html, helmet }
}
