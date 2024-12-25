import React from 'react';
import ProductCard from '../Product/ProductCard';
import { interiorProducts } from '../../data/products';
import { Product } from '../../types/product.types';

const InteriorDesignSection: React.FC = () => {
  return (
    <section className="flex flex-col pl-20 mt-12 w-full max-md:pl-5 max-md:mt-10 max-md:max-w-full">
      {/* Верхняя секция с продуктами */}
      <div className="self-end w-full max-w-[1285px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          {interiorProducts.map((product: Product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              viewMode="grid" 
            />
          ))}
        </div>
      </div>

      {/* Изображение интерьера */}
      <div className="flex shrink-0 self-center mt-32 max-w-full h-[770px] w-[1218px] max-md:mt-10">
        <img 
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/d10f70fe2f7fefcd7fbe60c1f5baeaa984f78fbb4ae86dddd97e76286f630c4f" 
          alt="Interior Design" 
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      {/* Нижняя секция с продуктами */}
      <div className="self-center mt-2.5 w-full max-w-[1065px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          {interiorProducts.map((product) => (
            <div key={product.id} className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow items-start text-xl text-black max-md:mt-10">
                <div className="text-xs tracking-widest leading-none text-right uppercase">
                  {product.category}
                </div>
                <div className="self-stretch mt-2.5 leading-5">
                  {product.name}
                </div>
                <div className="mt-5 leading-snug text-right">
                  {product.price}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InteriorDesignSection;