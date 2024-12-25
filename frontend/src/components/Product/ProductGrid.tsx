import React from 'react';
import { ProductData } from '../../types/product.types';
import ProductCard from './ProductCard';

interface ProductGridProps {
  products: ProductData[];
  viewMode?: 'grid' | 'list';
  loading?: boolean;
  columns?: number;
}

const ProductGrid: React.FC<ProductGridProps> = ({ 
  products, 
  viewMode = 'grid',
  loading = false,
  columns = 3 
}) => {
  return (
    <div className="space-y-6">
      <div className={`grid gap-6 ${
        viewMode === 'grid' 
          ? `grid-cols-${columns}` 
          : 'grid-cols-1'
      }`}>
        {products.map(product => (
          <ProductCard 
            key={product.id}
            product={product}
            viewMode={viewMode}
          />
        ))}
      </div>
      
      {loading && (
        <div className="flex justify-center mt-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-black" />
        </div>
      )}
    </div>
  );
};

export default ProductGrid;