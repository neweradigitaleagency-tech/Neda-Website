import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import logo from '/logo.svg';

const navLinks = [
  { path: '/', label: 'Accueil' },
  { path: '/services', label: 'Services' },
  { path: '/portfolio', label: 'Portfolio' },
  { path: '/pricing', label: 'Tarifs' },
  { path: '/faq', label: 'FAQ' },
  { path: '/contact', label: 'Contact' },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <div className="min-h-screen bg-white text-[#0A0A0A] font-sans selection:bg-[#0047FF] selection:text-white">
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-xl border-b border-gray-100' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className={`flex justify-between items-center transition-all duration-300 ${
            isScrolled ? 'py-4' : 'py-5'
          }`}>
<Link to="/" className="flex items-center gap-2">
              <img src={logo} alt="neda" className="h-14 sm:h-18 md:h-24 w-auto max-w-[120px] sm:max-w-[160px] md:max-w-none" />
            </Link>
            
<div className="hidden md:flex items-center gap-1">
               {navLinks.map((link) => (
                 <Link
                   key={link.path}
                   to={link.path}
className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 group overflow-hidden ${
                      location.pathname === link.path
                        ? 'text-[#0A0A0A]'
                        : 'text-[#6B7280] hover:text-white'
                    }`}
                  >
                    <span className={`absolute inset-0 rounded-lg transition-all duration-300 opacity-0 group-hover:opacity-100 ${
                      location.pathname === link.path ? 'hidden' : 'neda-gradient'
                    }`} />
                    <span className={`relative z-10 ${
                      location.pathname === link.path ? 'text-[#0A0A0A] font-semibold' : ''
                    }`}>
                     {link.label}
                   </span>
                   <span className={`absolute bottom-1 left-4 right-4 h-0.5 rounded-full transition-all duration-300 ${
                     location.pathname === link.path
                       ? 'bg-gradient-to-r from-[#aaff4e] via-[#9a6bff] to-[#ff44da]'
                       : 'bg-white scale-x-0 group-hover:scale-x-100 bg-gradient-to-r from-[#aaff4e] via-[#9a6bff] to-[#ff44da]'
                   }`} />
                 </Link>
               ))}
             </div>

<div className="hidden md:flex items-center gap-4">
                <a 
                  href="https://wa.me/2250759595959" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative px-6 py-2.5 rounded-full text-sm font-semibold text-[#0f0f0f] neda-gradient-border hover:scale-105 transition-transform overflow-hidden"
                >
                  <span className="absolute inset-0 rounded-full neda-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative z-10 group-hover:text-white transition-colors duration-300 flex items-center gap-2">
                    Parlons de votre projet
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </a>
              </div>

            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg bg-gray-100"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed left-4 right-4 sm:left-auto sm:right-auto sm:w-full sm:max-w-sm top-24 mx-auto z-40 md:hidden"
          >
<div className="bg-white/95 backdrop-blur-2xl border border-gray-100 rounded-2xl p-4 shadow-xl">
              <div className="flex flex-col gap-2 text-center">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                      location.pathname === link.path
                        ? 'neda-gradient text-white'
                        : 'text-[#6b7280] hover:bg-gray-100'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <a 
                  href="https://wa.me/2250759595959" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 px-4 py-3 rounded-xl text-sm font-semibold neda-gradient text-white text-center"
                >
                  Parlons de votre projet
                </a>
               </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main>{children}</main>

      <footer className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
<Link to="/" className="flex items-center gap-2 mb-4">
                <img src={logo} alt="neda" className="h-10 sm:h-14 md:h-20 w-auto" />
              </Link>
              <p className="text-[#6b7280] text-sm max-w-md leading-relaxed mb-6">
                Agence digitale basée en Côte d'Ivoire. Nous créons des expériences web exceptionnelles pour les entreprises africaines avec des solutions créatives et performantes.
              </p>
              <div className="flex gap-3">
                <a href="https://www.instagram.com/neweradigitaleagency/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-[#E4405F] hover:bg-[#E4405F] hover:text-white transition-all">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
                <a href="https://www.facebook.com/share/18dTLx2fT3/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-[#1877F2] hover:bg-[#1877F2] hover:text-white transition-all">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                <a href="https://www.tiktok.com/@neweradigitaleagency?is_from_webapp=1&sender_device=pc" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-[#000000] hover:bg-[#000000] hover:text-white transition-all">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/></svg>
                </a>
                <a href="https://www.linkedin.com/in/new-era-digitale-agency-undefined-b0a8893b9" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-[#0A66C2] hover:bg-[#0A66C2] hover:text-white transition-all">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
                <a href="https://github.com/neweradigitaleagency-tech" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-[#333333] hover:bg-[#333333] hover:text-white transition-all">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-[#9ca3af] mb-4">Navigation</h4>
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <Link key={link.path} to={link.path} className="text-sm text-[#6B7280] hover:text-[#0047FF] transition-colors">
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-[#9ca3af] mb-4">Contact</h4>
              <div className="flex flex-col gap-3 text-sm text-[#6b7280]">
                <p>Abidjan, Cocody</p>
                <p>Côte d'Ivoire</p>
                <a href="mailto:neweradigitaleagency@gmail.com" className="text-[#aaff4e] hover:underline">neweradigitaleagency@gmail.com</a>
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-[#9ca3af]">© {new Date().getFullYear()} neda. Tous droits réservés.</p>
            <p className="text-sm text-[#9ca3af]">Fait avec 💜 en Côte d'Ivoire</p>
          </div>
        </div>
      </footer>
    </div>
  );
}