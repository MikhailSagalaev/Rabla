import { createContext, useContext } from 'react';
import { MedusaProduct } from '../types/product.types';

type MedusaContextType = {
  data: {
    cart?: {
      id: string;
      items: MedusaProduct[];
    };
  };
};

export const MedusaContext = createContext<MedusaContextType>({ data: {} });
export const useMedusaCart = () => useContext(MedusaContext); 