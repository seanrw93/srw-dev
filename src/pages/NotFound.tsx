import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

export default function NotFound() {
  return (
    <main style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '24px', padding: '0 5%' }}>
      <Helmet>
        <title>Page introuvable | srwdev</title>
        <meta name="description" content="Cette page n'existe pas ou a été déplacée." />
        <meta name="robots" content="noindex" />
      </Helmet>
      <h1 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '3rem', color: 'var(--light-text)' }}>404</h1>
      <p style={{ color: 'var(--light-body)', fontSize: '1rem' }}>Cette page n&apos;existe pas.</p>
      <Link to="/" className="btn btn-outline">Retour à l&apos;accueil</Link>
    </main>
  )
}
