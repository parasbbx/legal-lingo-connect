
import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '@/data/translations';

type Language = 'en' | 'hi' | 'es' | 'fr' | 'ar';
type TranslationKey = keyof typeof translations.en;

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: TranslationKey) => string;
  availableLanguages: { code: Language; name: string }[];
}

const availableLanguages = [
  { code: 'en' as Language, name: 'English' },
  { code: 'hi' as Language, name: 'हिन्दी' },
  { code: 'es' as Language, name: 'Español' },
  { code: 'fr' as Language, name: 'Français' },
  { code: 'ar' as Language, name: 'العربية' }
];

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('en');

  useEffect(() => {
    // Check if there's a language preference stored in localStorage
    const storedLanguage = localStorage.getItem('preferredLanguage') as Language | null;
    
    if (storedLanguage && availableLanguages.some(lang => lang.code === storedLanguage)) {
      setLanguageState(storedLanguage);
    } else {
      // Try to detect browser language
      const browserLanguage = navigator.language.split('-')[0] as Language;
      
      if (availableLanguages.some(lang => lang.code === browserLanguage)) {
        setLanguageState(browserLanguage);
      }
    }
  }, []);

  const setLanguage = (newLanguage: Language) => {
    setLanguageState(newLanguage);
    localStorage.setItem('preferredLanguage', newLanguage);
    
    // Set the HTML lang attribute
    document.documentElement.lang = newLanguage;
    
    // If RTL language (like Arabic)
    document.documentElement.dir = newLanguage === 'ar' ? 'rtl' : 'ltr';
  };

  const t = (key: TranslationKey): string => {
    const langTranslations = translations[language] || translations.en;
    return langTranslations[key] || translations.en[key] || key;
  };

  return (
    <LanguageContext.Provider 
      value={{ 
        language, 
        setLanguage, 
        t,
        availableLanguages
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
