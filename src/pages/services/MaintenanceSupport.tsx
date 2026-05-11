import { Helmet } from 'react-helmet-async'
import Reveal from '../../components/ui/Reveal'

export default function MaintenanceSupport() {
  return (
    <section className="section section--dark">
      <Helmet>
        <title>Maintenance & Support de Site Web Freelance | srwdev</title>
        <meta name="description" content="Maintenance, mises à jour et support technique pour votre site web. Un interlocuteur unique, disponible sous 24h. Sans contrat long terme. Partout en France." />
        <meta property="og:title" content="Maintenance & Support de Site Web Freelance | srw.dev" />
        <meta property="og:description" content="Maintenance, mises à jour et support technique pour votre site web. Un interlocuteur unique, disponible sous 24h. Sans contrat long terme. Partout en France." />
        <link rel="canonical" href="https://srwdev.fr/services/maintenance-support" />
      </Helmet>
      <div className="section-inner">
        <div className="about-inner">
          <Reveal>
            <div>
              <span className="section-label">Maintenance & support</span>
              <h1 className="section-title">Un interlocuteur unique, disponible après la livraison</h1>
              <p className="about-body">
                La mise en ligne d'un site n'est pas une fin, c'est un début. Les technologies évoluent, les contenus changent, et des problèmes imprévus peuvent survenir. Je propose un accompagnement continu pour que votre site reste à jour, sécurisé, et performant dans la durée, sans que vous ayez à gérer la technique.
              </p>
              <p className="about-body">
                Les interventions courantes incluent les mises à jour de contenu, l'ajout de nouvelles pages ou fonctionnalités, la correction de bugs, et la surveillance des performances. Vous avez un interlocuteur direct, pas un système de tickets anonyme. Je réponds dans les 24 heures et je vous tiens informé à chaque étape.
              </p>
              <p className="about-body">
                Que votre site soit un projet que j'ai développé ou un projet existant repris en maintenance, je m'adapte à votre contexte. Pas de contrat long terme imposé, pas de frais cachés. Vous payez pour ce dont vous avez besoin, quand vous en avez besoin.
              </p>
            </div>
          </Reveal>
          <Reveal delay={30} className="service-page-img-wrap">
            <img
              src="/images/services/support.webp"
              alt="Développeur apportant un support technique à un client"
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
