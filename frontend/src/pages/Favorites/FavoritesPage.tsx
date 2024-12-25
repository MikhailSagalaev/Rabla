import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Header from '../../components/Layout/Header/Header';
import { useFavorites } from '../../hooks/useFavorites';
import ProductCard from '../../components/Product/ProductCard';

const FavoritesPage: React.FC = () => {
  const { items: favoriteItems } = useFavorites();

  return (
    <div className="min-h-screen flex flex-col bg-zinc-100">
      <Header />
      
      <main className="flex-grow container mx-auto px-20 py-16">
        {/* Хлебные крошки */}
        <div className="flex gap-1.5 text-sm mb-8">
          <span>Главная</span>
          <span>/</span>
          <span>Избранное</span>
        </div>

        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl">Избранное</h1>
        </div>

        {favoriteItems.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-gray-500 mb-8">В избранном пока нет товаров</p>
            <Link to="/catalog">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3 bg-black text-white hover:bg-gray-900 transition-colors"
              >
                Перейти в каталог
              </motion.button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-4 gap-6">
            {favoriteItems.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default FavoritesPage; 