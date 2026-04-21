import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, Mail, Phone, MapPin, Clock, CheckCircle } from 'lucide-react';

const services = [
  'Création de site web',
  'Design & Branding',
  'Gestion des réseaux sociaux',
  'Publicité digitale',
  'SEO & Référencement',
  'Autre'
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#aaff4e]/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#ff44da]/10 rounded-full blur-[150px]" />
      </div>

      <section className="pt-40 pb-16 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="text-sm font-bold uppercase tracking-widest text-[#aaff4e] mb-4 block">Parlons de votre projet</span>
            <h1 className="text-5xl md:text-6xl font-black mb-6">Contact</h1>
            <p className="text-xl text-[#9CA3AF]">Nous sommes impatients de discuter de vos besoins et de vous accompagner.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
            >
              <div className="p-8 rounded-2xl bg-white/5 border border-white/20">
                <h3 className="text-xl font-bold mb-6">Informations de contact</h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#aaff4e]/10 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-[#aaff4e]" />
                    </div>
                    <div>
                      <p className="text-sm text-[#9CA3AF] mb-1">Email</p>
                      <a href="mailto:neweradigitaleagency@gmail.com" className="font-medium hover:text-[#aaff4e] transition-colors">neweradigitaleagency@gmail.com</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#9a6bff]/10 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-[#9a6bff]" />
                    </div>
                    <div>
                      <p className="text-sm text-[#9CA3AF] mb-1">Téléphone / WhatsApp</p>
                      <p className="font-medium">+225 05 03 14 53 27 </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#ff44da]/10 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-[#ff44da]" />
                    </div>
                    <div>
                      <p className="text-sm text-[#9CA3AF] mb-1">Adresse</p>
                      <p className="font-medium">Abidjan, Cocody<br />Côte d'Ivoire</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#00d4ff]/10 flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-[#00d4ff]" />
                    </div>
                    <div>
                      <p className="text-sm text-[#9CA3AF] mb-1">Horaires</p>
                      <p className="font-medium">Lun - Ven: 9h - 18h</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8 rounded-2xl bg-white/5 border border-white/20 mt-8">
                <h3 className="text-xl font-bold mb-6">Contactez-nous directement</h3>
                <a
                  href="https://wa.me/2250503145327"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 rounded-xl neda-gradient text-white font-bold text-lg hover:scale-[1.02] transition-transform flex items-center justify-center gap-2"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                  Discuter sur WhatsApp
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="p-8 md:p-10 rounded-2xl bg-white/5 border border-white/20">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-16"
                  >
                    <div className="w-20 h-20 rounded-full bg-[#aaff4e]/20 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-10 h-10 text-[#aaff4e]" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Message envoyé !</h3>
                    <p className="text-[#9CA3AF] mb-8">Merci pour votre message. Nous vous répondrons dans les plus brefs délais (sous 24h).</p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                    >
                      Envoyer un autre message
                    </button>
                  </motion.div>
                ) : (
                  <>
                    <h3 className="text-2xl font-bold mb-2">Envoyez-nous un message</h3>
                    <p className="text-[#9CA3AF] mb-8">Remplissez le formulaire ci-dessous et nous vous répondrons rapidement.</p>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium mb-2 text-white">Nom complet *</label>
                          <input
                            type="text"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-3.5 rounded-xl bg-white border border-gray-300 focus:border-[#aaff4e] focus:outline-none transition-colors text-[#0A0A0A] placeholder-[#9CA3AF]"
                            placeholder="Jean Dupont"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2 text-white">Email *</label>
                          <input
                            type="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-3.5 rounded-xl bg-white border border-gray-300 focus:border-[#aaff4e] focus:outline-none transition-colors text-[#0A0A0A] placeholder-[#9CA3AF]"
                            placeholder="jean@exemple.com"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium mb-2 text-white">Téléphone</label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-3.5 rounded-xl bg-white border border-gray-300 focus:border-[#aaff4e] focus:outline-none transition-colors text-[#0A0A0A] placeholder-[#9CA3AF]"
                            placeholder="+225 07 XX XX XX XX"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2 text-white">Service souhaité</label>
                          <select
                            name="service"
                            value={formData.service}
                            onChange={handleChange}
                            className="w-full px-4 py-3.5 rounded-xl bg-white border border-gray-300 focus:border-[#aaff4e] focus:outline-none transition-colors appearance-none cursor-pointer text-[#0A0A0A]"
                          >
                            <option value="" className="bg-white">Sélectionner un service</option>
                            {services.map(s => (
                              <option key={s} value={s} className="bg-white">{s}</option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2 text-white">Message *</label>
                        <textarea
                          name="message"
                          required
                          rows={5}
                          value={formData.message}
                          onChange={handleChange}
                          className="w-full px-4 py-3.5 rounded-xl bg-white border border-gray-300 focus:border-[#aaff4e] focus:outline-none transition-colors resize-none text-[#0A0A0A] placeholder-[#9CA3AF]"
                          placeholder="Décrivez votre projet ou posez-nous vos questions..."
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-4 rounded-xl bg-gradient-to-r from-[#aaff4e] to-[#9a6bff] text-black font-bold text-lg hover:scale-[1.02] transition-transform disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                      >
                        {isSubmitting ? (
                          <>
                            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                            </svg>
                            Envoi en cours...
                          </>
                        ) : (
                          <>
                            Envoyer le message <Send className="w-5 h-5" />
                          </>
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
    </div>
  );
}