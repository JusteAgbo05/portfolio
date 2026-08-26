import { createContext, useContext, useState, type ReactNode } from 'react';
import { translations, type Lang, type Translations } from './translations';

type LanguageContextValue = {
  lang: Lang;
  t: Translations;
  toggleLang: () => void;
};

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => {
    const savedLanguage = window.localStorage.getItem('language');
    return savedLanguage === 'en' ? 'en' : 'fr';
  });

  const toggleLang = () => {
    setLang((currentLanguage) => {
      const nextLanguage = currentLanguage === 'fr' ? 'en' : 'fr';
      window.localStorage.setItem('language', nextLanguage);
      return nextLanguage;
    });
  };

  return (
    <LanguageContext.Provider value={{ lang, t: translations[lang], toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }

  return context;
}
