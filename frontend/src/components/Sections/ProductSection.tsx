import React from 'react';
import FeatureCard from '../Feature/FeatureCard';
import { features } from '../../data/features';
import { motion } from 'framer-motion'; // Опционально для анимаций

const ProductSection: React.FC = () => {
  return (
    <section className="flex flex-col items-center px-4 mt-32 w-full max-w-[1286px] mx-auto max-md:mt-10">
      <motion.h2 
        className="text-4xl tracking-tight text-black text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        почему нужно выбрать нас
      </motion.h2>

      <div className="grid grid-cols-3 gap-5 w-full max-md:grid-cols-1">
        {features.map((feature, index) => (
          <motion.div
            key={feature.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <FeatureCard {...feature} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProductSection; 