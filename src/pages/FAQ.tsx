import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Search } from 'lucide-react';

const faqs = [
  {
    category: 'Stratégie & Approche',
    questions: [
      {
        q: 'Comment définissez-vous le succès de nos campagnes ?',
        a: 'Nous définissons le succès selon vos objectifs métier spécifiques. Nous suivons des KPIs concrets : return on ad spend (ROAS), coût par acquisition (CPA), taux de conversion, volume de leads et profit. Nous reportons sur ce qui compte vraiment pour votre business, pas sur des métriques vanity.'
      },
      {
        q: 'Quelle est votre approche pour les réseaux sociaux ?',
        a: 'Nous ne proposons pas de solution cookie-cutter. Chaque stratégie est adaptée à votre audience, votre secteur et vos objectifs. Nous créons du contenu original, analysons les performances et optimisons en continu pour maximiser l\'engagement et les conversions.'
      },
      {
        q: 'Comment boostez-vous notre SEO ?',
        a: 'Nous combinons SEO technique et contenu de qualité. Nous optimisons votre site, créons du contenu optimisé pour les moteurs de recherche, et construisons des backlinks éthiques. Nous adaptons notre stratégie aux dernières mises à jour Google.'
      },
      {
        q: 'Intégrez-vous l\'IA dans votre travail ?',
        a: 'Nous utilisons l\'IA comme outil d\'assistance, mais la stratégie et les creativas sont toujours humaines. Cela nous permet d\'être efficaces tout en garantissant un contenu authentique qui résonne avec votre audience.'
      },
    ]
  },
  {
    category: 'Résultats & Reporting',
    questions: [
      {
        q: 'À quelle fréquence recevez-vous des rapports ?',
        a: 'Nous fournissons un rapport mensuel avec une réunion de suivi en direct. Les rapports incluent : performances vs objectifs, points clés découverts, et prochaines étapes recommandées. Vous avez accès à un dashboard en temps réel.'
      },
      {
        q: 'Pouvez-vous montrer des résultats prouvés ?',
        a: 'Absolument. Nous fournissons des case studies vérifiables avec des métriques réelles pour des entreprises similaires à la vôtre. Nous pouvons vous mettre en contact avec des clients existants pour des témoignages directs.'
      },
      {
        q: 'Combien de temps pour voir les premiers résultats ?',
        a: 'Cela dépend de votre package. Pour les ads paid, les premiers résultats apparaissent en 1-2 semaines. Pour le SEO et la croissance organique, comptez 3-6 mois pour des résultats significatifs. Nous définissons des attente réalistes dès le départ.'
      },
      {
        q: 'Travaillez-vous avec des entreprises comme la nôtre ?',
        a: 'Nous avons de l\'expérience dans divers secteurs en Afrique de l\'Ouest. Même si nous n\'avez pas travaillé spécifiquement dans votre industrie, notre expertise marketing nous permet de ramp up rapidement. Nous expliquons toujours comment nous adaptons notre approche.'
      },
    ]
  },
  {
    category: 'Tarifs & Contrat',
    questions: [
      {
        q: 'Comment fonctionne la tarification ?',
        a: 'Nous proposons une tarification transparente. Il n\'y a pas de frais cachés. Nous proposons des packs mensuels (gestion réseaux sociaux, ads, seo) et des projets ponctuels (création site, brand identity). Tout est détaillé dans le devis.'
      },
      {
        q: 'Quels sont les engagements contractuels ?',
        a: 'Nous proposons du month-to-month pour maximum de flexibilité. Pas de contrat locker sur 12 mois. Vous pouvez arrêter à tout moment avec un préavis de 30 jours. Nous privilégions une relation partenaire, pas un engagement forcé.'
      },
      {
        q: 'Acceptez-vous les paiements par Mobile Money ?',
        a: 'Oui ! Nous acceptons Orange Money, MTN Money et Wave pour faciliter les transactions avec nos clients ivoiriens.'
      },
      {
        q: 'Puis-je payer en plusieurs fois ?',
        a: 'Oui, nous proposons le paiement en 2 à 3 fois sans frais pour les projets supérieurs à 200k FCA. Discutons de ce qui vous convient.'
      },
    ]
  },
  {
    category: 'Support',
    questions: [
      {
        q: 'Comment vous contacte-t-on en cas de besoin ?',
        a: 'Vous pouvez nous contacter par WhatsApp, email ou téléphone. Nous répondons généralement sous 24h. Les clients Premium ont accès à notre support prioritaire.'
      },
      {
        q: 'Qui sera notre interlocuteur dédié ?',
        a: 'Vous avez un account manager dédiée qui connaît votre dossier. Vous avez un contact direct, pas un système de ticket anonymes. Nous répondons rapidement à vos questions.'
      },
    ]
  }
];

export default function FAQ() {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('Tous');

  const toggleItem = (id: string) => {
    setOpenItems(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const allQuestions = faqs.flatMap((cat, catIndex) =>
    cat.questions.map((q, qIndex) => ({
      ...q,
      id: `${catIndex}-${qIndex}`,
      category: cat.category
    }))
  );

  const filteredQuestions = allQuestions.filter(q => {
    const matchesSearch = q.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         q.a.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'Tous' || q.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#9a6bff]/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#aaff4e]/10 rounded-full blur-[150px]" />
      </div>

      <section className="pt-40 pb-16 px-6 relative">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <span className="text-sm font-bold uppercase tracking-widest text-[#aaff4e] mb-4 block">Aide</span>
            <h1 className="text-5xl md:text-6xl font-black mb-6">FAQ</h1>
            <p className="text-xl text-[#9CA3AF]">Trouvez rapidement les réponses à vos questions.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-10 relative"
          >
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30" />
            <input
              type="text"
              placeholder="Rechercher une question..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Rechercher dans la FAQ"
              className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-[#aaff4e] focus:outline-none transition-colors"
            />
          </motion.div>
        </div>
      </section>

      <section className="py-8 px-6 relative">
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-wrap gap-3 mb-8">
            <button
              onClick={() => setActiveCategory('Tous')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === 'Tous'
                  ? 'neda-gradient text-white'
                  : 'bg-white border border-[#E5E7EB] text-[#6B7280] hover:border-[#aaff4e]'
              }`}
            >
              Tous
            </button>
            {faqs.map(cat => (
              <button
                key={cat.category}
                onClick={() => setActiveCategory(cat.category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat.category
                    ? 'neda-gradient text-white'
                    : 'bg-white border border-[#E5E7EB] text-[#6B7280] hover:border-[#aaff4e]'
                }`}
              >
                {cat.category}
              </button>
            ))}
          </div>

          <div className="space-y-3">
            <AnimatePresence mode="popLayout">
              {filteredQuestions.map((faq, i) => (
                <motion.div
                  key={faq.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ delay: i * 0.03 }}
                  className="rounded-2xl bg-white/5 border border-white/5 overflow-hidden"
                >
                  <button
                    onClick={() => toggleItem(faq.id)}
                    className="w-full px-6 py-5 text-left flex justify-between items-center gap-4 hover:bg-white/5 transition-colors"
                  >
                    <div className="flex-1">
                      <span className="text-xs text-[#aaff4e] mb-1 block">{faq.category}</span>
                      <span className="font-bold text-lg">{faq.q}</span>
                    </div>
                    <ChevronDown className={`w-5 h-5 text-[#9CA3AF] shrink-0 transition-transform ${openItems.has(faq.id) ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {openItems.has(faq.id) && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-5 pt-2 border-t border-white/5">
                          <p className="text-[#6B7280] leading-relaxed">{faq.a}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {filteredQuestions.length === 0 && (
            <div className="text-center py-16">
              <p className="text-[#6B7280]">Aucune question ne correspond à votre recherche.</p>
            </div>
          )}
        </div>
      </section>

      <section className="py-24 px-6 relative">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-12 rounded-3xl bg-gradient-to-br from-[#9a6bff]/10 to-[#ff44da]/10 border border-white/10 text-center"
          >
            <h2 className="text-3xl font-black mb-4">Vous n'avez pas trouvé votre réponse ?</h2>
            <p className="text-[#9CA3AF] mb-8">Notre équipe est là pour vous aider.</p>
            <a 
              href="https://wa.me/22500000000" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#25D366] text-white font-bold hover:scale-105 transition-transform"
            >
              Contacter sur WhatsApp
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
