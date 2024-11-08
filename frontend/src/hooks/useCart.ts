import { useState } from 'react';

export const useCart = () => {
  const [cart, setCart] = useState<string[]>([]);

  const addToCart = (productId: string) => {
    setCart([...cart, productId]);
  };

  return { cart, addToCart };
}; 