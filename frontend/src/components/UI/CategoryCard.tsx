import React from 'react';
import { motion } from 'framer-motion';
import { Category } from '../../types/category.types';

interface CategoryCardProps extends Category {}

const CategoryCard: React.FC<CategoryCardProps> = ({
  title,
  image,
  count
}) => {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="relative h-[400px] group cursor-pointer"
    >
      <img 
        src={image} 
        alt={title}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-40 transition-all">
        <div className="absolute bottom-8 left-8 text-white">
          <h3 className="text-2xl mb-2">{title}</h3>
          <span>{count} товаров</span>
        </div>
      </div>
    </motion.div>
  );
};

export default CategoryCard; 