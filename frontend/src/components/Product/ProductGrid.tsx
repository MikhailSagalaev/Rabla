import React from 'react';
import ProductCard from './ProductCard';
import { Product } from '../../types/product.types';

interface ProductGridProps {
  products: Product[];
  viewMode?: 'grid' | 'list';
  loading?: boolean;
}

const ProductGrid: React.FC<ProductGridProps> = ({ 
  products, 
  viewMode = 'grid',
  loading = false 
}) => {
  if (loading) {
    return <div className="animate-pulse">Loading...</div>;
  }

  return (
    <div className={`
      ${viewMode === 'grid' 
        ? 'grid grid-cols-3 gap-6' 
        : 'flex flex-col gap-4'
      }
    `}>
      {products.map((product) => (
        <ProductCard 
          key={product.id} 
          {...product} 
          viewMode={viewMode}
        />
      ))}
    </div>
  );
};

export default ProductGrid;