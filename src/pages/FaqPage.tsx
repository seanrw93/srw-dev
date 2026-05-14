import { Helmet } from 'react-helmet-async'
import { Accordion, AccordionItem } from '../components/ui/Accordion'

const FAQ = [
  {
    question: 'Combien coûte la création d\'un site web pour une petite entreprise ?',
    answer: 'Un site vitrine professionnel pour une petite entreprise démarre généralement à partir de 350€, selon le nombre de pages et les fonctionnalités souhaitées. Le prix reflète le temps passé à comprendre votre activité, concevoir le design, et livrer un site rapide et visible sur Google. Je propose un devis gratuit sous 24h, sans engagement.',
  },
  {
    question: 'Combien coûte une boutique en ligne ?',
    answer: 'Une boutique en ligne simple, facile à gérer au quotidien, est accessible à partir de 750€. Ce tarif inclut la mise en place du catalogue produits, le paiement sécurisé, et une interface d\'administration que vous pouvez utiliser sans formation technique. Le prix varie selon le nombre de produits et les options de livraison à intégrer.',
  },
  {
    question: 'Combien de temps faut-il pour créer un site web ?',
    answer: 'Un site vitrine est livré en 7 à 14 jours selon sa complexité. Une boutique en ligne demande généralement 2 à 3 semaines. Je vous donne une date de livraison précise dès le devis, et je la respecte.',
  },
  {
    question: 'Site vitrine ou boutique en ligne, comment choisir ?',
    answer: 'Si votre objectif est de présenter votre activité, rassurer vos clients et être trouvé sur Google, un site vitrine suffit. Si vous voulez vendre des produits directement en ligne et encaisser des paiements, il vous faut une boutique en ligne. En cas de doute, on en parle ensemble lors du devis gratuit.',
  },
  {
    question: 'Est-ce que je peux modifier mon site moi-même après la livraison ?',
    answer: 'Oui. Chaque site est livré avec une prise en main incluse, pour que vous puissiez mettre à jour vos textes, photos et informations sans aide extérieure. Si vous préférez déléguer ces mises à jour, je propose aussi un suivi mensuel facile à gérer.',
  },
  {
    question: 'Quelle est la différence entre un créateur de site gratuit et un site professionnel ?',
    answer: 'Les outils gratuits comme Wix ou WordPress.com permettent de lancer quelque chose rapidement, mais les résultats sont souvent lents, mal référencés sur Google, et difficiles à personnaliser. Un site professionnel est conçu pour votre activité spécifique, optimisé pour être visible sur Google dès le départ, et livré sans les limitations des templates génériques.',
  },
  {
    question: 'Mon site sera-t-il visible sur Google ?',
    answer: 'Oui. Chaque site que je livre est configuré avec les bases SEO indispensables : titres et descriptions optimisés, structure de pages claire, vitesse de chargement soignée, et compatibilité mobile. Vous partez sur de bonnes bases pour apparaître dans les résultats Google pour les recherches liées à votre activité.',
  },
  {
    question: 'Comment un site web peut-il m\'aider à avoir plus de clients ?',
    answer: 'Un site professionnel vous rend crédible aux yeux des clients qui vous cherchent en ligne avant de vous contacter. Il répond à leurs questions, leur donne confiance, et leur facilite le passage à l\'action, que ce soit appeler, envoyer un message ou passer commande. Pour une petite entreprise, c\'est souvent le meilleur outil pour transformer une recherche Google en client réel.',
  },
  {
    question: 'Que se passe-t-il après la livraison du site ?',
    answer: 'Vous recevez votre site finalisé, hébergé et en ligne, avec une courte prise en main pour savoir comment le gérer. Je reste disponible par message pour les questions des premiers jours. Si vous souhaitez un accompagnement sur la durée, je propose un suivi mensuel sans contrat long terme.',
  },
  {
    question: 'Pourquoi ne pas utiliser Wix, Squarespace, WordPress.com ou l\'IA ?',
    answer: 'Ces outils sont pratiques pour tester une idée, mais ils ont des limites importantes pour une entreprise qui veut paraître professionnelle : design générique, performances moyennes, SEO limité, et hébergement imposé par la plateforme, sans possibilité de partir sans tout reconstruire. Les sites générés par l\'IA souffrent des mêmes problèmes, avec en plus un résultat souvent impersonnel qui ne reflète pas vraiment votre activité. Un site sur mesure vous appartient entièrement, est hébergé où vous voulez, se charge plus vite, et donne une bien meilleure impression à vos futurs clients.',
  },
]

export default function FaqPage() {
  return (
    <section className="section section--dark">
      <Helmet>
        <title>Questions Fréquentes — Création de Site Web pour Petites Entreprises | srwdev</title>
        <meta name="description" content="Combien ça coûte ? Combien de temps ? Est-ce que je peux modifier mon site moi-même ? Toutes les réponses aux questions que se posent les petites entreprises avant de se lancer." />
        <meta property="og:title" content="srw-dev — Vos Questions sur la Création de Site Web" />
        <meta property="og:description" content="Combien ça coûte ? Combien de temps ? Est-ce que je peux modifier mon site moi-même ? Toutes les réponses aux questions que se posent les petites entreprises avant de se lancer." />
        <link rel="canonical" href="https://srwdev.fr/faq" />
      </Helmet>
      <div className="section-inner">
        <h1 className="section-title">Questions fréquentes</h1>
        <Accordion>
          {FAQ.map(({ question, answer }) => (
            <AccordionItem key={question} question={question}>
              <p>{answer}</p>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
