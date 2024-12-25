import React, { createContext, useContext, useState, useEffect } from 'react';
import { ProductData } from '../types/product.types';

interface CompareContextType {
  items: ProductData[];
  addToCompare: (product: ProductData) => void;
  removeFromCompare: (productId: number) => void;
  isInCompare: (productId: number) => boolean;
}

const CompareContext = createContext<CompareContextType | undefined>(undefined);

export const CompareProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<ProductData[]>(() => {
    try {
      const savedItems = localStorage.getItem('compareItems');
      return savedItems ? JSON.parse(savedItems) : [];
    } catch (e) {
      console.error('Error parsing compare items:', e);
      return [];
    }
  });

  // Синхронизация с localStorage
  useEffect(() => {
    try {
      if (items.length > 0) {
        localStorage.setItem('compareItems', JSON.stringify(items));
      } else {
        localStorage.removeItem('compareItems');
      }
    } catch (e) {
      console.error('Error saving compare items:', e);
    }
  }, [items]);

  const isInCompare = (productId: number): boolean => {
    return items.some(item => item.id === productId);
  };

  const addToCompare = (product: ProductData) => {
    setItems(prev => {
      if (isInCompare(product.id)) {
        return prev;
      }
      return [...prev, product];
    });
  };

  const removeFromCompare = (productId: number) => {
    setItems(prev => prev.filter(item => item.id !== productId));
  };

  const value = {
    items,
    addToCompare,
    removeFromCompare,
    isInCompare
  };

  return (
    <CompareContext.Provider value={value}>
      {children}
    </CompareContext.Provider>
  );
};

export const useCompare = () => {
  const context = useContext(CompareContext);
  if (context === undefined) {
    throw new Error('useCompare must be used within a CompareProvider');
  }
  return context;
}; 