import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProductCard from '../Product/ProductCard';
import ProductNavigation from '../UI/ProductNavigation';
import { popularProducts } from '../../data/products';

const PopularProductsSection: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState(0);
  const productsPerPage = 3;
  const totalPages = Math.ceil(popularProducts.length / productsPerPage);

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentPage((prev) => (prev + newDirection + totalPages) % totalPages);
  };

  const currentProducts = popularProducts.slice(
    currentPage * productsPerPage,
    (currentPage + 1) * productsPerPage
  );

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <section className="mt-36 max-md:mt-10">
      <div className="flex justify-between items-center mb-12">
        <motion.h2 
          className="text-4xl tracking-tight"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          ПОПУЛЯРНЫЕ
        </motion.h2>
        <ProductNavigation 
          onPrev={() => paginate(-1)} 
          onNext={() => paginate(1)}
          currentPage={currentPage + 1}
          totalPages={totalPages}
        />
      </div>

      <div className="relative overflow-hidden">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentPage}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            className="grid grid-cols-3 gap-6"
          >
            {currentProducts.map((product) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <ProductCard {...product} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default PopularProductsSection;