import React, { useState } from 'react';
import ProductCard from '../Product/ProductCard';
import Button from '../UI/Button';
import { getRecommendedProducts } from '../../data/products';
import { ProductData } from '../../types/product.types';

const RecommendedProductsSection: React.FC = () => {
  const [visibleProducts, setVisibleProducts] = useState(6);
  const products = getRecommendedProducts(visibleProducts);

  const handleShowMore = () => {
    setVisibleProducts(prev => Math.min(prev + 6, getRecommendedProducts().length));
  };

  return (
    <section className="flex flex-col items-center pl-20 mt-12 w-full max-md:pl-5 max-md:mt-10 max-md:max-w-full">
      <h2 className="mt-36 text-4xl tracking-tight leading-none text-black max-md:mt-10 max-md:max-w-full">
        вас может заинтересовать
      </h2>

      <div className="mt-12 w-full max-w-[1043px] max-md:mt-10 max-md:max-w-full">
        <div className="grid grid-cols-3 gap-5 max-md:grid-cols-1">
          {products.map((product: ProductData) => (
            <div key={product.id} className="w-full">
              <ProductCard 
                product={product} 
                viewMode="grid" 
              />
            </div>
          ))}
        </div>
      </div>

      {visibleProducts < getRecommendedProducts().length && (
        <Button 
          onClick={handleShowMore}
          fullWidth
          className="mt-12 max-w-[1043px] max-md:mt-10"
        >
          показать больше товаров
        </Button>
      )}
    </section>
  );
};

export default RecommendedProductsSection;