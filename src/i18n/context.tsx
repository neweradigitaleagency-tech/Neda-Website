import React, { createContext, useContext, useState, useEffect } from 'react';
import fr from './fr';
import en from './en';

type Lang = 'fr' | 'en';
type Translations = Record<string, any>;

const translations: Record<Lang, Translations> = { fr, en };

interface LangContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (path: string) => string;
}

const LangContext = createContext<LangContextType | null>(null);

const getNested = (obj: any, path: string): string => {
  const keys = path.split('.');
  let current = obj;
  for (const key of keys) {
    if (current && typeof current === 'object' && key in current) {
      current = current[key];
    } else {
      return path;
    }
  }
  return typeof current === 'string' ? current : path;
};

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => {
    if (typeof window !== 'undefined') {
      return (localStorage.getItem('neda-lang') as Lang) || 'fr';
    }
    return 'fr';
  });

  useEffect(() => {
    localStorage.setItem('neda-lang', lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const t = (path: string) => getNested(translations[lang], path);

  return (
    <LangContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error('useLang must be used inside LangProvider');
  return ctx;
}
