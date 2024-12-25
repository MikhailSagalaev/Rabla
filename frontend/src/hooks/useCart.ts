import { useState, useEffect } from 'react';
import { ProductData } from '../types/product.types';

export interface CartItem extends ProductData {
  quantity: number;
  selected: boolean;
}

export const useCart = () => {
  const [items, setItems] = useState<CartItem[]>(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Сохранение в localStorage при изменении
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(items));
  }, [items]);

  const addToCart = (product: ProductData) => {
    setItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id 
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1, selected: true }];
      }
    });
  };

  const removeFromCart = (productId: number) => {
    setItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId: number, quantity: number) => {
    setItems(prevItems =>
      prevItems.map(item =>
        item.id === productId
          ? { ...item, quantity: Math.max(0, quantity) }
          : item
      )
    );
  };

  const toggleSelected = (productId: number) => {
    setItems(prevItems =>
      prevItems.map(item =>
        item.id === productId
          ? { ...item, selected: !item.selected }
          : item
      )
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  return {
    items,
    addToCart,
    removeFromCart,
    updateQuantity,
    toggleSelected,
    clearCart
  };
}; 