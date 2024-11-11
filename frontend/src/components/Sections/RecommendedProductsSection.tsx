import React, { useState } from 'react';
import ProductCard from '../Product/ProductCard';
import Button from '../UI/Button';
import { recommendedProducts } from '../../data/products';
import { Product } from '../../types/product.types';

const RecommendedProductsSection: React.FC = () => {
  const [visibleProducts, setVisibleProducts] = useState(6);
  const hasMoreProducts = visibleProducts < recommendedProducts.length;

  const handleShowMore = () => {
    setVisibleProducts(prev => Math.min(prev + 6, recommendedProducts.length));
  };

  return (
    <section className="flex flex-col items-center pl-20 mt-12 w-full max-md:pl-5 max-md:mt-10 max-md:max-w-full">
      <h2 className="mt-36 text-4xl tracking-tight leading-none text-black max-md:mt-10 max-md:max-w-full">
        вас может заинтересовать
      </h2>

      <div className="mt-12 w-full max-w-[1043px] max-md:mt-10 max-md:max-w-full">
        <div className="grid grid-cols-3 gap-5 max-md:grid-cols-1">
          {recommendedProducts.slice(0, visibleProducts).map((product: Product) => (
            <div key={product.id} className="w-full">
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </div>

      {hasMoreProducts && (
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