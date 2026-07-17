import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

export default function MentionsLegales() {
  return (
    <section className="section section--dark">
      <Helmet>
        <title>Mentions légales | srwdev</title>
        <meta name="description" content="Mentions légales du site srwdev.fr — éditeur, hébergeur et directeur de publication." />
        <link rel="canonical" href="https://srwdev.fr/mentions-legales" />
      </Helmet>
      <div className="section-inner">
        <h1 className="section-title">Mentions légales</h1>

        <div className="legal-content">
          <p className="legal-updated">Dernière mise à jour : 17 juillet 2026</p>

          <div className="legal-block">
            <h2>Éditeur du site</h2>
            <div className="legal-identity">
              <dl>
                <dt>Nom</dt>
                <dd>Sean Roennau-Wergen</dd>

                <dt>Statut</dt>
                <dd>Entrepreneur individuel (EI)</dd>

                <dt>Nom commercial</dt>
                <dd>srw-dev</dd>

                <dt>SIRET</dt>
                <dd>993 006 964 00015</dd>

                <dt>Activité</dt>
                <dd>Programmation informatique / Conseil en développement informatique (Code APE 6201Z)</dd>

                <dt>Adresse</dt>
                <dd>92800 Puteaux, Île-de-France, France</dd>

                <dt>Email</dt>
                <dd><a href="mailto:srw.dev.freelance@protonmail.com">srw.dev.freelance@protonmail.com</a></dd>
              </dl>
            </div>
            <p style={{ marginTop: '14px' }}>
              En tant qu'entrepreneur individuel, l'adresse email ci-dessus permet de me contacter directement pour toute question relative au site ou à mon activité.
            </p>
          </div>

          <div className="legal-block">
            <h2>Directeur de la publication</h2>
            <p>Sean Roennau-Wergen, en qualité d'éditeur du site.</p>
          </div>

          <div className="legal-block">
            <h2>Hébergement</h2>
            <p>
              Le site srwdev.fr est hébergé par :<br />
              Vercel Inc.<br />
              340 S Lemon Ave #4133<br />
              Walnut, CA 91789, États-Unis<br />
              <a href="https://vercel.com" target="_blank" rel="noreferrer">vercel.com</a>
            </p>
            <p>
              Le nom de domaine srwdev.fr est enregistré et géré auprès d'OVHcloud (OVH SAS, 2 rue Kellermann, 59100 Roubaix, France).
            </p>
          </div>

          <div className="legal-block">
            <h2>Propriété intellectuelle</h2>
            <p>
              L'ensemble des contenus présents sur ce site (textes, visuels, logo, structure, code source) est la propriété exclusive de Sean Roennau-Wergen, sauf mention contraire. Toute reproduction, représentation, modification ou exploitation, totale ou partielle, sans autorisation préalable est interdite.
            </p>
          </div>

          <div className="legal-block">
            <h2>Limitation de responsabilité</h2>
            <p>
              Les informations diffusées sur ce site le sont à titre indicatif. Elles peuvent être modifiées à tout moment et sans préavis. Malgré le soin apporté à leur exactitude, l'éditeur ne saurait être tenu responsable des erreurs, omissions ou de l'indisponibilité temporaire du site, notamment en cas de maintenance ou de panne indépendante de sa volonté.
            </p>
          </div>

          <div className="legal-block">
            <h2>Liens hypertextes</h2>
            <p>
              Ce site peut contenir des liens vers des sites tiers (LinkedIn, GitHub, etc.). L'éditeur n'exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu ou à leurs pratiques en matière de données personnelles.
            </p>
          </div>

          <div className="legal-block">
            <h2>Droit applicable</h2>
            <p>
              Les présentes mentions légales sont soumises au droit français. En cas de litige, et à défaut de résolution amiable, les tribunaux français seront seuls compétents.
            </p>
          </div>

          <div className="legal-block">
            <h2>Données personnelles</h2>
            <p>
              Pour toute information sur le traitement de vos données personnelles, consultez la <Link to="/politique-de-confidentialite">politique de confidentialité</Link>.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
