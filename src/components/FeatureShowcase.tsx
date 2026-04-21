import { motion } from 'motion/react';
import { Palette, Code, TrendingUp } from 'lucide-react';

const services = [
  { 
    icon: Palette, 
    title: 'Design Web & UI/UX', 
    desc: 'Création de sites modernes et responsives. Expérience utilisateur optimisée pourconverter vos visiteurs en clients.'
  },
  { 
    icon: Code, 
    title: 'Développement Web', 
    desc: 'Sites vitrines et applications web performantes. Technologies récentes et code propre pour des performances optimales.'
  },
  { 
    icon: TrendingUp, 
    title: 'Stratégie Digitale & Contenu', 
    desc: 'Gestion des réseaux sociaux et création de contenu engageant pour développer votre présence en ligne.'
  },
];

export default function FeatureShowcase() {
  return (
    <section className="py-24 px-6 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-bold uppercase tracking-widest neda-gradient-text mb-4 block">Nos Services</span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A0A0A]">
            Ce que nous faisons
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="group relative p-8 rounded-3xl bg-gray-50 hover:bg-white border border-transparent hover:border-gray-100 transition-all duration-300 cursor-pointer"
            >
              <div className="absolute inset-0 rounded-3xl neda-gradient opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
              
              <div className="relative">
                <div className="w-16 h-16 rounded-2xl neda-gradient flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-[#0A0A0A] mb-4">{service.title}</h3>
                <p className="text-[#6B7280] leading-relaxed">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}