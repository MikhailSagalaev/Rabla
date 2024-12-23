import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';
import Header from '../../components/Layout/Header/Header';
import Footer from '../../components/Layout/Footer/Footer';
import ProductGrid from '../../components/Product/ProductGrid';
import { products } from '../../data/products';
import { ProductData } from '../../types/product.types';
import ScrollIndicator from '../../components/UI/ScrollIndicator';

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
  const { category } = useParams<{ category: string }>();
  const [viewMode, setViewMode] = useState<ViewMode['grid'] | ViewMode['list']>('grid');
  const [loading, setLoading] = useState(false);
  const [displayedProducts, setDisplayedProducts] = useState<ProductData[]>(products.slice(0, 12));

  const loadMore = () => {
    setLoading(true);
    setTimeout(() => {
      const currentLength = displayedProducts.length;
      const nextProducts = products.slice(currentLength, currentLength + 12);
      setDisplayedProducts([...displayedProducts, ...nextProducts]);
      setLoading(false);
    }, 500);
  };

  return (
    <div className="flex overflow-hidden flex-col bg-zinc-100">
      <Header />
      
      <section className="relative h-screen w-full">
        <div className="absolute inset-0">
          <img 
            src="/images/hero/main-bg.png" 
            alt="Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/50" />
        </div>
        
        <div className="relative h-full container mx-auto px-20">
          <div className="h-full flex items-end justify-between pb-36">
            <div className="text-white">
              <div className="flex gap-2 text-sm mb-8">
                <a href="/" className="hover:text-black">Главная</a>
                <span>/</span>
                <a href="/catalog" className="hover:text-black">Каталог</a>
                <span>/</span>
                <span className="text-black">{category}</span>
              </div>
            </div>
            <div className="max-w-[600px] text-white">
              <h1 className="text-7xl font-light mb-8">{category}</h1>
            </div>
          </div>
        </div>

        {/* Скролл индикатор */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <ScrollIndicator />
        </div>
      </section>

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

export default MainCatalog;