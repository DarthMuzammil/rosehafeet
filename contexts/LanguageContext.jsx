'use client'

import React, { createContext, useContext, useState } from 'react';

const LanguageContext = createContext(undefined);

export function LanguageContextProvider({ children }) {
  const [lang, setLangValue] = useState("en");

  const setLang = (value) => {
    setLangValue(value);
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguageContext() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useMenuContext must be used within a ContextProvider');
  }
  return context;
}

