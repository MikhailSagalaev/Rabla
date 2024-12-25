import { useState, useEffect } from 'react';
import { ProductData } from '../types/product.types';

interface CompareContextType {
  items: ProductData[];
  addToCompare: (product: ProductData) => void;
  removeFromCompare: (productId: number) => void;
  isInCompare: (productId: number) => boolean;
}

export const useCompare = () => {
  const [items, setItems] = useState<ProductData[]>(() => {
    try {
      const savedItems = localStorage.getItem('compareItems');
      return savedItems ? JSON.parse(savedItems) : [];
    } catch (e) {
      console.error('Error parsing compare items:', e);
      return [];
    }
  });

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

  return {
    items,
    addToCompare,
    removeFromCompare,
    isInCompare
  } as CompareContextType;
}; 