import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Layout, Share2, Rocket, MapPin, Palette, Code, Megaphone, BarChart3, Search, Layers, Bot } from 'lucide-react';

const services = [
  {
    icon: Layout,
    title: 'Création de Sites Web',
    desc: 'Sites vitrines élégants, plateformes e-commerce performantes et applications web sur-mesure.',
    features: ['Sites vitrines', 'E-commerce', 'Applications web', 'Landing pages'],
    color: '#aaff4e',
    gradient: 'from-[#aaff4e]/20 to-transparent'
  },
  {
    icon: Code,
    title: 'Développement Sur-Mesure',
    desc: 'Solutions techniques adaptées à vos besoins spécifiques avec les dernières technologies.',
    features: ['React / Next.js', 'Applications complexes', 'API & Intégrations', 'Performance optimisée'],
    color: '#00d4ff',
    gradient: 'from-[#00d4ff]/20 to-transparent'
  },
  {
    icon: Palette,
    title: 'Identité Visuelle & Branding',
    desc: 'Création de logos mémorables, chartes graphiques cohérentes et direction artistique impactante.',
    features: ['Logos', 'Chartes graphiques', 'Direction artistique', 'Kit de marque'],
    color: '#9a6bff',
    gradient: 'from-[#9a6bff]/20 to-transparent'
  },
  {
    icon: Share2,
    title: 'Gestion des Réseaux Sociaux',
    desc: 'Community management, création de contenu engageant et stratégie de présence digitale.',
    features: ['Community Management', 'Création de contenu', 'Planning éditorial', 'Rapports mensuels'],
    color: '#ff44da',
    gradient: 'from-[#ff44da]/20 to-transparent'
  },
  {
    icon: Megaphone,
    title: 'Publicité Digitale',
    desc: 'Campagnes ciblées sur Facebook, Instagram et Google pour maximiser votre ROI.',
    features: ['Facebook & Instagram Ads', 'Google Ads', 'Campagnes ciblées', 'Optimisation continue'],
    color: '#ffd700',
    gradient: 'from-[#ffd700]/20 to-transparent'
  },
  {
    icon: Search,
    title: 'SEO & Référencement',
    desc: 'Optimisation pour les moteurs de recherche et visibilité locale pour attirer plus de clients.',
    features: ['SEO technique', 'Contenu optimisé', 'Google My Business', 'Suivi des rankings'],
    color: '#ff6b35',
    gradient: 'from-[#ff6b35]/20 to-transparent'
  },
  {
    icon: Layers,
    title: 'UI/UX Design',
    desc: 'Interfaces utilisateur intuitives et expériences utilisateur fluides qui convertissent.',
    features: ['Wireframing', 'Prototypage', 'Design system', 'Tests utilisateurs'],
    color: '#00ff88',
    gradient: 'from-[#00ff88]/20 to-transparent'
  },
  {
    icon: Bot,
    title: 'Intelligence Artificielle',
    desc: 'Intégration de chatbots intelligents et automatisation de vos processus.',
    features: ['Chatbots', 'Automatisation', 'Support IA', 'Analyse predictive'],
    color: '#a855f7',
    gradient: 'from-[#a855f7]/20 to-transparent'
  },
];

const process = [
  { step: '01', title: 'Découverte', desc: 'Nous écoutons vos besoins et objectifs' },
  { step: '02', title: 'Stratégie', desc: ' élaboration du plan d\'action' },
  { step: '03', title: 'Création', desc: 'Design et développement de votre solution' },
  { step: '04', title: 'Lancement', desc: 'Mise en ligne et accompagnement' },
];

export default function Services() {
  return (
    <div className="relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#9a6bff]/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#aaff4e]/10 rounded-full blur-[150px]" />
      </div>

      <section className="pt-40 pb-16 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="text-sm font-bold uppercase tracking-widest text-[#aaff4e] mb-4 block">Nos expertises</span>
            <h1 className="text-5xl md:text-6xl font-black mb-6">Services</h1>
            <p className="text-xl text-[#9CA3AF]">Des solutions complètes et sur-mesure pour propulser votre entreprise dans l'ère digitale.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {process.map((p, i) => (
              <motion.div
                key={p.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-6 rounded-2xl bg-white/5 border border-white/5"
              >
                <div className="text-4xl font-black bg-clip-text text-transparent bg-gradient-to-r from-[#aaff4e] to-[#9a6bff] mb-2">{p.step}</div>
                <h3 className="font-bold mb-1">{p.title}</h3>
                <p className="text-sm text-[#9CA3AF]">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className={`relative p-8 rounded-2xl bg-gradient-to-br ${service.gradient} border border-white/5 hover:border-white/20 transition-all duration-500 group`}
              >
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform" style={{ color: service.color }}>
                  <service.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-[#9CA3AF] text-sm mb-6 leading-relaxed">{service.desc}</p>
                <ul className="space-y-2">
                  {service.features.map(f => (
                    <li key={f} className="flex items-center gap-2 text-sm text-[#6B7280]">
                      <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: service.color }} />
                      {f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 relative">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-12 md:p-16 rounded-3xl bg-gradient-to-br from-[#aaff4e]/10 via-[#9a6bff]/10 to-[#ff44da]/10 border border-white/10 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-black mb-6">Besoin d'un service sur-mesure ?</h2>
            <p className="text-[#9CA3AF] mb-10 text-lg">Chaque projet est unique. Contactez-nous pour discuter de vos besoins spécifiques.</p>
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-2 px-10 py-5 rounded-full bg-gradient-to-r from-[#aaff4e] to-[#9a6bff] text-black font-bold text-lg hover:scale-105 transition-transform"
            >
              Demander un devis <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}