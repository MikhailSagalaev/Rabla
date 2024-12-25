import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { catalogData, Category } from '../../../data/catalog';

const NavigationMenu: React.FC = () => {
  const [activeCategories, setActiveCategories] = useState<number[]>([]);
  const [isCatalogOpen, setIsCatalogOpen] = useState(false);

  const handleMouseEnter = (categoryId: number, level: number) => {
    setActiveCategories(prev => [...prev.slice(0, level), categoryId]);
  };

  return (
    <nav className="flex justify-between items-start w-full">
      {/* Left Navigation */}
      <div className="flex flex-col items-start w-full">
        <div className="flex justify-between text-white mb-2 mt-6 w-full">
          <div 
            className="relative flex items-center"
            onMouseEnter={() => setIsCatalogOpen(true)}
            onMouseLeave={() => setIsCatalogOpen(false)}
          >
            <button className="flex items-center gap-2 whitespace-nowrap">
              <span>Каталог</span>
              <motion.svg
                width="10" height="6" viewBox="0 0 10 6"
                fill="none" animate={{ rotate: isCatalogOpen ? 180 : 0 }}
              >
                <path d="M1 1L5 5L9 1" stroke="currentColor" />
              </motion.svg>
            </button>

            <AnimatePresence>
              {isCatalogOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full left-0 mt-4 bg-black/90 backdrop-blur-sm shadow-xl rounded-lg z-50"
                >
                  <div className="flex min-w-[600px]">
                    {/* Первый уровень */}
                    <div className="w-1/3 border-r border-white/10">
                      {catalogData.map(category => (
                        <div
                          key={category.id}
                          className="px-4 py-3 hover:bg-white/10 cursor-pointer"
                          onMouseEnter={() => handleMouseEnter(category.id, 0)}
                        >
                          <Link to={category.path} className="text-white">
                            {category.name}
                          </Link>
                        </div>
                      ))}
                    </div>

                    {/* Второй уровень */}
                    {activeCategories[0] && (
                      <div className="w-1/3 border-r border-white/10">
                        {catalogData
                          .find(c => c.id === activeCategories[0])
                          ?.children?.map(subCategory => (
                            <div
                              key={subCategory.id}
                              className="px-4 py-3 hover:bg-white/10 cursor-pointer"
                              onMouseEnter={() => handleMouseEnter(subCategory.id, 1)}
                            >
                              <Link to={subCategory.path} className="text-white">
                                {subCategory.name}
                              </Link>
                            </div>
                          ))}
                      </div>
                    )}

                    {/* Третий уровень */}
                    {activeCategories[1] && (
                      <div className="w-1/3">
                        {catalogData
                          .find(c => c.id === activeCategories[0])
                          ?.children?.find(c => c.id === activeCategories[1])
                          ?.children?.map(subCategory => (
                            <div
                              key={subCategory.id}
                              className="px-4 py-3 hover:bg-white/10 cursor-pointer"
                            >
                              <Link to={subCategory.path} className="text-white">
                                {subCategory.name}
                              </Link>
                            </div>
                          ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <Link to="/brands" className="hover:opacity-80 transition-opacity whitespace-nowrap">
            Бренды
          </Link>
          <Link to="/new" className="hover:opacity-80 transition-opacity whitespace-nowrap">
            Новинки
          </Link>
          <Link to="/popular" className="hover:opacity-80 transition-opacity whitespace-nowrap">
            Популярное
          </Link>
          <Link to="/hits" className="hover:opacity-80 transition-opacity whitespace-nowrap">
            Хиты продаж
          </Link>
          <Link to="/hits" className="hover:opacity-80 transition-opacity whitespace-nowrap">
            Вас может заинтересовать
          </Link>
          <Link to="/about" className="hover:opacity-80 transition-opacity whitespace-nowrap">
            О нас
          </Link>
          <Link to="/payment" className="hover:opacity-80 transition-opacity whitespace-nowrap">
            Оплата и доставка
          </Link>
          <Link to="/contacts" className="hover:opacity-80 transition-opacity whitespace-nowrap">
            Контакты
          </Link>
        </div>
        <div className="border border-white border-solid max-h-[1px] w-full" />
      </div>
    </nav>
  );
};

export default NavigationMenu; 