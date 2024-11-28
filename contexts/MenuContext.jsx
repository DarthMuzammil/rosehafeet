'use client'

import React, { createContext, useContext, useState, ReactNode } from 'react';

const MenuContext = createContext(undefined);

export function MenuContextProvider({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const setMenu = (value) => {
    setIsMenuOpen(value);
  };

  return (
    <MenuContext.Provider value={{ isMenuOpen, setMenu }}>
      {children}
    </MenuContext.Provider>
  );
}

export function useMenuContext() {
  const context = useContext(MenuContext);
  if (context === undefined) {
    throw new Error('useMenuContext must be used within a ContextProvider');
  }
  return context;
}

