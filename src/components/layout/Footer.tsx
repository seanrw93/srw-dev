import { Link } from 'react-router-dom'
import { FiLinkedin, FiGithub } from 'react-icons/fi'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <address style={{ fontStyle: 'normal' }}>
          <div className="footer-brand">Sean Roennau-Wergen</div>
          <div className="footer-tagline">Développeur Web Freelance & Expert Optimisation Web</div>
          <div className="footer-tagline">Puteaux, Île-de-France · <a href="mailto:srw.dev.freelance@protonmail.com">srw.dev.freelance@protonmail.com</a></div>
          <div className="footer-copy">© {new Date().getFullYear()} Sean Roennau-Wergen</div>
        </address>
        <div className="footer-links">
          <a href="https://www.linkedin.com/in/sean-roennau-wergen/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="footer-icon"><FiLinkedin /></a>
          <a href="https://github.com/seanrw93" target="_blank" rel="noreferrer" aria-label="GitHub" className="footer-icon"><FiGithub /></a>
          <Link to="/mentions-legales">Mentions légales</Link>
          <Link to="/politique-de-confidentialite">Politique de confidentialité</Link>
        </div>
      </div>
    </footer>
  )
}
