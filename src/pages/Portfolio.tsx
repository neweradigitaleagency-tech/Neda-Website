import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, X, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Studio Maheni',
    category: 'Web Design',
    desc: 'Studio de design architectural - Création site vitrine moderne avec portfolio interactif.',
    image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&h=600&fit=crop',
    tags: ['Web Design', 'Portfolio', 'Architecture'],
    link: 'https://studio-maheni.vercel.app/',
    isIframe: true
  },
  {
    id: 2,
    title: 'TechStart CI',
    category: 'Site Vitrine',
    desc: 'Site vitrine moderne pour une startup technologique basée à Abidjan avec intégration CRM.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    tags: ['Web Design', 'React', 'CRM']
  },
  {
    id: 3,
    title: 'Mode Africaine',
    category: 'Social Media',
    desc: 'Stratégie de contenu et gestion des réseaux sociaux pour une marque de mode africaine.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
    tags: ['Social Media', 'Content', 'Ads']
  },
  {
    id: 4,
    title: 'Café de l\'Avenue',
    category: 'Branding & Web',
    desc: 'Refonte complète de l\'identité visuelle et création d\'un site e-commerce pour une chaîne de cafés premium.',
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&h=600&fit=crop',
    tags: ['Branding', 'E-commerce', 'SEO']
  },
  {
    id: 5,
    title: 'Immobilier Prestige',
    category: 'Web & SEO',
    desc: 'Plateforme de présentation immobilière avec visites virtuelles et optimisation SEO locale.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop',
    tags: ['Web', 'SEO', 'Virtual Tours']
  },
  {
    id: 6,
    title: 'Restaurant Le Palais',
    category: 'Branding',
    desc: 'Création de logo, menu design et présence digitale pour un restaurant gastronomique.',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop',
    tags: ['Branding', 'Print', 'Social']
  },
  {
    id: 7,
    title: 'Fitness Pro',
    category: 'App Mobile',
    desc: 'Application mobile de fitness avec suivi personnalisé et coach virtuel IA.',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&h=600&fit=crop',
    tags: ['Mobile App', 'AI', 'UI/UX']
  },
];

const categories = ['Tous', 'Branding', 'Web', 'Social Media', 'App Mobile'];

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [activeCategory, setActiveCategory] = useState('Tous');

  const filteredProjects = activeCategory === 'Tous' 
    ? projects 
    : projects.filter(p => p.category.includes(activeCategory) || p.tags.includes(activeCategory));

  return (
    <div className="relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-[#ff44da]/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-[#aaff4e]/10 rounded-full blur-[150px]" />
      </div>

      <section className="pt-40 pb-16 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="text-sm font-bold uppercase tracking-widest text-[#aaff4e] mb-4 block">Nos réalisations</span>
            <h1 className="text-5xl md:text-6xl font-black mb-6">Portfolio</h1>
            <p className="text-xl text-[#9CA3AF]">Découvrez nos projets récents et laissez-vous inspirer.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? 'neda-gradient text-white'
                    : 'bg-white border border-[#E5E7EB] text-[#6B7280] hover:border-[#aaff4e]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, i) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => setSelectedProject(project)}
                  className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer"
                >
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#aaff4e] mb-2 block">{project.category}</span>
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-sm text-[#D1D5DB] opacity-0 group-hover:opacity-100 transition-opacity">{project.desc}</p>
                  </div>
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl w-full bg-[#1a1a2e] rounded-3xl overflow-hidden border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className="relative aspect-video">
                {'isIframe' in selectedProject && selectedProject.isIframe && selectedProject.link ? (
                  <iframe
                    src={selectedProject.link}
                    className="w-full h-full"
                    title={selectedProject.title}
                  />
                ) : (
                  <>
                    <img 
                      src={selectedProject.image} 
                      alt={selectedProject.title}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </>
                )}
              </div>
              
              <div className="p-8">
                <span className="text-sm font-bold uppercase tracking-wider text-[#aaff4e]">{selectedProject.category}</span>
                <h2 className="text-3xl font-black mt-2 mb-4">{selectedProject.title}</h2>
                <p className="text-[#D1D5DB] mb-6 leading-relaxed">{selectedProject.desc}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 rounded-full bg-white/10 text-sm text-white/70">{tag}</span>
                  ))}
                </div>
                {'link' in selectedProject && selectedProject.link && (
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full neda-gradient text-white font-semibold hover:opacity-90 transition-opacity"
                  >
                    Voir le site <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <section className="py-24 px-6 relative">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-12 md:p-16 rounded-3xl bg-gradient-to-br from-[#aaff4e]/10 to-[#9a6bff]/10 border border-white/10 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-black mb-6">Votre projet peut être le prochain</h2>
            <p className="text-[#9CA3AF] mb-10 text-lg">Rejoignez nos clients satisfaits et donnons vie à vos idées.</p>
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-2 px-10 py-5 rounded-full bg-gradient-to-r from-[#aaff4e] to-[#9a6bff] text-black font-bold text-lg hover:scale-105 transition-transform"
            >
              Démarrer un projet <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}