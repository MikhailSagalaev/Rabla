import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Product } from '../../types/product.types';

interface ProductCardProps extends Product {
  viewMode?: 'grid' | 'list';
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  category,
  price,
  discount,
  imageSrc,
  viewMode = 'grid'
}) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <Link 
        to={`/product/${id}`}
        className={`
          block bg-white rounded-lg overflow-hidden
          ${viewMode === 'list' ? 'flex gap-6 p-4' : 'flex flex-col'}
        `}
      >
        <div className={`
          relative
          ${viewMode === 'list' ? 'w-48 h-48' : 'w-full aspect-square'}
        `}>
          <img 
            src={imageSrc} 
            alt={name}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          {discount && (
            <div className="absolute top-2 left-2 bg-lime-300 px-2 py-1 text-xs font-medium">
              {discount}
            </div>
          )}
        </div>

        <div className={`
          flex flex-col
          ${viewMode === 'list' ? 'flex-1 py-2' : 'p-4'}
        `}>
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
      </Link>
    </motion.div>
  );
};

export default ProductCard;