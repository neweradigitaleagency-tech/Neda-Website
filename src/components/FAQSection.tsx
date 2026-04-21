import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, CheckCircle } from 'lucide-react';

const faqs = [
  {
    question: 'Combien de temps dure l\'essai gratuit?',
    answer: 'Notre essai gratuit dure 7 jours complets. Vous avez accès à toutes les fonctionnalités Premium sans restriction. Aucune carte de crédit requise pour commencer.',
  },
  {
    question: 'Puis-je changer de plan à tout moment?',
    answer: 'Oui, vous pouvez passer à un plan supérieur ou inférieur à tout moment. Les changements prennent effet immédiatement et les prix sont ajustés au pro-rata.',
  },
  {
    question: 'Quels modes de paiement acceptez-vous?',
    answer: 'Nous acceptons toutes les cartes de crédit principales (Visa, Mastercard, American Express), PayPal, et les virements bancaires pour les entreprises.',
  },
  {
    question: 'Mes données sont-elles sécurisées?',
    answer: 'Absolument. Nous utilisons un chiffrement de bout en bout (TLS 1.3) et toutes vos données sont stockées sur des serveurs sécurisés conformes RGPD.',
  },
  {
    question: 'Offrez-vous un support technique?',
    answer: 'Oui, notre équipe de support est disponible 24/7 par email et chat. Les clients Standard et Premium bénéficient d\'un support prioritaire.',
  },
  {
    question: 'Puis-je annuler mon abonnement?',
    answer: 'Vous pouvez annuler à tout moment depuis votre tableau de bord. Votre accès reste actif jusqu\'à la fin de la période payée.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFaqSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#f8f6ff] to-[#eef2ff]" />
      
      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-sm font-bold uppercase tracking-widest text-[#6B7280] mb-4 block">FAQ</span>
          <h2 className="font-mono text-4xl md:text-5xl font-bold text-[#0A0A0A]">
            Questions fréquentes
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-0">
            {faqs.map((faq, i) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="border-b border-[#d1d5db]/50"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full py-5 flex items-start justify-between gap-4 text-left"
                >
                  <span className="font-mono text-[#0A0A0A] pr-4">{faq.question}</span>
                  <div className="flex-shrink-0 w-8 h-8 rounded-full border border-[#d1d5db] flex items-center justify-center">
                    {openIndex === i ? (
                      <Minus className="w-4 h-4 text-[#374151]" />
                    ) : (
                      <Plus className="w-4 h-4 text-[#374151]" />
                    )}
                  </div>
                </button>
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <p className="pb-5 text-sm text-[#6B7280] leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="sticky top-32"
          >
            <div className="bg-white/80 backdrop-blur-xl rounded-[20px] p-8 border border-gray-200/60 shadow-xl">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <div className="w-16 h-16 rounded-full bg-[#aaff4e]/20 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-[#aaff4e]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0A0A0A] mb-2">Message envoyé !</h3>
                  <p className="text-[#6B7280] text-sm mb-6">Merci pour votre message. Nous vous répondrons dans les plus brefs délais (sous 24h).</p>
                  <button
                    onClick={() => { setIsSubmitted(false); setFormData({ name: '', email: '', message: '' }); }}
                    className="px-5 py-2.5 rounded-full bg-[#0A0A0A] text-white text-sm font-medium hover:bg-[#333] transition-colors"
                  >
                    Envoyer un autre message
                  </button>
                </motion.div>
              ) : (
                <>
                  <h3 className="text-xl font-bold text-[#0A0A0A] mb-4">Vous avez une question?</h3>
                  <p className="text-[#6B7280] mb-6 leading-relaxed">
                    Notre équipe est disponible pour répondre à toutes vos questions et vous aider à bien commencer.
                  </p>
                  <form onSubmit={handleFaqSubmit} className="space-y-4">
                    <input
                      type="text"
                      placeholder="Votre nom"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#E5E7EB] bg-white text-[#0A0A0A] placeholder-[#9CA3AF] focus:outline-none focus:border-[#aaff4e]"
                    />
                    <input
                      type="email"
                      placeholder="Votre email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#E5E7EB] bg-white text-[#0A0A0A] placeholder-[#9CA3AF] focus:outline-none focus:border-[#aaff4e]"
                    />
                    <textarea
                      placeholder="Votre question"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#E5E7EB] bg-white text-[#0A0A0A] placeholder-[#9CA3AF] focus:outline-none focus:border-[#aaff4e] resize-none"
                    />
                    <button 
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3 rounded-full neda-gradient text-white font-medium hover:opacity-90 transition-colors disabled:opacity-70 flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          Envoi...
                        </>
                      ) : (
                        'Envoyer'
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}