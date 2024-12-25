import { useState, useEffect } from 'react';
import { ProductData } from '../types/product.types';

export const useFavorites = () => {
  const [items, setItems] = useState<ProductData[]>(() => {
    const savedFavorites = localStorage.getItem('favorites');
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(items));
  }, [items]);

  const addToFavorites = (product: ProductData) => {
    setItems(prevItems => {
      const isExist = prevItems.some(item => item.id === product.id);
      if (!isExist) {
        return [...prevItems, product];
      }
      return prevItems;
    });
  };

  const removeFromFavorites = (productId: number) => {
    setItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  const isInFavorites = (productId: number) => {
    return items.some(item => item.id === productId);
  };

  return {
    items,
    addToFavorites,
    removeFromFavorites,
    isInFavorites
  };
}; 