import React from 'react';
import { motion } from 'framer-motion';
import { ProductData } from '../../types/product.types';

const ProductCard: React.FC<ProductData> = ({ 
  discount, 
  image,
  category, 
  name, 
  price 
}) => {
  return (
    <motion.article 
      className="flex flex-col bg-white group"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <div className="relative p-5">
        {discount && (
          <div className="absolute top-5 left-5 bg-[#B8E4A9] px-2 py-1 text-xs">
            {discount}
          </div>
        )}
        <img 
          src={image}
          alt={name}
          className="w-full aspect-square object-contain"
        />
        <div className="flex flex-col">
          <span className="text-xs tracking-widest uppercase text-gray-500">
            {category}
          </span>
          <h3 className="mt-2 text-lg font-medium line-clamp-2">
            {name}
          </h3>
          <div className="mt-auto pt-4 flex justify-between items-center">
            <span className="text-xl font-bold">
              {price}
            </span>
            <button 
              className="px-4 py-2 bg-black text-white text-sm rounded-md opacity-0 group-hover:opacity-100 transition-opacity"
              onClick={(e) => {
                e.preventDefault();
                // Add to cart logic
              }}
            >
              В корзину
            </button>
          </div>
        </div>
      </div>
    </motion.article>
  );
};

export default ProductCard;