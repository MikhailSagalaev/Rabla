import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '../../components/Layout/Header/Header';
import Footer from '../../components/Layout/Footer/Footer';
import ProductGrid from '../../components/Product/ProductGrid';
import { products } from '../../data/products';
import { ProductData } from '../../types/product.types';

interface ViewMode {
  grid: 'grid';
  list: 'list';
}

const GridIcon: React.FC = () => (
  <svg width="17" height="17" viewBox="0 0 17 17" fill="none" stroke="currentColor">
    <rect x="1" y="1" width="6" height="6" />
    <rect x="10" y="1" width="6" height="6" />
    <rect x="1" y="10" width="6" height="6" />
    <rect x="10" y="10" width="6" height="6" />
  </svg>
);

const ListIcon: React.FC = () => (
  <svg width="13" height="17" viewBox="0 0 13 17" fill="none" stroke="currentColor">
    <rect x="1" y="1" width="11" height="2" />
    <rect x="1" y="7" width="11" height="2" />
    <rect x="1" y="13" width="11" height="2" />
  </svg>
);

const FilterIcon: React.FC = () => (
  <div className="flex flex-col gap-1">
    <div className="w-[19px] h-[7px] bg-black" />
    <div className="w-[19px] h-[7px] bg-black" />
  </div>
);

const MainCatalog: React.FC = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [loading, setLoading] = useState(false);
  const [displayedProducts, setDisplayedProducts] = useState<ProductData[]>(products.slice(0, 12));

  const loadMore = async () => {
    setLoading(true);
    try {
      const currentLength = displayedProducts.length;
      const nextProducts = products.slice(currentLength, currentLength + 12);
      setDisplayedProducts(prev => [...prev, ...nextProducts]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex overflow-hidden flex-col bg-zinc-100">
      <Header />
      
      <main className="flex flex-col self-center mt-14 w-full max-w-[1206px] px-4 max-md:mt-10">
        {/* Панель управления */}
        <div className="flex gap-5 justify-between items-center w-full max-w-[1169px] mb-8">
          {/* Фильтры и сортировка */}
          <div className="flex gap-8 items-center">
            <button className="flex gap-3 items-center hover:opacity-80 transition-opacity">
              <FilterIcon />
              <span>фильтры</span>
            </button>

            <button className="flex gap-4 items-center hover:opacity-80 transition-opacity">
              <span>по популярности</span>
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" stroke="currentColor">
                <path d="M1 1L5 5L9 1" />
              </svg>
            </button>
          </div>

          {/* Количество продуктов */}
          <span>{products.length} продуктов</span>

          {/* Переключатель вида */}
          <div className="flex gap-3 items-center">
            <span>вид каталога</span>
            <div className="flex gap-1.5">
              <button 
                onClick={() => setViewMode('grid')}
                className={`p-1 hover:opacity-80 transition-opacity ${viewMode === 'grid' ? 'opacity-100' : 'opacity-50'}`}
              >
                <GridIcon />
              </button>
              <button 
                onClick={() => setViewMode('list')}
                className={`p-1 hover:opacity-80 transition-opacity ${viewMode === 'list' ? 'opacity-100' : 'opacity-50'}`}
              >
                <ListIcon />
              </button>
            </div>
          </div>
        </div>

        {/* Сетка продуктов */}
        <ProductGrid 
          products={displayedProducts}
          viewMode={viewMode}
          loading={loading}
        />

        {/* Кнопка "Показать больше" */}
        {displayedProducts.length < products.length && (
          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="self-center px-16 py-5 mt-24 max-w-full text-xs tracking-widest text-center text-white uppercase bg-black w-[872px] hover:bg-gray-900 transition-colors max-md:px-5 max-md:mt-10"
            onClick={loadMore}
            disabled={loading}
          >
            {loading ? 'Загрузка...' : 'показать больше товаров'}
          </motion.button>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default MainCatalog;