import { motion } from 'motion/react';
import { useLang } from '../i18n/context';
import { Link } from 'react-router-dom';
import { ArrowRight, Layout, Share2, Rocket, MapPin, Palette, Code, Megaphone, BarChart3, Search, Layers, Bot } from 'lucide-react';





export default function Services() {
  const { t } = useLang();

  const services = [
    {
      icon: Layout,
      title: t('services.s1Title'),
      desc: t('services.s1Desc'),
      features: [t('services.s1f1'), t('services.s1f2'), t('services.s1f3'), t('services.s1f4')],
      color: '#aaff4e',
      gradient: 'from-[#aaff4e]/20 to-transparent'
    },
    {
      icon: Code,
      title: t('services.s2Title'),
      desc: t('services.s2Desc'),
      features: [t('services.s2f1'), t('services.s2f2'), t('services.s2f3'), t('services.s2f4')],
      color: '#00d4ff',
      gradient: 'from-[#00d4ff]/20 to-transparent'
    },
    {
      icon: Palette,
      title: t('services.s3Title'),
      desc: t('services.s3Desc'),
      features: [t('services.s3f1'), t('services.s3f2'), t('services.s3f3'), t('services.s3f4')],
      color: '#9a6bff',
      gradient: 'from-[#9a6bff]/20 to-transparent'
    },
    {
      icon: Share2,
      title: t('services.s4Title'),
      desc: t('services.s4Desc'),
      features: [t('services.s4f1'), t('services.s4f2'), t('services.s4f3'), t('services.s4f4')],
      color: '#ff44da',
      gradient: 'from-[#ff44da]/20 to-transparent'
    },
    {
      icon: Megaphone,
      title: t('services.s5Title'),
      desc: t('services.s5Desc'),
      features: [t('services.s5f1'), t('services.s5f2'), t('services.s5f3'), t('services.s5f4')],
      color: '#ffd700',
      gradient: 'from-[#ffd700]/20 to-transparent'
    },
    {
      icon: Search,
      title: t('services.s6Title'),
      desc: t('services.s6Desc'),
      features: [t('services.s6f1'), t('services.s6f2'), t('services.s6f3'), t('services.s6f4')],
      color: '#ff6b35',
      gradient: 'from-[#ff6b35]/20 to-transparent'
    },
    {
      icon: Layers,
      title: t('services.s7Title'),
      desc: t('services.s7Desc'),
      features: [t('services.s7f1'), t('services.s7f2'), t('services.s7f3'), t('services.s7f4')],
      color: '#00ff88',
      gradient: 'from-[#00ff88]/20 to-transparent'
    },
    {
      icon: Bot,
      title: t('services.s8Title'),
      desc: t('services.s8Desc'),
      features: [t('services.s8f1'), t('services.s8f2'), t('services.s8f3'), t('services.s8f4')],
      color: '#a855f7',
      gradient: 'from-[#a855f7]/20 to-transparent'
    },
  ];

  const process = [
    { step: '01', title: t('services.process1'), desc: t('services.process1Desc') },
    { step: '02', title: t('services.process2'), desc: t('services.process2Desc') },
    { step: '03', title: t('services.process3'), desc: t('services.process3Desc') },
    { step: '04', title: t('services.process4'), desc: t('services.process4Desc') },
  ];
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
            <span className="text-sm font-bold uppercase tracking-widest text-[#aaff4e] mb-4 block">{t('services.label')}</span>
            <h1 className="text-5xl md:text-6xl font-black mb-6 text-default">{t('services.title')}</h1>
            <p className="text-xl text-muted">{t('services.desc')}</p>
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
                <h3 className="font-bold mb-1 text-default">{p.title}</h3>
                <p className="text-sm text-muted">{p.desc}</p>
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
                <h3 className="text-xl font-bold mb-3 text-default">{service.title}</h3>
                <p className="text-muted text-sm mb-6 leading-relaxed">{service.desc}</p>
                <ul className="space-y-2">
                  {service.features.map(f => (
                    <li key={f} className="flex items-center gap-2 text-sm text-muted">
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
            <h2 className="text-3xl md:text-4xl font-black mb-6 text-default">{t('services.ctaTitle')}</h2>
            <p className="text-muted mb-10 text-lg">{t('services.ctaDesc')}</p>
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-2 px-10 py-5 rounded-full bg-gradient-to-r from-[#aaff4e] to-[#9a6bff] text-black font-bold text-lg hover:scale-105 transition-transform"
            >
              {t('services.ctaBtn')} <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
