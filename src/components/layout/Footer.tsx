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
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://calendly.com" target="_blank" rel="noreferrer">Calendly</a>
          <a href="#">Mentions légales</a>
          <a href="#">Politique de confidentialité</a>
        </div>
      </div>
    </footer>
  )
}
