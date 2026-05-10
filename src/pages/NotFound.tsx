import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <main style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '24px', padding: '0 5%' }}>
      <h1 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '3rem', color: 'var(--light-text)' }}>404</h1>
      <p style={{ color: 'var(--light-body)', fontSize: '1rem' }}>Cette page n&apos;existe pas.</p>
      <Link to="/" className="btn btn-outline">Retour à l&apos;accueil</Link>
    </main>
  )
}
