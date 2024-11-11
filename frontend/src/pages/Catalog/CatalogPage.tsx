import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '../../components/Layout/Header/Header';
import Footer from '../../components/Layout/Footer/Footer';
import ProductGrid from '../../components/Product/ProductGrid';
import { products } from '../../data/products';
import { ProductData } from '../../types/product.types';

const CatalogPage: React.FC = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [displayedProducts, setDisplayedProducts] = useState<ProductData[]>(products.slice(0, 12));

  const loadMore = () => {
    const currentLength = displayedProducts.length;
    const nextProducts = products.slice(currentLength, currentLength + 12);
    setDisplayedProducts([...displayedProducts, ...nextProducts]);
  };

  return (
    <div className="flex overflow-hidden flex-col bg-zinc-100">
      <Header />
      
      <main className="flex flex-col self-center mt-14 w-full max-w-[1206px] px-4">
        {/* Хлебные крошки */}
        <div className="flex gap-1.5 text-sm mb-8">
          <span>Главная</span>
          <span>/</span>
          <span>Каталог</span>
        </div>

        {/* Заголовок */}
        <h1 className="text-5xl mb-12">Каталог</h1>

        {/* Панель управления */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex gap-8 items-center">
            {/* Фильтры */}
            <button className="flex gap-3 items-center hover:opacity-80 transition-opacity">
              <div className="flex flex-col gap-1">
                <div className="w-[19px] h-[7px] bg-black" />
                <div className="w-[19px] h-[7px] bg-black" />
              </div>
              <span>фильтры</span>
            </button>

            {/* Сортировка */}
            <div className="flex gap-4 items-center">
              <span>по популярности</span>
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" stroke="currentColor">
                <path d="M1 1L5 5L9 1" strokeWidth="1.5" />
              </svg>
            </div>
          </div>

          {/* Количество товаров */}
          <span>{products.length} продуктов</span>

          {/* Вид каталога */}
          <div className="flex gap-3 items-center">
            <span>вид каталога</span>
            <div className="flex gap-1.5">
              <button 
                onClick={() => setViewMode('grid')}
                className={`p-2 hover:opacity-80 transition-opacity ${viewMode === 'grid' ? 'opacity-100' : 'opacity-50'}`}
              >
                <svg width="17" height="17" viewBox="0 0 17 17" fill="none" stroke="currentColor">
                  <rect x="1" y="1" width="6" height="6" strokeWidth="1.5" />
                  <rect x="10" y="1" width="6" height="6" strokeWidth="1.5" />
                  <rect x="1" y="10" width="6" height="6" strokeWidth="1.5" />
                  <rect x="10" y="10" width="6" height="6" strokeWidth="1.5" />
                </svg>
              </button>
              <button 
                onClick={() => setViewMode('list')}
                className={`p-2 hover:opacity-80 transition-opacity ${viewMode === 'list' ? 'opacity-100' : 'opacity-50'}`}
              >
                <svg width="13" height="17" viewBox="0 0 13 17" fill="none" stroke="currentColor">
                  <rect x="1" y="1" width="11" height="2" strokeWidth="1.5" />
                  <rect x="1" y="7" width="11" height="2" strokeWidth="1.5" />
                  <rect x="1" y="13" width="11" height="2" strokeWidth="1.5" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Сетка продуктов */}
        <ProductGrid products={displayedProducts} viewMode={viewMode} />

        {/* Кнопка "Показать больше" */}
        {displayedProducts.length < products.length && (
          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={loadMore}
            className="self-center px-16 py-5 mt-24 text-xs tracking-widest text-white uppercase bg-black w-[872px] hover:bg-gray-900 transition-colors"
          >
            показать больше товаров
          </motion.button>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default CatalogPage;