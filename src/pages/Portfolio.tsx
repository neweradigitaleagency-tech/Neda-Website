import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, X, ExternalLink, ChevronLeft, ChevronRight, Play, Image as ImageIcon } from 'lucide-react';
import { useLang } from '../i18n/context';

const e = (s: string) => encodeURI(s);
const v = (folder: string, file: string) => `/visuel/${e(folder)}/${e(file)}`;
const range = (folder: string, count: number, ext = 'png') =>
  Array.from({ length: count }, (_, i) => v(folder, `${i + 1}.${ext}`));

export default function Portfolio() {
  const { t } = useLang();
  const [selectedProject, setSelectedProject] = useState<typeof qseProjects[0] | null>(null);
  const [activeCategory, setActiveCategory] = useState(t('portfolio.filterTous'));
  const [galleryIndex, setGalleryIndex] = useState(0);

  const qseProjects = [
    {
      id: 10,
      title: t('portfolio.qse10Title'),
      desc: t('portfolio.qse10Desc'),
      images: range('BON DEBUT DE SEMAINE', 8),
      tags: ['Motivation', 'QSE'],
    },
    {
      id: 11,
      title: t('portfolio.qse11Title'),
      desc: t('portfolio.qse11Desc'),
      images: range('ENVIRONNEMENT', 3),
      tags: ['Environnement', 'QSE'],
    },
    {
      id: 12,
      title: t('portfolio.qse12Title'),
      desc: t('portfolio.qse12Desc'),
      images: [
        v('EVENMENT', '1.mp4'),
        v('EVENMENT', '2.mp4'),
        v('EVENMENT', '3.MOV'),
        v('EVENMENT', '4.mp4'),
      ],
      isVideo: true,
      tags: ['Vidéo', 'Événement'],
    },
    {
      id: 13,
      title: t('portfolio.qse13Title'),
      desc: t('portfolio.qse13Desc'),
      images: range('MOTIVATION CULTURE QSE', 5),
      tags: ['Culture', 'QSE'],
    },
    {
      id: 14,
      title: t('portfolio.qse14Title'),
      desc: t('portfolio.qse14Desc'),
      images: range('QUALITÉ', 5),
      tags: ['Qualité', 'QSE'],
    },
    {
      id: 15,
      title: t('portfolio.qse15Title'),
      desc: t('portfolio.qse15Desc'),
      images: range('SANTÉ ET PRÉVENTION', 5),
      tags: ['Santé', 'Prévention'],
    },
    {
      id: 16,
      title: t('portfolio.qse16Title'),
      desc: t('portfolio.qse16Desc'),
      images: range('SÉCURITÉ AU TRAVAIL', 5),
      tags: ['Sécurité', 'Travail'],
    },
  ];

  const studioMaheni = {
    title: 'Studio Maheni',
    subtitle: t('portfolio.studioSubtitle'),
    description: t('portfolio.studioDesc'),
    featured: {
      title: t('portfolio.studioFeaturedTitle'),
      desc: t('portfolio.studioFeaturedDesc'),
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d6b?w=800&h=600&fit=crop',
      link: 'https://studio-maheni.vercel.app/',
      isIframe: true,
      tags: ['Web', 'Fitness'],
    },
    gallery: [
      {
        id: 'sm2',
        title: t('portfolio.sm2Title'),
        desc: t('portfolio.sm2Desc'),
        image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop',
        link: 'https://drive.google.com/file/d/1HWmK7bT520-e_AE-Im2Mbn4nymoNh9CH/view',
        tags: ['Qualité', 'Culture'],
      },
      {
        id: 'sm3',
        title: t('portfolio.sm3Title'),
        desc: t('portfolio.sm3Desc'),
        image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=600&fit=crop',
        link: 'https://drive.google.com/file/d/1HnvoZL6G0oBlerk-RKhdeE0ENvt8lgwf/view',
        tags: ['Audit', 'ISO'],
      },
      {
        id: 'sm4',
        title: t('portfolio.sm4Title'),
        desc: t('portfolio.sm4Desc'),
        image: 'https://images.unsplash.com/photo-1456406644174-8baf274bc2ac?w=800&h=600&fit=crop',
        link: 'https://drive.google.com/file/d/1LML72BqIqi9wC6cjYQdz4uQ5KGcdx2Oz/view',
        tags: ['Qualité', 'Imagination'],
      },
    ],
  };

  const productions = [
    {
      id: 20,
      title: t('portfolio.prod20Title'),
      desc: t('portfolio.prod20Desc'),
      image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&h=600&fit=crop',
      link: 'https://drive.google.com/file/d/1HkYNJ7I7DDM9yNGNbZwHpHam-mZaQwuy/view',
      tags: ['Vidéo', 'Reportage'],
    },
    {
      id: 21,
      title: t('portfolio.prod21Title'),
      desc: t('portfolio.prod21Desc'),
      image: 'https://images.unsplash.com/photo-1557838923-2985c318be48?w=800&h=600&fit=crop',
      link: 'https://drive.google.com/file/d/1HUXCpHOB2KtYgTGrPJIGiLobSeTi_BtQ/view',
      tags: ['Publicité', 'Marketing'],
    },
    {
      id: 22,
      title: t('portfolio.prod22Title'),
      desc: t('portfolio.prod22Desc'),
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop',
      link: 'https://drive.google.com/file/d/1S2CBgioYgkDTBTrJt4zesBmxRzSsQwV7/view',
      tags: ['HSE', 'Sécurité'],
    },
    {
      id: 23,
      title: t('portfolio.prod23Title'),
      desc: t('portfolio.prod23Desc'),
      image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&h=600&fit=crop',
      link: 'https://drive.google.com/file/d/1oiJ8ecsQPKF5TOWo557la4jLN0CJSDns/view',
      tags: ['HSE', 'Environnement'],
    },
  ];

  const categories = [t('portfolio.filterTous'), t('portfolio.filterVisuelle'), t('portfolio.filterProductions')];

  const allQSE = activeCategory === t('portfolio.filterTous')
    ? qseProjects
    : activeCategory === t('portfolio.filterVisuelle')
      ? qseProjects
      : [];

  const allProd = activeCategory === t('portfolio.filterTous')
    ? productions
    : activeCategory === t('portfolio.filterProductions')
      ? productions
      : [];

  const openProject = useCallback((project: typeof qseProjects[0]) => {
    setSelectedProject(project);
    setGalleryIndex(0);
  }, []);

  const nextMedia = useCallback(() => {
    if (!selectedProject) return;
    setGalleryIndex(i => (i + 1) % selectedProject.images.length);
  }, [selectedProject]);

  const prevMedia = useCallback(() => {
    if (!selectedProject) return;
    setGalleryIndex(i => (i - 1 + selectedProject.images.length) % selectedProject.images.length);
  }, [selectedProject]);

  return (
    <div className="relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-[#ff44da]/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-[#aaff4e]/10 rounded-full blur-[150px]" />
      </div>

      {/* ─── Studio Maheni ─── */}
      <section className="relative pt-40 pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#aaff4e] mb-4 block">{t('portfolio.sectionPremium')}</span>
            <h1 className="text-5xl md:text-7xl font-black mb-4 text-default tracking-tight">
              Studio<span className="text-[#aaff4e]">.</span>Maheni
            </h1>
            <p className="text-base md:text-lg text-muted max-w-2xl leading-relaxed">
              {studioMaheni.description}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="lg:col-span-2 relative group aspect-[16/10] lg:aspect-auto rounded-2xl overflow-hidden cursor-pointer"
              onClick={() => window.open(studioMaheni.featured.link, '_blank')}
            >
              <iframe
                src={studioMaheni.featured.link}
                className="w-full h-full min-h-[300px] md:min-h-[400px]"
                title={studioMaheni.featured.title}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6 md:p-8">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#aaff4e]">{studioMaheni.featured.tags.join(' · ')}</span>
                  <h3 className="text-2xl font-bold text-white mt-1">{studioMaheni.featured.title}</h3>
                  <p className="text-sm text-white/60 mt-1">{studioMaheni.featured.desc}</p>
                </div>
              </div>
            </motion.div>

            <div className="grid grid-cols-2 gap-4 md:gap-6">
              {studioMaheni.gallery.slice(0, 4).map((item, i) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + i * 0.05 }}
                  className="relative aspect-square rounded-2xl overflow-hidden group cursor-pointer"
                  onClick={() => window.open(item.link, '_blank')}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
                    <h4 className="text-sm md:text-base font-bold text-white">{item.title}</h4>
                    <p className="text-xs text-white/50 mt-0.5">{item.tags.join(' · ')}</p>
                  </div>
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <ExternalLink className="w-3.5 h-3.5" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Filter ─── */}
      <section className="py-16 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3 mb-16"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? 'neda-gradient text-white'
                    : 'bg-default border border-default text-muted hover:border-[#aaff4e]'
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          {/* ─── QSE Grid ─── */}
          {allQSE.length > 0 && (
            <div className="mb-20">
              {activeCategory !== t('portfolio.filterProductions') && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="mb-10"
                >
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#aaff4e] mb-2 block">{t('portfolio.galleryLabel')}</span>
                  <h2 className="text-3xl md:text-4xl font-black text-default">{t('portfolio.galleryTitle')}</h2>
                </motion.div>
              )}
              <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                <AnimatePresence mode="popLayout">
                  {allQSE.map((project, i) => (
                    <motion.div
                      key={project.id}
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ delay: i * 0.03 }}
                      onClick={() => openProject(project)}
                      className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer"
                    >
                      {project.isVideo ? (
                        <div className="relative w-full h-full transition-transform duration-700 group-hover:scale-110">
                          <video
                            src={project.images[0]}
                            className="w-full h-full object-cover"
                            muted
                            playsInline
                            preload="metadata"
                          />
                          <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                            <div className="w-14 h-14 rounded-full bg-[#aaff4e]/20 flex items-center justify-center backdrop-blur-sm">
                              <Play className="w-6 h-6 text-[#aaff4e] ml-0.5" />
                            </div>
                          </div>
                        </div>
                      ) : (
                        <img
                          src={project.images[0]}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />
                      <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 group-hover:translate-y-0 transition-transform">
                        <div className="flex flex-wrap gap-1.5 mb-2">
                          {project.tags.map(t => (
                            <span key={t} className="text-[10px] font-semibold uppercase tracking-wider text-[#aaff4e]">{t}</span>
                          ))}
                        </div>
                        <h3 className="text-lg font-bold text-white">{project.title}</h3>
                        <p className="text-sm text-white/60 mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity line-clamp-2">{project.desc}</p>
                      </div>
                      <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <ImageIcon className="w-3.5 h-3.5 text-white" />
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>
            </div>
          )}

          {/* ─── Productions Grid ─── */}
          {allProd.length > 0 && (
            <div>
              {activeCategory !== t('portfolio.filterVisuelle') && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="mb-10"
                >
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#aaff4e] mb-2 block">{t('portfolio.productionsLabel')}</span>
                  <h2 className="text-3xl md:text-4xl font-black text-default">{t('portfolio.productionsTitle')}</h2>
                </motion.div>
              )}
              <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                <AnimatePresence mode="popLayout">
                  {allProd.map((project, i) => (
                    <motion.div
                      key={project.id}
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ delay: i * 0.03 }}
                      onClick={() => window.open(project.link, '_blank')}
                      className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer"
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />
                      <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 group-hover:translate-y-0 transition-transform">
                        <div className="flex flex-wrap gap-1.5 mb-2">
                          {project.tags.map(t => (
                            <span key={t} className="text-[10px] font-semibold uppercase tracking-wider text-[#aaff4e]">{t}</span>
                          ))}
                        </div>
                        <h3 className="text-lg font-bold text-white">{project.title}</h3>
                        <p className="text-sm text-white/60 mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity line-clamp-2">{project.desc}</p>
                      </div>
                      <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <ExternalLink className="w-3.5 h-3.5 text-white" />
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>
            </div>
          )}
        </div>
      </section>

      {/* ─── Modal ─── */}
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
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative bg-black/50">
                <div className="relative aspect-video">
                  {selectedProject.isVideo ? (
                    <video
                      key={selectedProject.images[galleryIndex]}
                      src={selectedProject.images[galleryIndex]}
                      className="w-full h-full object-contain"
                      controls
                      autoPlay
                    />
                  ) : (
                    <>
                      <img
                        src={selectedProject.images[galleryIndex]}
                        alt={`${selectedProject.title} — ${galleryIndex + 1}`}
                        className="w-full h-full object-contain"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                    </>
                  )}

                  {selectedProject.images.length > 1 && (
                    <>
                      <button
                        onClick={prevMedia}
                        className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors z-10"
                        aria-label={t('portfolio.prev')}
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      <button
                        onClick={nextMedia}
                        className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors z-10"
                        aria-label={t('portfolio.next')}
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-black/50 backdrop-blur-sm text-sm text-white/80 z-10">
                        {galleryIndex + 1} / {selectedProject.images.length}
                      </div>
                    </>
                  )}
                </div>

                {selectedProject.images.length > 1 && (
                  <div className="flex gap-2 p-3 overflow-x-auto border-t border-white/10">
                    {selectedProject.images.map((src, idx) => {
                      const isVid = /\.(mp4|mov|avi|webm)$/i.test(src);
                      return (
                        <button
                          key={idx}
                          onClick={() => setGalleryIndex(idx)}
                          className={`relative flex-shrink-0 w-20 h-14 rounded-lg overflow-hidden transition-all ${
                            idx === galleryIndex
                              ? 'ring-2 ring-[#aaff4e] ring-offset-1 ring-offset-[#1a1a2e] opacity-100'
                              : 'opacity-60 hover:opacity-90'
                          }`}
                        >
                          {isVid ? (
                            <div className="w-full h-full bg-black flex items-center justify-center">
                              <video src={src} className="w-full h-full object-cover" muted preload="metadata" />
                              <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                                <Play className="w-4 h-4 text-white" />
                              </div>
                            </div>
                          ) : (
                            <img src={src} alt="" className="w-full h-full object-cover" />
                          )}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>

              <div className="p-6 md:p-8">
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {selectedProject.tags.map(t => (
                    <span key={t} className="text-xs font-semibold uppercase tracking-wider text-[#aaff4e]">{t}</span>
                  ))}
                </div>
                <h2 className="text-2xl md:text-3xl font-black text-white mb-3">{selectedProject.title}</h2>
                <p className="text-muted leading-relaxed">{selectedProject.desc}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ─── CTA ─── */}
      <section className="py-24 px-6 relative">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-12 md:p-16 rounded-3xl bg-gradient-to-br from-[#aaff4e]/10 to-[#9a6bff]/10 border border-white/10 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-black mb-6 text-default">{t('portfolio.ctaTitle')}</h2>
            <p className="text-muted mb-10 text-lg">{t('portfolio.ctaDesc')}</p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-10 py-5 rounded-full bg-gradient-to-r from-[#aaff4e] to-[#9a6bff] text-black font-bold text-lg hover:scale-105 transition-transform"
            >
              {t('portfolio.ctaBtn')} <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
