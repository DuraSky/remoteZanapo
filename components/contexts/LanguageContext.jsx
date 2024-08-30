// LanguageContext.js
import React, { createContext, useState, useEffect } from "react";

import czTranslations from "/locales/cz.json";
import skTranslations from "/locales/sk.json";

export const LanguageContext = createContext();

const translations = {
  cz: czTranslations,
  sk: skTranslations,
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("cz");
  const [currentTranslations, setCurrentTranslations] = useState(
    translations[language]
  );

  useEffect(() => {
    setCurrentTranslations(translations[language]);
  }, [language]);

  const switchLanguage = (locale) => {
    setLanguage(locale);
  };

  return (
    <LanguageContext.Provider
      value={{ language, currentTranslations, switchLanguage }}
    >
      {children}
    </LanguageContext.Provider>
  );
};
