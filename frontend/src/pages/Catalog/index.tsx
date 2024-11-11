import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '../../components/Layout/Header/Header';
import Footer from '../../components/Layout/Footer/Footer';
import ProductGrid from '../../components/Product/ProductGrid';
import { products } from '../../data/products';

const sortOptions = [
  { id: 'popular', name: 'По популярности' },
  { id: 'price-asc', name: 'По возрастанию цены' },
  { id: 'price-desc', name: 'По убыванию цены' },
  { id: 'name', name: 'По названию' }
];

const categories = [
  {
    id: 'baths',
    name: 'Ванны',
    subcategories: [
      { id: 'acrylic', name: 'Акриловые' },
      { id: 'cast-iron', name: 'Чугунные' },
      { id: 'steel', name: 'Стальные' }
    ]
  },
  {
    id: 'mixers',
    name: 'Смесители',
    subcategories: [
      { id: 'bath', name: 'Для ванны' },
      { id: 'sink', name: 'Для раковины' },
      { id: 'shower', name: 'Для душа' }
    ]
  },
  // Добавьте остальные категории
];

const CatalogPage: React.FC = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [displayedProducts, setDisplayedProducts] = useState(products.slice(0, 12));
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState(sortOptions[0]);

  const toggleCategory = (categoryId: string) => {
    setExpandedCategories(prev => 
      prev.includes(categoryId)
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  const handleSort = (option: typeof sortOptions[0]) => {
    setSelectedSort(option);
    setIsSortOpen(false);
    
    let sorted = [...displayedProducts];
    switch (option.id) {
      case 'price-asc':
        sorted.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
        break;
      case 'price-desc':
        sorted.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
        break;
      case 'name':
        sorted.sort((a, b) => a.name.localeCompare(b.name));
        break;
      // По умолчанию - по популярности
    }
    setDisplayedProducts(sorted);
  };

  const loadMore = () => {
    const currentLength = displayedProducts.length;
    const nextProducts = products.slice(currentLength, currentLength + 12);
    setDisplayedProducts(prev => [...prev, ...nextProducts]);
  };

  return (
    <div className="flex overflow-hidden flex-col bg-zinc-100">
      <Header />
      
      {/* Hero секция */}
      <section className="relative h-screen w-full">
        <div className="absolute inset-0">
          <img 
            src="/images/main-bg.png" 
            alt="Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/50" />
        </div>
        
        <div className="relative h-full container mx-auto px-20">
          <div className="h-full flex items-center justify-end">
            <div className="max-w-[600px] text-white">
              <h1 className="text-7xl font-light mb-8">Каталог</h1>
              <p className="text-xl mb-12">
                Широкий выбор товаров для вашей ванной комнаты
              </p>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-black px-12 py-4 text-lg hover:bg-gray-100 transition-colors"
              >
                Смотреть каталог
              </motion.button>
            </div>
          </div>
        </div>

        {/* Скролл индикатор */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <motion.img 
            src="/images/scroll-indicator.svg"
            alt="Scroll"
            className="w-[21px]"
            animate={{ y: [0, 10, 0] }}
            transition={{ 
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      </section>

      {/* Основной контент */}
      <main className="container mx-auto px-20 py-16">
        {/* Хлебные крошки */}
        <div className="flex gap-1.5 text-sm mb-8">
          <span>Главная</span>
          <span>/</span>
          <span>Каталог</span>
        </div>

        {/* Панель управления */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex gap-8 items-center">
            {/* Сортировка */}
            <div className="relative">
              <button 
                onClick={() => setIsSortOpen(!isSortOpen)}
                className="flex gap-4 items-center hover:opacity-80 transition-opacity"
              >
                <span>{selectedSort.name}</span>
                <motion.svg 
                  width="10" 
                  height="6" 
                  viewBox="0 0 10 6" 
                  fill="none" 
                  stroke="currentColor"
                  animate={{ rotate: isSortOpen ? 180 : 0 }}
                >
                  <path d="M1 1L5 5L9 1" />
                </motion.svg>
              </button>

              <AnimatePresence>
                {isSortOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-lg py-2 z-10 min-w-[200px]"
                  >
                    {sortOptions.map(option => (
                      <button
                        key={option.id}
                        onClick={() => handleSort(option)}
                        className={`w-full text-left px-4 py-2 hover:bg-gray-100 transition-colors ${
                          selectedSort.id === option.id ? 'bg-gray-50' : ''
                        }`}
                      >
                        {option.name}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Количество товаров */}
          <span>{displayedProducts.length} из {products.length} продуктов</span>

          {/* Вид каталога */}
          <div className="flex gap-3 items-center">
            <span>вид каталога</span>
            <div className="flex gap-1.5">
              <button 
                onClick={() => setViewMode('grid')}
                className={`p-2 hover:opacity-80 transition-opacity ${viewMode === 'grid' ? 'opacity-100' : 'opacity-50'}`}
              >
                <svg width="17" height="17" viewBox="0 0 17 17" fill="none" stroke="currentColor">
                  <rect x="1" y="1" width="6" height="6" />
                  <rect x="10" y="1" width="6" height="6" />
                  <rect x="1" y="10" width="6" height="6" />
                  <rect x="10" y="10" width="6" height="6" />
                </svg>
              </button>
              <button 
                onClick={() => setViewMode('list')}
                className={`p-2 hover:opacity-80 transition-opacity ${viewMode === 'list' ? 'opacity-100' : 'opacity-50'}`}
              >
                <svg width="13" height="17" viewBox="0 0 13 17" fill="none" stroke="currentColor">
                  <rect x="1" y="1" width="11" height="2" />
                  <rect x="1" y="7" width="11" height="2" />
                  <rect x="1" y="13" width="11" height="2" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Боковая панель с категориями */}
          <aside className="w-64 flex-shrink-0">
            <nav className="sticky top-4">
              <ul className="space-y-2">
                {categories.map(category => (
                  <li key={category.id}>
                    <div className="border-b border-gray-200">
                      <button
                        onClick={() => toggleCategory(category.id)}
                        className="w-full flex justify-between items-center px-4 py-2 hover:bg-gray-50 transition-colors"
                      >
                        <span>{category.name}</span>
                        <motion.svg
                          width="10"
                          height="6"
                          viewBox="0 0 10 6"
                          fill="none"
                          stroke="currentColor"
                          animate={{ rotate: expandedCategories.includes(category.id) ? 180 : 0 }}
                        >
                          <path d="M1 1L5 5L9 1" />
                        </motion.svg>
                      </button>

                      <AnimatePresence>
                        {expandedCategories.includes(category.id) && (
                          <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: 'auto' }}
                            exit={{ height: 0 }}
                            className="overflow-hidden"
                          >
                            <ul className="pl-4 py-2">
                              {category.subcategories.map(sub => (
                                <li key={sub.id}>
                                  <button
                                    onClick={() => setSelectedCategory(sub.id)}
                                    className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 transition-colors ${
                                      selectedCategory === sub.id ? 'text-black font-medium' : 'text-gray-600'
                                    }`}
                                  >
                                    {sub.name}
                                  </button>
                                </li>
                              ))}
                            </ul>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          {/* Основной контент */}
          <div className="flex-grow">
            <ProductGrid products={displayedProducts} viewMode={viewMode} />

            {/* Кнопка "Показать больше" */}
            {displayedProducts.length < products.length && (
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={loadMore}
                className="w-full px-16 py-5 mt-8 text-xs tracking-widest text-white uppercase bg-black hover:bg-gray-900 transition-colors"
              >
                показать больше товаров
              </motion.button>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CatalogPage;