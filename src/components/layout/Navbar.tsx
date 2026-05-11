import { useState, useRef, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const SERVICE_LINKS = [
  { to: '/services/creation-site-web', label: 'Création de sites web' },
  { to: '/services/boutique-en-ligne', label: 'Boutique en ligne' },
  { to: '/services/performance-vitesse', label: 'Performance & vitesse' },
  { to: '/services/seo-technique', label: 'SEO technique' },
  { to: '/services/maintenance-support', label: 'Maintenance & support' },
]

const NAV_LINKS = [
  { href: '#tarifs', label: 'Tarifs' },
  { href: '#about', label: 'À propos' },
  { href: '#cases', label: 'Études de cas' },
  { href: '#contact', label: 'Contact' },
]

const STATIC_LINKS = [
  { to: '/faq', label: 'FAQ' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const mobileSubmenuRef = useRef<HTMLDivElement>(null)
  const { pathname } = useLocation()

  const handleServicesEnter = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setServicesOpen(true)
  }

  const handleServicesLeave = () => {
    closeTimer.current = setTimeout(() => setServicesOpen(false), 150)
  }

  useEffect(() => {
    const el = mobileSubmenuRef.current
    if (!el) return
    el.style.maxHeight = mobileServicesOpen ? el.scrollHeight + 'px' : '0'
  }, [mobileServicesOpen])

  const close = () => {
    setOpen(false)
    setMobileServicesOpen(false)
  }

  const isHome = pathname === '/'
  const anchorHref = (hash: string) => isHome ? hash : `/${hash}`

  return (
    <>
      <nav className="nav" aria-label="Navigation principale">
        <div className="nav-inner">
          <Link to="/" className="nav-logo">
            <span>srw</span>dev
          </Link>

          <ul className="nav-links">
            <li
              className="nav-item-services"
              onMouseEnter={handleServicesEnter}
              onMouseLeave={handleServicesLeave}
            >
              <a href={anchorHref('#services')} className="nav-services-trigger">
                Services
                <svg className={`nav-chevron${servicesOpen ? ' nav-chevron--open' : ''}`} width="10" height="6" viewBox="0 0 10 6" fill="none" aria-hidden="true">
                  <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <div className={`nav-submenu${servicesOpen ? ' nav-submenu--open' : ''}`}>
                {SERVICE_LINKS.map(({ to, label }) => (
                  <Link key={to} to={to} className="nav-submenu-item">{label}</Link>
                ))}
              </div>
            </li>
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <a href={anchorHref(href)}>{label}</a>
              </li>
            ))}
            {STATIC_LINKS.map(({ to, label }) => (
              <li key={to}>
                <Link to={to}>{label}</Link>
              </li>
            ))}
          </ul>

          <div className="nav-actions">
            <span className="nav-badge">● Disponible pour missions</span>
            <a href={anchorHref('#contact')} className="btn btn-primary">
              Travailler avec moi
            </a>
          </div>

          <button
            className={`hamburger${open ? ' hamburger--open' : ''}`}
            onClick={() => setOpen(v => !v)}
            aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </button>
        </div>
      </nav>

      <div id="mobile-menu" className={`mobile-menu${open ? ' mobile-menu--open' : ''}`} aria-hidden={!open}>
        <button
          className="mobile-menu-services-btn"
          onClick={() => setMobileServicesOpen(v => !v)}
          aria-expanded={mobileServicesOpen}
          aria-controls="mobile-submenu"
        >
          Services
          <svg className={`nav-chevron${mobileServicesOpen ? ' nav-chevron--open' : ''}`} width="10" height="6" viewBox="0 0 10 6" fill="none" aria-hidden="true">
            <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <div id="mobile-submenu" ref={mobileSubmenuRef} className="mobile-submenu">
          {SERVICE_LINKS.map(({ to, label }) => (
            <Link key={to} to={to} className="mobile-submenu-item" onClick={close}>{label}</Link>
          ))}
        </div>
        {NAV_LINKS.map(({ href, label }) => (
          <a key={href} href={anchorHref(href)} onClick={close}>{label}</a>
        ))}
        {STATIC_LINKS.map(({ to, label }) => (
          <Link key={to} to={to} onClick={close}>{label}</Link>
        ))}
        <a href={anchorHref('#contact')} onClick={close} style={{ color: 'var(--accent)' }}>
          Travailler avec moi <span aria-hidden="true">→</span>
        </a>
      </div>
    </>
  )
}
