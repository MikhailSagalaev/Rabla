import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProductCard from '../Product/ProductCard';
import { brandProducts } from '../../data/products';

const ArrowButton: React.FC<{ direction: 'left' | 'right'; onClick: () => void }> = ({ direction, onClick }) => (
  <motion.button
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    className={`absolute top-1/2 ${direction === 'left' ? '-left-12' : '-right-12'} 
    transform -translate-y-1/2 w-10 h-10 text-black hover:opacity-80 transition-opacity z-10`}
    onClick={onClick}
  >
    <svg 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2"
      className={direction === 'left' ? 'rotate-180' : ''}
    >
      <path d="M9 18l6-6-6-6" />
    </svg>
  </motion.button>
);

const BrandSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesPerView = 4;
  const totalSlides = Math.ceil(brandProducts.length / slidesPerView);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <section className="container mx-auto px-20 mt-32 mb-48">
      {/* Заголовок */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-24"
      >
        <h2 className="text-5xl font-light">
          Новый бренд <span className="font-medium">ESTIMA</span>
        </h2>
      </motion.div>

      {/* Основной блок */}
      <div className="relative">
        {/* Фоновый блок с картинкой */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="relative bg-[#1A1A1A] overflow-hidden h-[600px]"
        >
          <motion.img 
            initial={{ scale: 1.1 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            src="/images/brand/estima-bg.jpg" 
            alt="ESTIMA background" 
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80" />
        </motion.div>

        {/* Слайдер с товарами */}
        <div className="absolute -bottom-32 left-0 right-0">
          <div className="relative px-12">
            <ArrowButton direction="left" onClick={prevSlide} />
            <ArrowButton direction="right" onClick={nextSlide} />
            
            <div className="overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className="grid grid-cols-4 gap-6"
                >
                  {brandProducts
                    .slice(currentSlide * slidesPerView, (currentSlide + 1) * slidesPerView)
                    .map((product, index) => (
                      <ProductCard key={product.id} {...product} viewMode="grid" />
                    ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandSection;