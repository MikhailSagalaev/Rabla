import React from 'react';
import { motion } from 'framer-motion';
import { ProductData } from '../../types/product.types';
import { Link } from 'react-router-dom';
import { HeartIcon, CompareIcon } from '../UI/Icons/index';

interface ProductCardProps {
  id: number;
  imageSrc: string;
  name: string;
  price: string;
  category: string;
  discount?: string;
  viewMode: 'grid' | 'list';
}

const ProductCard: React.FC<ProductCardProps> = ({ 
  id, 
  imageSrc, 
  name, 
  price, 
  category,
  discount,
  viewMode 
}) => {
  return (
    <Link to={`/product/${id}`}>
      <motion.article 
        className={`flex ${viewMode === 'grid' ? 'flex-col' : 'flex-row gap-8'} bg-white group relative h-full`}
        whileHover={{ y: -5 }}
        transition={{ duration: 0.2 }}
      >
        <div className={`relative ${viewMode === 'grid' ? 'p-5' : 'p-5 w-1/3'}`}>
          {discount && (
            <div className="absolute top-0 left-0 bg-[#B8E4A9] px-2 py-1 text-xs z-10">
              {discount}
            </div>
          )}
          <img 
            src={imageSrc}
            alt={name}
            className="w-full aspect-square object-contain"
          />
          <div className="absolute top-5 right-5 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <motion.button 
              className="p-2 bg-white shadow-md rounded-full hover:bg-gray-50"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <HeartIcon className="w-5 h-5" />
            </motion.button>
            <motion.button 
              className="p-2 bg-white shadow-md rounded-full hover:bg-gray-50"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <CompareIcon className="w-5 h-5" />
            </motion.button>
          </div>
        </div>

        <div className={`${viewMode === 'grid' ? 'p-5 pt-0' : 'p-5 flex-grow'}`}>
          <span className="text-sm text-gray-500">{category}</span>
          <h3 className="text-lg font-medium mt-1">{name}</h3>
          <div className={`flex ${viewMode === 'grid' ? 'justify-between' : 'gap-4'} items-center mt-2`}>
            <span className="text-xl font-semibold">{price} ₽</span>
            <motion.button
              whileHover={{ backgroundColor: '#000000', color: '#FFFFFF' }}
              whileTap={{ scale: 0.95 }}
              className="w-12 h-12 border border-black rounded flex items-center justify-center transition-colors"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 20C9.55228 20 10 19.5523 10 19C10 18.4477 9.55228 18 9 18C8.44772 18 8 18.4477 8 19C8 19.5523 8.44772 20 9 20Z" />
                <path d="M20 20C20.5523 20 21 19.5523 21 19C21 18.4477 20.5523 18 20 18C19.4477 18 19 18.4477 19 19C19 19.5523 19.4477 20 20 20Z" />
                <path d="M1 1H5L7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583C8.75318 15.8526 9.2107 16.009 9.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583C21.0581 15.264 21.3086 14.8504 21.4 14.39L23 6H6" />
              </svg>
            </motion.button>
          </div>
        </div>
      </motion.article>
    </Link>
  );
};

export default ProductCard;