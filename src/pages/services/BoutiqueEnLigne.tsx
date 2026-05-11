import { Helmet } from 'react-helmet-async'
import Reveal from '../../components/ui/Reveal'
import PlatformCards from '../../components/ui/PlatformCards'

export default function BoutiqueEnLigne() {
  return (
    <section className="section section--dark">
      <Helmet>
        <title>Création Boutique en Ligne WooCommerce & Shopify | srwdev</title>
        <meta name="description" content="Création de boutiques en ligne performantes et faciles à gérer. Intégration WooCommerce et Shopify, tunnel d'achat optimisé, paiement sécurisé. Île-de-France." />
        <meta property="og:title" content="Création Boutique en Ligne WooCommerce & Shopify | srw.dev" />
        <meta property="og:description" content="Création de boutiques en ligne performantes et faciles à gérer. Intégration WooCommerce et Shopify, tunnel d'achat optimisé, paiement sécurisé. Île-de-France." />
        <link rel="canonical" href="https://srwdev.fr/services/boutique-en-ligne" />
      </Helmet>
      <div className="section-inner">
        <div className="about-inner">
          <Reveal>
            <div>
              <span className="section-label">Boutique en ligne</span>
              <h1 className="section-title">Vendez en ligne sans vous perdre dans la technique</h1>
              <p className="about-body">
                Créer une boutique en ligne ne devrait pas être une source de stress. Je construis des e-commerces simples à gérer au quotidien, avec une interface d'administration claire, un tunnel d'achat fluide, et des performances optimisées pour réduire l'abandon de panier et augmenter vos conversions.
              </p>
              <p className="about-body">
                Chaque boutique est conçue en tenant compte de votre catalogue, de vos modes de livraison, et de votre clientèle cible. Je m'occupe de l'intégration des paiements, de la gestion des stocks, et des pages produits, pour que vous puissiez vous concentrer sur votre business sans toucher une ligne de code.
              </p>
              <p className="about-body">
                La performance est au coeur de chaque boutique que je livre. Un site e-commerce lent perd des clients à chaque seconde de chargement. J'optimise les images, le code, et l'architecture pour garantir une expérience d'achat fluide sur mobile comme sur desktop, dès le premier jour.
              </p>
            </div>
          </Reveal>
          <Reveal delay={30} className="service-page-img-wrap">
            <img
              src="/images/services/ecommerce.webp"
              alt="Boutique en ligne avec produits et panier d'achat"
              width={600}
              height={400}
              loading="lazy"
              className="service-page-img"
            />
          </Reveal>
        </div>
        <PlatformCards />
      </div>
    </section>
  )
}
