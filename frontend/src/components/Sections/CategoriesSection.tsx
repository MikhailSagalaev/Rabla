import React from 'react';
import { motion } from 'framer-motion';
import { categories } from '../../data/categories';
import CategoryCard from '../UI/CategoryCard';

const CategoriesSection: React.FC = () => {
  return (
    <div className="grid grid-cols-4 gap-6">
      {categories.map((category, index) => (
        <motion.div
          key={category.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
        >
          <CategoryCard {...category} />
        </motion.div>
      ))}
    </div>
  );
};

export default CategoriesSection; 