import React, { createContext, useState, useContext } from 'react';

// Creamos el contexto
const LanguageContext = createContext();

// Proveedor del contexto que envolverá tu App
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('es'); // 'es' por defecto

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === 'es' ? 'en' : 'es'));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Hook personalizado para usar el idioma fácilmente
export const useLanguage = () => useContext(LanguageContext);