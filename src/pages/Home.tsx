import { motion } from 'motion/react';
import { ArrowRight, Sparkles, Layout, Code, TrendingUp } from 'lucide-react';
import LogoMarquee from '../components/LogoMarquee';
import FAQSection from '../components/FAQSection';
import { useLang } from '../i18n/context';

export default function Home() {
  const { t } = useLang();
  return (
    <div className="relative">
      <section className="pt-40 pb-24 px-6 relative min-h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-[#f0f5ff] to-[#f5f0ff]" />
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#9a6bff]/10 rounded-full blur-[150px]" />
          <div className="absolute bottom-1/4 right-1/3 w-[500px] h-[500px] bg-[#aaff4e]/10 rounded-full blur-[150px]" />
        </div>
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7 text-left"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-default backdrop-blur-sm mb-8">
                <Sparkles className="w-4 h-4 text-[#aaff4e]" />
                <span className="text-sm text-muted">{t('home.heroBadge')}</span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight mb-6 sm:mb-8">
                <span className="neda-gradient-text">{t('home.heroTitle1')}</span>
                <br />
                <span className="text-default">{t('home.heroTitle2')}</span>
              </h1>

              <p className="text-base sm:text-lg text-muted leading-relaxed mb-8 sm:mb-10 max-w-xl">
                {t('home.heroDesc')}
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a
                  href="https://wa.me/2250503145327"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group px-6 sm:px-8 py-3 sm:py-4 rounded-full neda-gradient text-white font-semibold text-base sm:text-lg hover:scale-105 transition-transform flex items-center justify-center gap-2"
                >
                  {t('home.heroCTA')}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-5 relative"
            >
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=1000&fit=crop&q=85"
                  alt={t('home.heroImgAlt')}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 border border-[#aaff4e]/30 rounded-2xl -z-10" />
              <div className="absolute -top-4 -right-4 w-24 h-24 border border-[#9a6bff]/30 rounded-2xl -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      <LogoMarquee />

      <section className="py-24 px-6 bg-default">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-sm font-bold uppercase tracking-widest neda-gradient-text mb-4 block">{t('home.servicesLabel')}</span>
            <h2 className="text-4xl md:text-5xl font-bold text-default mb-6">
              {t('home.servicesTitle')}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-10 sm:mb-12">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl bg-card border border-default hover:border-[#aaff4e] hover:shadow-lg transition-all"
            >
              <div className="w-14 h-14 rounded-2xl neda-gradient flex items-center justify-center mb-5">
                <Layout className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-default mb-3">{t('home.service1Title')}</h3>
              <p className="text-muted mb-4">{t('home.service1Desc')}</p>
              <ul className="space-y-2 text-sm text-muted">
                <li>• {t('home.service1L1')}</li>
                <li>• {t('home.service1L2')}</li>
                <li>• {t('home.service1L3')}</li>
                <li>• {t('home.service1L4')}</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl bg-card border border-default hover:border-[#aaff4e] hover:shadow-lg transition-all"
            >
              <div className="w-14 h-14 rounded-2xl neda-gradient flex items-center justify-center mb-5">
                <Code className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-default mb-3">{t('home.service2Title')}</h3>
              <p className="text-muted mb-4">{t('home.service2Desc')}</p>
              <ul className="space-y-2 text-sm text-muted">
                <li>• {t('home.service2L1')}</li>
                <li>• {t('home.service2L2')}</li>
                <li>• {t('home.service2L3')}</li>
                <li>• {t('home.service2L4')}</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl bg-card border border-default hover:border-[#aaff4e] hover:shadow-lg transition-all"
            >
              <div className="w-14 h-14 rounded-2xl neda-gradient flex items-center justify-center mb-5">
                <TrendingUp className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-default mb-3">{t('home.service3Title')}</h3>
              <p className="text-muted mb-4">{t('home.service3Desc')}</p>
              <ul className="space-y-2 text-sm text-muted">
                <li>• {t('home.service3L1')}</li>
                <li>• {t('home.service3L2')}</li>
                <li>• {t('home.service3L3')}</li>
                <li>• {t('home.service3L4')}</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 relative">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-12 md:p-16 rounded-3xl bg-gradient-to-br from-[#aaff4e]/10 to-[#9a6bff]/10 border border-white/10 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-black mb-6 text-default">{t('home.ctaTitle')}</h2>
            <p className="text-muted mb-10 text-lg">{t('home.ctaDesc')}</p>
            <a
              href="https://wa.me/2250503145327"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-10 py-5 rounded-full neda-gradient text-white font-semibold text-lg hover:scale-105 transition-transform"
            >
              {t('home.ctaBtn')}
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
