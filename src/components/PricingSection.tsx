import { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Code, Smartphone, Palette, MapPin, Check, ArrowRight, Sparkles } from 'lucide-react';

const servicesData = {
  web: {
    icon: Code,
    title: 'Création & Développement Web',
    services: [
      { name: 'Site vitrine (5 pages)', desc: 'Design personnalisé, responsive, formulaire de contact. Hébergement non inclus.', price: '180 000 – 350 000' },
      { name: 'Landing page', desc: 'Page unique orientée conversion. Livraison 5 jours.', price: '80 000 – 150 000' },
      { name: 'Site e-commerce', desc: 'Boutique en ligne, catalogue, panier, paiement en ligne.', price: '350 000 – 700 000' },
      { name: 'Application web sur mesure', desc: 'Développement métier sur cahier des charges.', price: 'Sur devis' },
      { name: 'Maintenance & mises à jour', desc: 'Corrections, contenus, sécurité. Par mois.', price: '40 000' },
    ]
  },
  social: {
    icon: Smartphone,
    title: 'Réseaux Sociaux & Marketing Digital',
    services: [
      { name: 'Création / optimisation page Facebook', desc: 'Configuration complète, visuels couverture, CTA.', price: '45 000' },
      { name: 'Config. WhatsApp Business', desc: 'Profil, catalogue, messages automatiques accueil/absence.', price: '30 000' },
      { name: 'Création contenu (par publication)', desc: 'Visuel pro + texte optimisé par réseau.', price: '8 000 – 15 000' },
      { name: 'Gestion Facebook Ads', desc: 'Création, paramétrage, suivi campagne. Budget non inclus.', price: '60 000' },
      { name: 'Rapport de perf. mensuel', desc: 'Analyse résultats avec recommandations.', price: '25 000' },
    ]
  },
  branding: {
    icon: Palette,
    title: 'Identité Visuelle & Branding',
    services: [
      { name: 'Logo professionnel', desc: '3 propositions, 2 révisions. Fichiers HD (PNG, SVG, PDF).', price: '80 000 – 150 000' },
      { name: 'Charte graphique complète', desc: 'Logo + palette + typos + règles d\'usage. Livret incl.', price: '180 000 – 300 000' },
      { name: 'Supports de com.', desc: 'Carte visite, flyer, kakémono, bannière. Par support.', price: '25 000 – 60 000' },
    ]
  },
  local: {
    icon: MapPin,
    title: 'Visibilité Locale',
    services: [
      { name: 'Google Business (création/optim)', desc: 'Configuration complète (photos, horaires, desc.).', price: '40 000' },
      { name: 'Collecte d\'avis clients', desc: 'Procédure automatisée ou semi-automatisée.', price: '20 000' },
      { name: 'SEO local', desc: 'Référencement naturel local. Suivi mensuel.', price: '50 000' },
    ]
  }
};

const packs = [
  {
    name: 'STARTER',
    price: '75 000',
    tag: 'Démarrer',
    desc: 'L\'essentiel pour lancer votre présence digitale.',
    features: [
      { included: true, text: 'Optimisation page Facebook' },
      { included: true, text: 'Configuration WhatsApp Business' },
      { included: true, text: '8 publications / mois' },
      { included: true, text: 'Messages automatiques WhatsApp' },
      { included: false, text: 'Calendrier éditorial' },
      { included: false, text: 'Stories / Reels' },
      { included: false, text: 'Gestion Facebook Ads' },
      { included: false, text: 'Rapport de performance' },
      { included: false, text: 'Interlocuteur dédié' },
    ],
    responseTime: '48h'
  },
  {
    name: 'STANDARD',
    price: '120 000',
    tag: 'Recommandé',
    featured: true,
    desc: 'La formule complète pour générer des clients régulièrement.',
    features: [
      { included: true, text: 'Optimisation page Facebook' },
      { included: true, text: 'Configuration WhatsApp Business' },
      { included: true, text: '15 publications / mois' },
      { included: true, text: 'Calendrier éditorial mensuel' },
      { included: true, text: '4 Stories / Reels / mois' },
      { included: true, text: 'Gestion campagnes Facebook Ads' },
      { included: true, text: 'Création visuels publicitaires' },
      { included: true, text: 'Ciblage & optimisation campagnes' },
      { included: true, text: 'Création fiche Google Business' },
      { included: true, text: 'Collecte d\'avis clients' },
      { included: true, text: 'Messages automatiques WhatsApp' },
      { included: true, text: 'Scripts de réponse client' },
      { included: true, text: 'Rapport de performance mensuel' },
      { included: true, text: 'Interlocuteur dédié' },
      { included: true, text: '1 ajustement inclus / mois', note: 'inclus' },
      { included: false, text: 'A/B testing publicités' },
      { included: false, text: 'Campagnes multi-objectifs' },
      { included: false, text: 'SEO local' },
    ],
    responseTime: '24h'
  },
  {
    name: 'PREMIUM',
    price: '180 000',
    tag: 'Croissance totale',
    desc: 'Pour les entreprises qui veulent dominer leur marché local.',
    features: [
      { included: true, text: 'Optimisation page Facebook' },
      { included: true, text: 'Configuration WhatsApp Business' },
      { included: true, text: '20+ publications / mois' },
      { included: true, text: 'Calendrier éditorial mensuel' },
      { included: true, text: '8 Stories / Reels / mois' },
      { included: true, text: 'Gestion campagnes Facebook Ads' },
      { included: true, text: 'Création visuels publicitaires' },
      { included: true, text: 'Ciblage & optimisation campagnes' },
      { included: true, text: 'A/B testing des publicités' },
      { included: true, text: 'Campagnes multi-objectifs' },
      { included: true, text: 'Création fiche Google Business' },
      { included: true, text: 'Optimisation SEO local' },
      { included: true, text: 'Collecte d\'avis clients' },
      { included: true, text: 'Messages automatiques WhatsApp' },
      { included: true, text: 'Scripts de réponse client' },
      { included: true, text: 'Rapport de performance mensuel' },
      { included: true, text: 'Rapport détaillé + recommandations' },
      { included: true, text: 'Réunion de suivi mensuelle' },
      { included: true, text: 'Interlocuteur dédié' },
      { included: true, text: 'Ajustements illimités / mois' },
    ],
    responseTime: '12h'
  }
];

const comparisonData = [
  { category: 'Réseaux Sociaux', features: [
    { name: 'Optimisation page Facebook', starter: true, standard: true, premium: true },
    { name: 'Configuration WhatsApp Business', starter: true, standard: true, premium: true },
    { name: 'Publications / mois', starter: '8', standard: '15', premium: '20+' },
    { name: 'Calendrier éditorial', starter: false, standard: true, premium: true },
    { name: 'Stories / Reels / mois', starter: '-', standard: '4', premium: '8' },
  ]},
  { category: 'Marketing Digital', features: [
    { name: 'Gestion Facebook Ads', starter: false, standard: true, premium: true },
    { name: 'Création visuels publicitaires', starter: false, standard: true, premium: true },
    { name: 'Ciblage & optimisation', starter: false, standard: true, premium: true },
    { name: 'A/B testing publicités', starter: false, standard: false, premium: true },
    { name: 'Campagnes multi-objectifs', starter: false, standard: false, premium: true },
  ]},
  { category: 'Visibilité Locale', features: [
    { name: 'Fiche Google Business', starter: false, standard: true, premium: true },
    { name: 'SEO local', starter: false, standard: false, premium: true },
    { name: 'Collecte d\'avis clients', starter: false, standard: true, premium: true },
  ]},
  { category: 'Conversion & Suivi', features: [
    { name: 'Messages automatiques WhatsApp', starter: true, standard: true, premium: true },
    { name: 'Scripts de réponse client', starter: false, standard: true, premium: true },
    { name: 'Rapport de performance mensuel', starter: false, standard: true, premium: true },
    { name: 'Rapport détaillé + recommandations', starter: false, standard: false, premium: true },
    { name: 'Réunion de suivi mensuelle', starter: false, standard: false, premium: true },
  ]},
  { category: 'Support', features: [
    { name: 'Interlocuteur dédié', starter: false, standard: true, premium: true },
    { name: 'Délai de réponse garanti', starter: '48h', standard: '24h', premium: '12h' },
    { name: 'Ajustements en cours de mois', starter: '-', standard: '1 inclus', premium: 'Illimité' },
  ]},
];

const budgetData = [
  { amount: '30 000', range: '5 000 – 15 000', desc: 'Quelques contacts par semaine. Idéal pour démarrer.', icon: '💸' },
  { amount: '50 000 – 100 000', range: '20 000 – 60 000', desc: 'Flux régulier de prospects. Niveau conseillé pour générer des clients chaque semaine.', icon: '🔥', recommended: true },
  { amount: '100 000+', range: '60 000+', desc: 'Forte notoriété locale et génération de leads significative sur Abidjan et environs.', icon: '🚀' },
];

export default function PricingSection() {
  const [activeTab, setActiveTab] = useState<'services' | 'packs'>('packs');

  return (
    <section className="py-24 px-6 bg-white" id="tarifs">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#F3F4F6] text-sm text-[#6B7280] font-medium mb-6">
            ✦ NEDA · Grille Tarifaire 2026
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A0A0A] mb-4" style={{ fontFamily: "'Bricolage Grotesque', 'DM Sans', sans-serif" }}>
            Des tarifs clairs,<br />des résultats mesurables.
          </h2>
          <p className="text-[#6B7280] text-lg max-w-2xl mx-auto">
            Services à la carte ou packs mensuels — sans engagement.
            Tous les tarifs sont en FCFA HT, valables à partir de janvier 2026.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex bg-[#F3F4F6] rounded-full p-1">
            <button
              onClick={() => setActiveTab('services')}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                activeTab === 'services'
                  ? 'bg-[#0A0A0A] text-white'
                  : 'text-[#6B7280] hover:text-[#0A0A0A]'
              }`}
            >
              Services individuels
            </button>
            <button
              onClick={() => setActiveTab('packs')}
              className={`relative px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                activeTab === 'packs'
                  ? 'bg-[#0A0A0A] text-white'
                  : 'text-[#6B7280] hover:text-[#0A0A0A]'
              }`}
            >
              Packs mensuels
              <span className="absolute -top-1 -right-1 px-2 py-0.5 rounded-full bg-[#aaff4e] text-[#0A0A0A] text-[10px] font-bold">
                -40%
              </span>
            </button>
          </div>
        </motion.div>

        {activeTab === 'services' ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-12"
          >
            {Object.entries(servicesData).map(([key, category], idx) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-[#aaff4e]/10 flex items-center justify-center">
                    <category.icon className="w-5 h-5 text-[#aaff4e]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0A0A0A]">{category.title}</h3>
                </div>
                <table className="service-table">
                  <thead>
                    <tr>
                      <th>Service</th>
                      <th>Description</th>
                      <th>Tarif</th>
                    </tr>
                  </thead>
                  <tbody>
                    {category.services.map((service, i) => (
                      <tr key={i}>
                        <td>{service.name}</td>
                        <td>{service.desc}</td>
                        <td className={service.price === 'Sur devis' ? 'italic text-[#6B7280]' : ''}>
                          {service.price} {service.price !== 'Sur devis' && 'FCFA'}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-16"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {packs.map((pack, i) => (
                <motion.div
                  key={pack.name}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`relative rounded-2xl p-8 flex flex-col ${
                    pack.featured
                      ? 'bg-gradient-to-br from-[#aaff4e]/20 to-[#9a6bff]/20 border-2 border-[#aaff4e] scale-[1.02]'
                      : 'bg-[#F9FAFB] border border-[#E5E7EB]'
                  }`}
                >
                  {pack.featured && (
                    <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-[#aaff4e] text-white text-xs font-bold">
                      ⭐ {pack.tag}
                    </span>
                  )}
                  {!pack.featured && (
                    <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-[#F3F4F6] text-[#6B7280] text-xs font-medium">
                      {pack.tag}
                    </span>
                  )}
                  
                  <div className="mb-6">
                    <h3 className="text-lg font-bold text-[#0A0A0A] mb-2">{pack.name}</h3>
                    <p className="text-sm text-[#6B7280]">{pack.desc}</p>
                  </div>
                  
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-[#0A0A0A]">{pack.price}</span>
                    <span className="text-[#6B7280]"> / mois</span>
                  </div>
                  
                  <div className="flex-1 space-y-3 mb-6 text-sm">
                    {pack.features.map((feature, j) => (
                      <div key={j} className="flex items-center gap-3">
                        {feature.included ? (
                          <Check className="w-4 h-4 text-[#aaff4e] shrink-0" />
                        ) : (
                          <span className="w-4 h-4 text-[#D1D5DB] shrink-0">—</span>
                        )}
                        <span className={feature.included ? 'text-[#0A0A0A]' : 'text-[#9CA3AF]'}>
                          {feature.text}
                        </span>
                      </div>
                    ))}
                    <div className="pt-3 border-t border-[#E5E7EB]">
                      <span className="text-sm text-[#6B7280]">Délai de réponse: {pack.responseTime}</span>
                    </div>
                  </div>
                  
                  <a
                    href={`https://wa.me/2250503145327?text=Bonjour%20NEDA,%20je%20suis%20intéressé(e)%20par%20le%20pack%20${pack.name}%20(${pack.price}%20FCFA/mois).%20Pouvons-nous%20en%20discuter%20?`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-3 rounded-full text-sm font-semibold transition-all text-center block ${
                      pack.featured
                        ? 'neda-gradient text-white'
                        : 'border-2 border-[#D1D5DB] text-[#0A0A0A] hover:border-[#0A0A0A]'
                    }`}
                  >
                    Choisir {pack.name}
                  </a>
                </motion.div>
              ))}
            </div>
            
            <div className="text-center p-4 bg-[#F9FAFB] rounded-xl border border-[#E5E7EB]">
              <p className="text-sm text-[#6B7280]">
                ℹ️ Les packs n'incluent pas le budget publicitaire (Facebook Ads / Google Ads), 
                facturé directement par la plateforme au client. 
                <span className="font-semibold"> Sans engagement · Résiliation avec 15 jours de préavis.</span>
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    <th className="text-left p-4 text-sm font-semibold text-[#0A0A0A] bg-[#F9FAFB] rounded-l-lg">Feature</th>
                    <th className="p-4 text-sm font-semibold text-[#0A0A0A] bg-[#F9FAFB]">STARTER</th>
                    <th className="p-4 text-sm font-semibold text-[#0A0A0A] bg-[rgba(99,102,241,0.06)]">STANDARD ⭐</th>
                    <th className="p-4 text-sm font-semibold text-[#0A0A0A] bg-[#F9FAFB] rounded-r-lg">PREMIUM</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((category, catIdx) => (
                    <>
                      <tr key={`cat-${catIdx}`} className="category-row">
                        <td colSpan={4}>{category.category}</td>
                      </tr>
                      {category.features.map((feature, featIdx) => (
                        <tr key={`${catIdx}-${featIdx}`} className="hover:bg-[#F9FAFB]">
                          <td className="p-4 text-sm font-medium text-[#0A0A0A]">{feature.name}</td>
                          <td className="p-4 text-center">
                            {typeof feature.starter === 'boolean' ? (
                              feature.starter ? <Check className="w-5 h-5 check-icon mx-auto" /> : <span className="dash-icon">—</span>
                            ) : <span className="text-sm text-[#6B7280]">{feature.starter}</span>}
                          </td>
                          <td className="p-4 text-center col-standard">
                            {typeof feature.standard === 'boolean' ? (
                              feature.standard ? <Check className="w-5 h-5 check-icon mx-auto" /> : <span className="dash-icon">—</span>
                            ) : <span className="text-sm text-[#6B7280]">{feature.standard}</span>}
                          </td>
                          <td className="p-4 text-center">
                            {typeof feature.premium === 'boolean' ? (
                              feature.premium ? <Check className="w-5 h-5 check-icon mx-auto" /> : <span className="dash-icon">—</span>
                            ) : <span className="text-sm text-[#6B7280]">{feature.premium}</span>}
                          </td>
                        </tr>
                      ))}
                    </>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        )}

        {activeTab === 'packs' && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20"
          >
            <div className="text-center mb-10">
              <h3 className="text-2xl font-bold text-[#0A0A0A] mb-2">Budget publicitaire — à titre indicatif</h3>
              <p className="text-[#6B7280]">Le budget est versé directement à Meta par le client, et n'est pas inclus dans les honoraires NEDA.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {budgetData.map((budget, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`relative p-6 rounded-xl border ${budget.recommended ? 'border-[#aaff4e]' : 'border-[#E5E7EB]'} bg-[#F9FAFB]`}
                >
                  {budget.recommended && (
                    <span className="absolute top-3 right-3 px-2 py-1 rounded-full bg-[#aaff4e] text-white text-xs font-medium">
                      Recommandé
                    </span>
                  )}
                  <div className="text-3xl mb-3">{budget.icon}</div>
                  <div className="text-2xl font-bold text-[#0A0A0A] mb-2">{budget.amount} <span className="text-base font-normal">FCFA / mois</span></div>
                  <p className="text-sm text-[#6B7280] mb-2">Portée estimée: {budget.range} personnes / mois</p>
                  <p className="text-sm text-[#0A0A0A]">{budget.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-[#0A0A0A] mb-2">Conditions générales</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-[#E5E7EB]">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xl">💳</span>
                <h4 className="font-bold text-[#0A0A0A]">Acompte</h4>
              </div>
              <p className="text-sm text-[#6B7280]">50% à la commande, 50% à la livraison (one-shot). Packs: paiement mensuel en début de mois.</p>
            </div>
            <div className="p-6 rounded-xl border border-[#E5E7EB]">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xl">⏱</span>
                <h4 className="font-bold text-[#0A0A0A]">Délai de livraison</h4>
              </div>
              <p className="text-sm text-[#6B7280]">Précisé dans le bon de commande. Généralement 3 à 10 jours ouvrés selon la prestation.</p>
            </div>
            <div className="p-6 rounded-xl border border-[#E5E7EB]">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xl">✏️</span>
                <h4 className="font-bold text-[#0A0A0A]">Révisions</h4>
              </div>
              <p className="text-sm text-[#6B7280]">2 révisions incluses pour toute prestation de création. Au-delà: 15 000 FCFA / révision supplémentaire.</p>
            </div>
            <div className="p-6 rounded-xl border border-[#E5E7EB]">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xl">🔄</span>
                <h4 className="font-bold text-[#0A0A0A]">Résiliation</h4>
              </div>
              <p className="text-sm text-[#6B7280]">Packs sans engagement minimum. Préavis de 15 jours avant la date de renouvellement.</p>
            </div>
          </div>
          
          <p className="text-center text-sm text-[#6B7280] mt-6">
            📅 Les tarifs indiqués sont valables 30 jours à compter de la réception de ce document.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 p-12 md:p-16 rounded-3xl text-center"
          style={{ background: 'linear-gradient(135deg, #aaff4e 0%, #9a6bff 50%, #ff44da 100%)' }}
        >
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "'Bricolage Grotesque', 'DM Sans', sans-serif" }}>
            Votre croissance commence ici.
          </h3>
          <p className="text-white/80 text-lg mb-10">Contactez-nous pour démarrer ou demander un devis personnalisé.</p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/contact" 
              className="px-8 py-4 rounded-full bg-white text-[#aaff4e] font-semibold hover:scale-105 transition-transform"
            >
              Demander un devis
            </Link>
            <Link 
              to="/contact" 
              className="px-8 py-4 rounded-full border-2 border-white text-white font-semibold hover:bg-white/10 transition-colors"
            >
              Nous contacter
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}