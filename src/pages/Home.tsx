import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Layout, Code, TrendingUp, CheckCircle, Star } from 'lucide-react';
import LogoMarquee from '../components/LogoMarquee';
import FAQSection from '../components/FAQSection';

const CLIENT_LOGOS = [
  { name: 'Orange CI', logo: '🟠' },
  { name: 'MTN', logo: '🟡' },
  { name: 'NSIA', logo: '🟢' },
  { name: 'Ecobank', logo: '🔵' },
  { name: 'Total', logo: '🔴' },
];

const TESTIMONIALS = [
  {
    name: 'Aminata K.',
    role: 'Fondatrice, Startup Tech',
    content: 'neda a transformé notre présence digitale. +340% de trafic organique en 6 mois!',
    rating: 5,
    metric: '+340% trafic'
  },
  {
    name: 'Jean-Paul M.',
    role: 'Directeur, Restaurant',
    content: 'Le site créé par neda a doubé nos réservations en ligne. Un vrai game-changer.',
    rating: 5,
    metric: '+100% réservations'
  },
  {
    name: 'Fatou S.',
    role: 'CEO, E-commerce',
    content: 'Enfin une agence qui livre des résultats mesurables. ROI positif dès le 3ème mois.',
    rating: 5,
    metric: 'ROI +150%'
  },
];

const CASE_STUDIES = [
  {
    client: 'Startup E-commerce',
    challenge: 'Trafic faible, conversion <1%',
    solution: 'SEO + Publicité ciblée + Refonte UX',
    result: '+340% trafic organique, +250% conversions',
    metric: '340%'
  },
  {
    client: 'Restaurant Local',
    challenge: 'Réservations téléphone seulement',
    solution: 'Site responsive + Système de réservation',
    result: 'Doublé les réservations en 3 mois',
    metric: '100%'
  },
  {
    client: 'Entreprise B2B',
    challenge: 'Image vieillissante, leads en baisse',
    solution: 'Rebranding + Stratégie LinkedIn',
    result: 'ROI +150%, leads qualifiés +200%',
    metric: '150%'
  },
];

export default function Home() {
  return (
    <div className="relative">
      {/* Social Proof Bar - Above Fold */}
      <section className="pt-24 pb-4 px-6 bg-white border-b border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-sm text-[#6B7280] mb-4 font-medium"
          >
            Ils nous font confiance
          </motion.p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {CLIENT_LOGOS.map((client, i) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-2 text-[#6B7280] hover:text-[#0047FF] transition-colors"
              >
                <span className="text-2xl">{client.logo}</span>
                <span className="text-sm font-semibold">{client.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="pt-20 pb-24 px-6 relative min-h-[80vh] flex items-center bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#E5E7EB] mb-8">
              <Sparkles className="w-4 h-4 text-[#aaff4e]" />
              <span className="text-sm text-[#6B7280]">Agence Digitale basée en Côte d'Ivoire</span>
            </div>
            
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight mb-6 sm:mb-8">
              <span className="neda-gradient-text">Boostez votre</span>
              <br />
              <span className="text-[#0A0A0A]">Impact Digital</span>
            </h1>

            <p className="text-base sm:text-lg text-[#6B7280] leading-relaxed mb-8 sm:mb-10 max-w-2xl mx-auto">
              Nous aidons les entreprises africaines à <strong className="text-[#0A0A0A]">croître leur présence en ligne</strong> avec des stratégies digitales sur-mesure.
              <br className="hidden sm:block" />
              Design, Développement, Contenu et Stratégie sociale réunis.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
              <a
                href="https://wa.me/2250759595959"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-6 sm:px-8 py-3 sm:py-4 rounded-full neda-gradient text-white font-semibold text-base sm:text-lg hover:scale-105 transition-transform flex items-center justify-center gap-2"
              >
                Parler avec nos experts
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <Link
                to="/portfolio"
                className="px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-white border-2 border-[#0A0A0A] text-[#0A0A0A] font-semibold text-base sm:text-lg hover:bg-[#0A0A0A] hover:text-white transition-colors text-center"
              >
                Voir nos réalisations
              </Link>
            </div>

            {/* Trust Signals */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap justify-center gap-6 mt-10 sm:mt-12 text-sm text-[#9CA3AF]"
            >
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#aaff4e]" />
                <span>Projet livré à temps</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#aaff4e]" />
                <span>+50 clients satisfaits</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#aaff4e]" />
                <span>Support prioritaire</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <LogoMarquee />
      
      {/* Testimonials with Metrics */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-sm font-bold uppercase tracking-widest neda-gradient-text mb-4 block">Témoignages</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0A0A0A] mb-6">
              Ils nous font confiance
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {TESTIMONIALS.map((testimonial, i) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-3xl bg-[#F9FAFB] border border-[#E5E7EB] hover:border-[#aaff4e] hover:shadow-lg transition-all group"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, r) => (
                    <Star key={r} size={16} className="fill-[#aaff4e] text-[#aaff4e]" />
                  ))}
                </div>
                <p className="text-[#374151] mb-6 leading-relaxed">"{testimonial.content}"</p>
                <div className="border-t border-[#E5E7EB] pt-4">
                  <p className="font-bold text-[#0A0A0A]">{testimonial.name}</p>
                  <p className="text-sm text-[#6B7280]">{testimonial.role}</p>
                  <div className="mt-3 inline-flex px-4 py-1 rounded-full bg-[#aaff4e]/20 text-[#0047FF] text-sm font-bold">
                    {testimonial.metric}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section - Converts 2x Better Than Portfolios */}
      <section className="py-24 px-6 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-sm font-bold uppercase tracking-widest neda-gradient-text mb-4 block">Études de Cas</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0A0A0A] mb-6">
              Des résultats qui parlent
            </h2>
            <p className="text-[#6B7280] max-w-2xl mx-auto">
              Les études de cas avec métriques convertissent 2x mieux que les portfolios simples.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {CASE_STUDIES.map((study, i) => (
              <motion.div
                key={study.client}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-3xl bg-white border border-[#E5E7EB] hover:border-[#9a6bff] hover:shadow-xl transition-all"
              >
                <div className="w-16 h-16 rounded-2xl neda-gradient flex items-center justify-center mb-6">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#0A0A0A] mb-2">{study.client}</h3>
                <div className="mb-4">
                  <p className="text-sm text-[#6B7280] mb-1"><strong className="text-[#374151]">Défis:</strong> {study.challenge}</p>
                  <p className="text-sm text-[#6B7280] mb-1"><strong className="text-[#374151]">Solution:</strong> {study.solution}</p>
                </div>
                <div className="p-4 rounded-xl bg-[#F9FAFB] border border-[#E5E7EB]">
                  <p className="text-sm text-[#6B7280] mb-2">Résultat:</p>
                  <p className="text-2xl font-black text-[#0047FF]">{study.metric}</p>
                  <p className="text-sm text-[#374151] font-semibold mt-1">{study.result}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full neda-gradient text-white font-semibold text-lg hover:scale-105 transition-transform"
            >
              Voir toutes nos réalisations <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-sm font-bold uppercase tracking-widest neda-gradient-text mb-4 block">Nos Services</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0A0A0A] mb-6">
              Ce que nous faisons
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-10 sm:mb-12">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl bg-[#F9FAFB] border border-[#E5E7EB] hover:border-[#aaff4e] hover:shadow-lg transition-all"
            >
              <div className="w-14 h-14 rounded-2xl neda-gradient flex items-center justify-center mb-5">
                <Layout className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#0A0A0A] mb-3">Design Web & UI/UX</h3>
              <p className="text-[#374151] mb-4">Création de sites modernes et responsives. Expérience utilisateur optimisée.</p>
              <ul className="space-y-2 text-sm" style={{ color: '#4B5563' }}>
                <li>• Sites vitrines</li>
                <li>• Landing pages</li>
                <li>• E-commerce</li>
                <li>• Refonte graphique</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-8 rounded-3xl bg-[#F9FAFB] border border-[#E5E7EB] hover:border-[#9a6bff] hover:shadow-lg transition-all"
            >
              <div className="w-14 h-14 rounded-2xl neda-gradient flex items-center justify-center mb-5">
                <Code className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#0A0A0A] mb-3">Développement Web</h3>
              <p className="text-[#374151] mb-4">Sites et applications web performants avec les dernières technologies.</p>
              <ul className="space-y-2 text-sm" style={{ color: '#4B5563' }}>
                <li>• Applications web</li>
                <li>• API & Bases de données</li>
                <li>• Maintenance</li>
                <li>• Hébergement</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-8 rounded-3xl bg-[#F9FAFB] border border-[#E5E7EB] hover:border-[#ff44da] hover:shadow-lg transition-all"
            >
              <div className="w-14 h-14 rounded-2xl neda-gradient flex items-center justify-center mb-5">
                <TrendingUp className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#0A0A0A] mb-3">Stratégie Digitale</h3>
              <p className="text-[#374151] mb-4">Gestion des réseaux sociaux et création de contenu engageant.</p>
              <ul className="space-y-2 text-sm" style={{ color: '#4B5563' }}>
                <li>• Réseaux sociaux</li>
                <li>• Publicité Facebook/IG</li>
                <li>• Création contenu</li>
                <li>• SEO local</li>
              </ul>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Link
              to="/pricing"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full neda-gradient text-white font-semibold text-lg hover:scale-105 transition-transform"
            >
              Voir tous nos tarifs <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      <FAQSection />

      <section className="py-24 px-6 bg-[#F9FAFB]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative p-12 md:p-16 rounded-3xl overflow-hidden text-center"
          >
            <div className="absolute inset-0 neda-gradient opacity-20" />
            <div className="absolute inset-0 backdrop-blur-xl" />

            <div className="relative">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 mb-6">
                <Star className="w-4 h-4 text-[#aaff4e] fill-[#aaff4e]" />
                <span className="text-sm font-semibold text-[#0A0A0A]">Note: 4.9/5 - 50+ clients</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-[#0A0A0A] mb-6">
                Prêt à transformer votre digital ?
              </h2>
              <p className="text-xl text-[#6B7280] mb-10 max-w-2xl mx-auto">
                Discutons de votre projet et trouvons ensemble la meilleure solution pour 
                <strong className="text-[#0A0A0A]">booster votre croissance</strong>.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/2250759595959"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-10 py-5 rounded-full neda-gradient text-white font-semibold text-lg hover:scale-105 transition-transform shadow-lg group"
                >
                  Réserver un appel stratégique <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <Link
                  to="/pricing"
                  className="px-10 py-5 rounded-full bg-white border-2 border-[#0A0A0A] text-[#0A0A0A] font-semibold text-lg hover:bg-[#0A0A0A] hover:text-white transition-colors"
                >
                  Voir nos tarifs
                </Link>
              </div>
              
              <p className="text-sm text-[#6B7280] mt-6">
                ✅ Réponse sous 24h • ✅ Audit gratuit • ✅ Sans engagement
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}