import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import PricingSection from '../components/PricingSection';

export default function Pricing() {
  return (
    <div className="relative">
      <section className="pt-40 pb-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-black text-[#0A0A0A] mb-6">Tarifs</h1>
            <p className="text-xl text-[#6B7280]">Des forfaits adaptés à votre croissance. Paiement en 2 fois disponible.</p>
          </motion.div>
        </div>
      </section>

      <PricingSection />
    </div>
  );
}