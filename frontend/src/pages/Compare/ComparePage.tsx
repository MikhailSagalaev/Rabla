import React from 'react';
import { motion } from 'framer-motion';
import { useCompare } from '../../contexts/CompareContext';
import Header from '../../components/Layout/Header/Header';
import Footer from '../../components/Layout/Footer/Footer';
import ProductCard from '../../components/Product/ProductCard';
import { ProductData } from '../../types/product.types';

const ComparePage: React.FC = () => {
  const { items: compareItems, removeFromCompare } = useCompare();

  const renderProductCell = (item: ProductData, field: keyof ProductData): string => {
    const value = item[field];
    
    if (field === 'price') {
      return `${value} ₽`;
    }
    
    if (field === 'weight') {
      return `${value} ${item.unit}`;
    }

    if (value !== undefined && value !== null) {
      if (typeof value === 'object') {
        return JSON.stringify(value);
      }
      return String(value);
    }

    return '-';
  };

  const compareFields: (keyof ProductData)[] = ['price', 'manufacturer', 'article', 'weight'];

  return (
    <div className="min-h-screen flex flex-col bg-zinc-100">
      <Header />
      
      <main className="flex-grow container mx-auto px-20 py-16">
        {/* Хлебные крошки */}
        <div className="flex gap-1.5 text-sm mb-8">
          <span>Главная</span>
          <span>/</span>
          <span>Сравнение товаров</span>
        </div>

        <h1 className="text-4xl mb-8">Сравнение товаров</h1>

        {compareItems.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-gray-500 mb-8">В сравнении пока нет товаров</p>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => window.history.back()}
              className="px-8 py-3 bg-black text-white hover:bg-gray-900 transition-colors"
            >
              Вернуться к покупкам
            </motion.button>
          </div>
        ) : (
          <div>
            <div className="overflow-x-auto">
              <table className="w-full" style={{ minWidth: '800px', tableLayout: 'fixed' }}>
                <colgroup>
                  <col style={{ width: '200px' }} />
                  {compareItems.map(item => (
                    <col key={item.id} style={{ width: '300px' }} />
                  ))}
                </colgroup>
                <thead>
                  <tr className="border-b">
                    <th className="p-4 text-left">Товар</th>
                    {compareItems.map(item => (
                      <th key={item.id} className="p-4">
                        <div className="relative">
                          <button
                            onClick={() => removeFromCompare(item.id)}
                            className="absolute -top-2 -right-2 text-gray-400 hover:text-black"
                          >
                            ✕
                          </button>
                          <ProductCard product={item} />
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {compareFields.map((field) => (
                    <tr key={field} className="border-b">
                      <td className="p-4 capitalize">{field}</td>
                      {compareItems.map(item => (
                        <td key={item.id} className="p-4 text-center">
                          {renderProductCell(item, field)}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default ComparePage; 