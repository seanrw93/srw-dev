import { Helmet } from 'react-helmet-async'
import Reveal from '../../components/ui/Reveal'

export default function PerformanceVitesse() {
  return (
    <section className="section section--dark">
      <Helmet>
        <title>Optimisation Performance & Vitesse de Site Web | srwdev</title>
        <meta name="description" content="Audit et optimisation de la vitesse de votre site web. Amélioration des Core Web Vitals, score Lighthouse, et temps de chargement. Résultats mesurables et documentés." />
        <meta property="og:title" content="Optimisation Performance & Vitesse de Site Web | srw.dev" />
        <meta property="og:description" content="Audit et optimisation de la vitesse de votre site web. Amélioration des Core Web Vitals, score Lighthouse, et temps de chargement. Résultats mesurables et documentés." />
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
                L'optimisation couvre l'ensemble de la chaîne technique : compression et conversion des images au format WebP, mise en cache intelligente, réduction du JavaScript inutile, chargement différé des ressources non critiques, et amélioration des Core Web Vitals pour satisfaire les critères de Google.
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
