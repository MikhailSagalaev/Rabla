import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Category {
  id: number;
  name: string;
  children?: Category[];
}

const catalogData: Category[] = [
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
          { id: 113, name: 'Асимметричные' },
          { id: 114, name: 'Овальные' }
        ]
      },
      {
        id: 12,
        name: 'Чугунные ванны',
        children: [
          { id: 121, name: 'Классические' },
          { id: 122, name: 'Ретро' },
          { id: 123, name: 'Дизайнерские' }
        ]
      },
      {
        id: 13,
        name: 'Стальные ванны',
        children: [
          { id: 131, name: 'Стандартные' },
          { id: 132, name: 'Премиум' }
        ]
      }
    ]
  },
  {
    id: 2,
    name: 'Смесители',
    children: [
      {
        id: 21,
        name: 'Для ванны',
        children: [
          { id: 211, name: 'Встраиваемые' },
          { id: 212, name: 'Напольные' },
          { id: 213, name: 'Настенные' }
        ]
      },
      {
        id: 22,
        name: 'Для раковины',
        children: [
          { id: 221, name: 'Сенсорные' },
          { id: 222, name: 'Однорычажные' },
          { id: 223, name: 'Двухвентильные' }
        ]
      },
      {
        id: 23,
        name: 'Для душа',
        children: [
          { id: 231, name: 'Душевые системы' },
          { id: 232, name: 'Душевые гарнитуры' },
          { id: 233, name: 'Душевые панели' }
        ]
      }
    ]
  },
  {
    id: 3,
    name: 'Мебель для ванной',
    children: [
      {
        id: 31,
        name: 'Тумбы с раковиной',
        children: [
          { id: 311, name: 'Подвесные' },
          { id: 312, name: 'Напольные' },
          { id: 313, name: 'Угловые' }
        ]
      },
      {
        id: 32,
        name: 'Зеркала и зеркальные шкафы',
        children: [
          { id: 321, name: 'С подсветкой' },
          { id: 322, name: 'С полкой' },
          { id: 323, name: 'С подогревом' }
        ]
      }
    ]
  },
  {
    id: 4,
    name: 'Душевые кабины',
    children: [
      {
        id: 41,
        name: 'Закрытые кабины',
        children: [
          { id: 411, name: 'С гидромассажем' },
          { id: 412, name: 'С сауной' },
          { id: 413, name: 'Стандартные' }
        ]
      },
      {
        id: 42,
        name: 'Душевые уголки',
        children: [
          { id: 421, name: 'Квадратные' },
          { id: 422, name: 'Прямоугольные' },
          { id: 423, name: 'Полукруглые' }
        ]
      }
    ]
  },
  {
    id: 5,
    name: 'Унитазы',
    children: [
      {
        id: 51,
        name: 'Подвесные унитазы',
        children: [
          { id: 511, name: 'Безободковые' },
          { id: 512, name: 'С инсталляцией' },
          { id: 513, name: 'С биде' }
        ]
      },
      {
        id: 52,
        name: 'Напольные унитазы',
        children: [
          { id: 521, name: 'Компакт' },
          { id: 522, name: 'Моноблок' },
          { id: 523, name: 'С косым выпуском' }
        ]
      }
    ]
  }
];

const CatalogMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeCategories, setActiveCategories] = useState<number[]>([]);

  const handleMouseEnter = (categoryId: number, level: number) => {
    setActiveCategories(prev => [...prev.slice(0, level), categoryId]);
  };

  return (
    <div className="relative">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 text-white"
      >
        <span>Каталог</span>
        <motion.svg 
          width="10" 
          height="6" 
          viewBox="0 0 10 6" 
          fill="none" 
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5"/>
        </motion.svg>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute top-full left-0 mt-2 bg-white shadow-xl rounded-lg z-50"
          >
            <div className="flex min-w-[600px]">
              {/* Первый уровень */}
              <div className="w-1/3 border-r border-gray-200">
                {catalogData.map(category => (
                  <div
                    key={category.id}
                    className="px-4 py-3 hover:bg-gray-100 cursor-pointer"
                    onMouseEnter={() => handleMouseEnter(category.id, 0)}
                  >
                    {category.name}
                  </div>
                ))}
              </div>

              {/* Второй уровень */}
              {activeCategories[0] && (
                <div className="w-1/3 border-r border-gray-200">
                  {catalogData
                    .find(c => c.id === activeCategories[0])
                    ?.children?.map(subCategory => (
                      <div
                        key={subCategory.id}
                        className="px-4 py-3 hover:bg-gray-100 cursor-pointer"
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
                        className="px-4 py-3 hover:bg-gray-100 cursor-pointer"
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
  );
};

export default CatalogMenu; 