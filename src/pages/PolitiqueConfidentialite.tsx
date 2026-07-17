import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

export default function PolitiqueConfidentialite() {
  return (
    <section className="section section--dark">
      <Helmet>
        <title>Politique de confidentialité | srwdev</title>
        <meta name="description" content="Politique de confidentialité du site srwdev.fr — données collectées, finalités, durée de conservation et droits RGPD." />
        <link rel="canonical" href="https://srwdev.fr/politique-de-confidentialite" />
      </Helmet>
      <div className="section-inner">
        <h1 className="section-title">Politique de confidentialité</h1>

        <div className="legal-content">
          <p className="legal-updated">Dernière mise à jour : 17 juillet 2026</p>

          <div className="legal-block">
            <h2>Responsable du traitement</h2>
            <p>
              Sean Roennau-Wergen, entrepreneur individuel exerçant sous le nom commercial srw-dev (SIRET 993 006 964 00015), 92800 Puteaux, est responsable du traitement des données personnelles collectées sur ce site. Voir les <Link to="/mentions-legales">mentions légales</Link> pour les coordonnées complètes.
            </p>
          </div>

          <div className="legal-block">
            <h2>Données collectées</h2>

            <h3>Formulaire de contact</h3>
            <p>
              Lorsque vous utilisez le formulaire de contact, les données suivantes sont collectées : nom, adresse email, type de demande et message. Le formulaire est traité par le service tiers <a href="https://web3forms.com" target="_blank" rel="noreferrer">Web3Forms</a>, qui transmet votre message par email sans le stocker durablement sur ses serveurs au-delà du traitement de l'envoi. Ces données ne sont utilisées que pour vous répondre.
            </p>

            <h3>Mesure d'audience</h3>
            <p>
              Ce site utilise Vercel Web Analytics pour mesurer sa fréquentation de façon anonyme (pages consultées, référent, pays/région approximatifs, type d'appareil et navigateur). Cet outil ne dépose aucun cookie : les visiteurs sont identifiés par un hash technique généré à partir de la requête, automatiquement supprimé après 24 heures. Aucune donnée n'est croisée avec d'autres sites ou services, et aucune identification individuelle n'est possible.
            </p>

            <h3>Données techniques d'hébergement</h3>
            <p>
              Comme tout hébergeur, Vercel traite automatiquement certaines données techniques (adresse IP, journaux de requêtes) nécessaires au fonctionnement, à la sécurité et à la performance du site. Ces données sont gérées par Vercel en tant que sous-traitant technique.
            </p>
          </div>

          <div className="legal-block">
            <h2>Finalités et bases légales</h2>
            <table className="legal-table">
              <thead>
                <tr>
                  <th>Finalité</th>
                  <th>Base légale</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Répondre aux demandes de contact ou de devis</td>
                  <td>Exécution de mesures précontractuelles / intérêt légitime</td>
                </tr>
                <tr>
                  <td>Mesurer l'audience du site de façon anonyme</td>
                  <td>Intérêt légitime (statistiques anonymes, sans consentement requis)</td>
                </tr>
                <tr>
                  <td>Assurer la sécurité et le bon fonctionnement du site</td>
                  <td>Intérêt légitime de l'hébergeur</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="legal-block">
            <h2>Durée de conservation</h2>
            <ul>
              <li><strong>Messages du formulaire de contact :</strong> conservés dans ma messagerie le temps nécessaire au traitement de votre demande et, en cas de relation commerciale, jusqu'à 3 ans après le dernier contact.</li>
              <li><strong>Données d'audience (Vercel Analytics) :</strong> anonymes et agrégées, sans donnée individuelle conservée au-delà de 24 heures.</li>
              <li><strong>Journaux techniques d'hébergement :</strong> conservés par Vercel pour la durée nécessaire à la sécurité du service.</li>
            </ul>
          </div>

          <div className="legal-block">
            <h2>Destinataires des données</h2>
            <p>
              Vos données ne sont jamais vendues ni utilisées à des fins publicitaires. Elles peuvent être transmises aux seuls sous-traitants techniques nécessaires au fonctionnement du site :
            </p>
            <ul>
              <li><strong>Web3Forms</strong> — traitement et acheminement du formulaire de contact</li>
              <li><strong>Vercel Inc.</strong> — hébergement du site et mesure d'audience anonyme</li>
            </ul>
            <p>
              Ces prestataires étant basés aux États-Unis, un transfert de données hors de l'Union européenne peut avoir lieu. Il est encadré par les clauses contractuelles types de la Commission européenne ou un mécanisme équivalent garantissant un niveau de protection adapté.
            </p>
          </div>

          <div className="legal-block">
            <h2>Cookies</h2>
            <p>
              Ce site ne dépose aucun cookie non essentiel : ni cookie publicitaire, ni cookie de suivi. L'outil de mesure d'audience utilisé (Vercel Web Analytics) fonctionne sans cookie. En l'absence de cookie soumis à consentement, aucun bandeau de consentement n'est actuellement affiché. Si cela venait à changer (ajout d'un outil déposant des cookies non essentiels), cette politique serait mise à jour et un bandeau de consentement serait mis en place avant tout dépôt.
            </p>
          </div>

          <div className="legal-block">
            <h2>Vos droits (RGPD)</h2>
            <p>
              Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés, vous disposez des droits suivants sur vos données personnelles :
            </p>
            <ul>
              <li><strong>Droit d'accès :</strong> obtenir la confirmation que vos données sont traitées et en recevoir une copie.</li>
              <li><strong>Droit de rectification :</strong> corriger des données inexactes ou incomplètes.</li>
              <li><strong>Droit à l'effacement :</strong> demander la suppression de vos données.</li>
              <li><strong>Droit d'opposition :</strong> vous opposer au traitement de vos données pour un motif légitime.</li>
              <li><strong>Droit à la limitation :</strong> demander la suspension temporaire d'un traitement.</li>
              <li><strong>Droit à la portabilité :</strong> recevoir vos données dans un format structuré et lisible.</li>
            </ul>
            <p>
              Pour exercer l'un de ces droits, contactez-moi par email à <a href="mailto:srw.dev.freelance@protonmail.com">srw.dev.freelance@protonmail.com</a>. Une réponse vous sera apportée dans un délai maximum d'un mois.
            </p>
            <p>
              Si vous estimez, après m'avoir contacté, que vos droits ne sont pas respectés, vous pouvez introduire une réclamation auprès de la CNIL (Commission Nationale de l'Informatique et des Libertés) : <a href="https://www.cnil.fr" target="_blank" rel="noreferrer">www.cnil.fr</a>.
            </p>
          </div>

          <div className="legal-block">
            <h2>Sécurité</h2>
            <p>
              Le site est servi exclusivement en HTTPS. Des mesures techniques et organisationnelles raisonnables sont mises en œuvre par mes prestataires et moi-même pour protéger vos données contre tout accès, modification ou divulgation non autorisés.
            </p>
          </div>

          <div className="legal-block">
            <h2>Modification de cette politique</h2>
            <p>
              Cette politique de confidentialité peut être mise à jour, notamment en cas d'évolution du site ou de la réglementation. La date de dernière mise à jour figure en haut de cette page.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
