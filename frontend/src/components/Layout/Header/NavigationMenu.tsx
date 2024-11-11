import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

interface MenuItem {
  label: string;
  link: string;
  isDropdown?: boolean;
}

const menuItems: MenuItem[] = [
  { label: 'каталог', link: '/catalog', isDropdown: true },
  { label: 'бренды', link: '/brands' },
  { label: 'новинки', link: '/new' },
  { label: 'популярные', link: '/popular' },
  { label: 'хиты продаж', link: '/bestsellers' },
  { label: 'вас может заинтерисовать', link: '/recommended' },
  { label: 'о нас', link: '/about' },
  { label: 'оплата и доставка', link: '/delivery' },
  { label: 'контакты', link: '/contacts' },
];

const catalogData = [
  {
    id: 1,
    name: 'Ванны',
    children: [
      {
        id: 11,
        name: 'Акриловые ванны',
        children: [
          { id: 111, name: 'Прямоугольные' },
          { id: 112, name: 'Угловые' },
          { id: 113, name: 'Асимметричные' }
        ]
      },
      {
        id: 12,
        name: 'Чугунные ванны',
        children: [
          { id: 121, name: 'Классические' },
          { id: 122, name: 'Ретро' }
        ]
      }
    ]
  },
  // ... остальные категории
];

const NavigationMenu: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeCategories, setActiveCategories] = useState<number[]>([]);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
        setActiveCategories([]);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleMouseEnter = (categoryId: number, level: number) => {
    setActiveCategories(prev => [...prev.slice(0, level), categoryId]);
  };

  return (
    <nav className="relative flex flex-wrap gap-2.5 justify-between items-start mt-6 w-full text-base leading-none text-center text-white">
      {menuItems.map((item, index) => (
        <React.Fragment key={index}>
          {item.isDropdown ? (
            <div className="relative" ref={dropdownRef}>
              <button 
                className="flex items-center gap-1.5 px-px py-1 leading-none whitespace-nowrap hover:opacity-80 transition-opacity"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                {item.label}
                <motion.svg 
                  width="10" height="6" viewBox="0 0 10 6" fill="none"
                  animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5"/>
                </motion.svg>
              </button>

              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 mt-2 bg-black/90 backdrop-blur-sm rounded-lg shadow-lg z-50"
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
                            {category.name}
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
                                {subCategory.name}
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
                                {subCategory.name}
                              </div>
                            ))}
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ) : (
            <Link 
              to={item.link} 
              className="px-px py-1 whitespace-nowrap hover:opacity-80 transition-opacity"
            >
              {item.label}
            </Link>
          )}
        </React.Fragment>
      ))}
      <div className="border border-white border-solid min-h-[1px] w-full mt-4" />
    </nav>
  );
};

export default NavigationMenu; 