import { useState, useEffect } from 'react';
import { ProductData } from '../types/product.types';
import { useMedusaCart } from '../contexts/MedusaContext';
import { useCart as useCartContext } from '../contexts/CartContext';

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

  const addToCart = async (productId: string) => {
    const { data: cart } = useMedusaCart();
    const { create, update, refresh } = useCartContext();

    if (cart) {
      await update(cart.id, { 
        items: [...cart.items, { variant_id: productId, quantity: 1 }] 
      });
    } else {
      await create({ items: [{ variant_id: productId, quantity: 1 }] });
    }
    await refresh();
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