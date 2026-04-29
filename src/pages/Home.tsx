import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Layout, Code, TrendingUp } from 'lucide-react';
import LogoMarquee from '../components/LogoMarquee';
import FAQSection from '../components/FAQSection';

export default function Home() {
  return (
    <div className="relative">
      <section className="pt-40 pb-24 px-6 relative min-h-[80vh] flex items-center bg-[#F9FAFB]">
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
              Nous simplifions le web pour les entreprises africaines.
              <br className="hidden sm:block" />
              Design, Développement, Contenu et Stratégie réunis sous un même toit.
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
                Voir le Portfolio
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <LogoMarquee />

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
              <h2 className="text-4xl md:text-5xl font-bold text-[#0A0A0A] mb-6">Prêt à transformer votre digital ?</h2>
              <p className="text-xl text-[#6B7280] mb-10 max-w-2xl mx-auto">Discutons de votre projet et trouvons ensemble la meilleure solution pour vos besoins.</p>
              <a
                href="https://wa.me/2250759595959"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-10 py-5 rounded-full neda-gradient text-white font-semibold text-lg hover:scale-105 transition-transform"
              >
                Démarrer maintenant <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}