import { Helmet } from 'react-helmet-async'
import Reveal from '../../components/ui/Reveal'

export default function PerformanceVitesse() {
  return (
    <section className="section section--dark">
      <Helmet>
        <title>Site Web Rapide & Visible sur Google | srwdev</title>
        <meta name="description" content="Un site lent fait fuir vos clients et nuit à votre position sur Google. J'optimise la vitesse de votre site pour que vous soyez mieux référencé et que vos visiteurs restent. Résultats mesurables." />
        <meta property="og:title" content="srw-dev — Site Web Rapide & Visible sur Google" />
        <meta property="og:description" content="Un site lent fait fuir vos clients et nuit à votre position sur Google. J'optimise la vitesse de votre site pour que vous soyez mieux référencé et que vos visiteurs restent. Résultats mesurables." />
        <link rel="canonical" href="https://srwdev.fr/services/performance-vitesse" />
      </Helmet>
      <div className="section-inner">
        <div className="about-inner">
          <Reveal>
            <div>
              <span className="section-label">Performance & vitesse</span>
              <h1 className="section-title">Un site lent, c'est un client perdu</h1>
              <p className="about-body">
                Google pénalise les sites lents dans ses résultats de recherche, et les utilisateurs abandonnent une page qui met plus de trois secondes à charger. J'audite votre site en profondeur avec Lighthouse et WebPageTest pour identifier précisément ce qui ralentit votre expérience utilisateur et nuit à votre référencement.
              </p>
              <p className="about-body">
                L'optimisation couvre l'ensemble de la chaîne : compression et conversion des images, mise en cache intelligente, suppression du code inutile, chargement différé des ressources non critiques — pour que votre site soit rapide dès la première visite et bien positionné sur Google.
              </p>
              <p className="about-body">
                À la fin de l'intervention, vous recevez un rapport détaillé avec les actions effectuées, les scores Lighthouse avant et après, et les recommandations pour maintenir ces performances dans la durée. Les résultats sont mesurables, documentés, et durables.
              </p>
            </div>
          </Reveal>
          <Reveal delay={30} className="service-page-img-wrap">
            <img
              src="/images/services/performance.webp"
              alt="Tableau de bord Lighthouse montrant un score de performance élevé"
              width={600}
              height={400}
              loading="lazy"
              className="service-page-img"
            />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
