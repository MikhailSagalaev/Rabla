import React from 'react';
import ProductCard from '../Product/ProductCard';
import { ProductData } from '../../types/product.types';

interface ProductGridProps {
  products: ProductData[];
  columns?: number;
}

const ProductGrid: React.FC<ProductGridProps> = ({ products, columns = 4 }) => {
  return (
    <div className={`grid grid-cols-${columns} gap-5`}>
      {products.map((product, index) => (
        <ProductCard key={index} {...product} />
      ))}
    </div>
  );
}; 

export {};