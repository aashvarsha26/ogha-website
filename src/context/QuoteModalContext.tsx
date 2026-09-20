'use me';
'use client';

import React, { createContext, useContext, useState } from 'react';

interface QuoteModalContextType {
  isOpen: boolean;
  productName: string;
  openQuoteModal: (productName?: string) => void;
  closeQuoteModal: () => void;
}

const QuoteModalContext = createContext<QuoteModalContextType | undefined>(undefined);

export const QuoteModalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [productName, setProductName] = useState('');

  const openQuoteModal = (pName?: string) => {
    setProductName(pName || '');
    setIsOpen(true);
  };

  const closeQuoteModal = () => {
    setIsOpen(false);
    setProductName('');
  };

  return (
    <QuoteModalContext.Provider value={{ isOpen, productName, openQuoteModal, closeQuoteModal }}>
      {children}
    </QuoteModalContext.Provider>
  );
};

export const useQuoteModal = () => {
  const context = useContext(QuoteModalContext);
  if (!context) {
    throw new Error('useQuoteModal must be used within a QuoteModalProvider');
  }
  return context;
};
