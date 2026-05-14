import { Helmet } from 'react-helmet-async'
import Reveal from '../../components/ui/Reveal'
import TechSection from '../../components/ui/TechSection'

export default function CreationWeb() {
  return (
    <section className="section section--dark">
      <Helmet>
        <title>Création de Site Web pour Petite Entreprise — Vitrine Professionnelle | srwdev</title>
        <meta name="description" content="Je crée votre site vitrine professionnel, rapide et facile à gérer. Idéal pour artisans, commerçants et petites entreprises qui veulent être visibles en ligne. Devis gratuit sous 24h." />
        <meta property="og:title" content="srw-dev — Votre Site Vitrine Professionnel, Clé en Main" />
        <meta property="og:description" content="Je crée votre site vitrine professionnel, rapide et facile à gérer. Idéal pour artisans, commerçants et petites entreprises qui veulent être visibles en ligne. Devis gratuit sous 24h." />
        <link rel="canonical" href="https://srwdev.fr/services/creation-web" />
      </Helmet>
      <div className="section-inner">
        <div className="about-inner">
          <Reveal>
            <div>
              <span className="section-label">Création de sites web</span>
              <h1 className="section-title">Un site qui vous ressemble et qui convertit</h1>
              <p className="about-body">
                Votre site web est souvent le premier contact qu'un client potentiel a avec votre entreprise. Il doit inspirer confiance immédiatement, refléter votre identité, et guider le visiteur vers l'action que vous souhaitez. Je conçois des sites sur mesure, pensés pour vos objectifs réels, pas pour impressionner un jury de designers.
              </p>
              <p className="about-body">
                Chaque projet commence par une phase d'écoute. Je prends le temps de comprendre votre activité, votre clientèle, et ce qui vous différencie de vos concurrents. Cette compréhension guide toutes les décisions de conception, de la structure des pages au choix des couleurs, en passant par le ton des textes et la hiérarchie des informations.
              </p>
              <p className="about-body">
                Le résultat est un site rapide, responsive, et accessible, livré dans les délais convenus. Vous recevez un produit fini que vous pouvez gérer vous-même si vous le souhaitez, avec une documentation claire. Je reste disponible après la livraison pour toute question ou évolution future.
              </p>
            </div>
          </Reveal>
          <Reveal delay={30} className="service-page-img-wrap">
            <img
              src="/images/services/creation.webp"
              alt="Écran d'ordinateur affichant un site web moderne en cours de conception"
              width={600}
              height={400}
              loading="lazy"
              className="service-page-img"
            />
          </Reveal>
        </div>
        <TechSection />
      </div>
    </section>
  )
}
