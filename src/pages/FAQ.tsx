import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Search } from 'lucide-react';

const faqs = [
  {
    category: 'Général',
    questions: [
      {
        q: 'Combien de temps prend la création d\'un site web ?',
        a: 'La durée dépend de la complexité du projet. Un site vitrine classique prend généralement 2 à 4 semaines, tandis qu\'un site e-commerce ou sur-mesure peut nécessiter 6 à 12 semaines. Nous vous fournirons un calendrier précis lors du démarrage.'
      },
      {
        q: 'Êtes-vous disponibles pour des projets urgents ?',
        a: 'Oui, nous acceptons parfois des projets urgents avec des délais压缩és. Des frais supplémentaires peuvent s\'appliquer selon la charge de travail. Contactez-nous pour discuter de votre timeline.'
      },
      {
        q: 'Travaillez-vous avec des clients hors de Côte d\'Ivoire ?',
        a: 'Absolument ! Nous avons l\'habitude de travailler à distance avec des clients en Afrique et à l\'international. Nous utilisons des outils de collaboration efficaces pour garantir une communication fluide.'
      },
    ]
  },
  {
    category: 'Services Web',
    questions: [
      {
        q: 'Gérez-vous la publicité sur Facebook et Instagram ?',
        a: 'Oui, nous créons, gérons et optimisons vos campagnes publicitaires sur les réseaux sociaux pour maximiser votre retour sur investissement (ROI) et atteindre votre cible. Nous fournissons des rapports mensuels détaillés.'
      },
      {
        q: 'Proposez-vous des services de création de contenu ?',
        a: 'Absolument ! Notre équipe produit des visuels, des vidéos (Reels, TikTok), et rédige des textes engageants pour animer vos réseaux sociaux et votre site web. Le contenu est toujours adapté à votre audience.'
      },
      {
        q: 'Qu\'est-ce que le SEO et pourquoi c\'est important ?',
        a: 'Le SEO (Search Engine Optimization) améliore votre visibilité sur Google. Plus vous êtes bien positionné, plus vous attirez de visiteurs qualifiés. Nous optimisons votre site technique, votre contenu et votre présence locale.'
      },
      {
        q: 'Mon site sera-t-il adapté aux mobiles ?',
        a: 'Oui, tous nos sites sont 100% responsive et optimisés pour smartphones et tablettes. C\'est devenu indispensable car plus de 70% du trafic web provient des appareils mobiles.'
      },
    ]
  },
  {
    category: 'Tarifs & Paiement',
    questions: [
      {
        q: 'Comment fonctionne le paiement de vos services ?',
        a: 'Nous demandons généralement un acompte de 50% au début du projet, et le solde à la livraison. Pour la gestion mensuelle (réseaux sociaux), le paiement s\'effectue en début de mois.'
      },
      {
        q: 'Acceptez-vous les paiements par Mobile Money ?',
        a: 'Oui ! Nous acceptons Orange Money, MTN Money et Wave. Nous facilitons les transactions pour tous nos clients ivoiriens.'
      },
      {
        q: 'Y a-t-il des frais récurrents après la livraison ?',
        a: 'Les frais récurrents sont optionnels : hébergement, maintenance, mises à jour. Vous n\'êtes jamais obligé de prendre ces services, mais ils sont recommandés pour garder votre site sécurisé et performant.'
      },
      {
        q: 'Puis-je payer en plusieurs fois ?',
        a: 'Oui, nous proposons le paiement en 2 à 3 fois sans frais pour les projets supérieurs à 200k FCFA. Discutons de ce qui vous convient.'
      },
    ]
  },
  {
    category: 'Support',
    questions: [
      {
        q: 'Quel type de support offrez-vous après la livraison ?',
        a: 'Selon le pack choisi, vous bénéficiez de 1 à 3 mois de support gratuit. Après cela, vous pouvez opter pour un contrat de maintenance mensuel pour toute assistance technique.'
      },
      {
        q: 'Comment puis-je vous contacter en cas de problème ?',
        a: 'Vous pouvez nous contacter par WhatsApp, email ou téléphone. Nous répondons généralement sous 24h. Les clients Premium ont accès à notre support prioritaire 24/7.'
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
