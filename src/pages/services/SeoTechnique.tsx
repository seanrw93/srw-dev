import Reveal from '../../components/ui/Reveal'

export default function SeoTechnique() {
  return (
    <section className="section section--dark">
      <div className="section-inner">
        <div className="about-inner">
          <Reveal>
            <div>
              <span className="section-label">SEO technique</span>
              <h1 className="section-title">Soyez trouvé par ceux qui cherchent ce que vous faites</h1>
              <p className="about-body">
                Le SEO technique est le socle sur lequel repose votre visibilité sur Google. Sans une structure correcte, même le meilleur contenu reste invisible. J'interviens sur l'architecture de votre site, le balisage sémantique, la vitesse de chargement, les balises meta, et l'indexation pour poser des bases solides.
              </p>
              <p className="about-body">
                Je m'occupe des éléments que la plupart des agences négligent : les données structurées, le maillage interne, la gestion des redirections, les erreurs d'exploration, et la compatibilité mobile. Ces détails font la différence entre un site qui stagne et un site qui progresse régulièrement dans les résultats.
              </p>
              <p className="about-body">
                Chaque intervention se termine par un audit complet remis en format lisible, avec une liste de priorités claires. Vous comprenez ce qui a été fait et pourquoi, sans jargon inutile. Le SEO technique ne produit pas des résultats du jour au lendemain, mais les fondations que je pose sont durables.
              </p>
            </div>
          </Reveal>
          <Reveal delay={30} className="service-page-img-wrap">
            <img
              src="/images/services/seo.webp"
              alt="Résultats de recherche Google avec un site bien positionné"
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
