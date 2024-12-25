import React from 'react';
import { motion } from 'framer-motion';
import Header from '../../components/Layout/Header/Header';
import { useCart } from '../../hooks/useCart';

const CartPage: React.FC = () => {
  const { 
    items: cartItems, 
    updateQuantity, 
    removeFromCart: removeItem,
    toggleSelected,
    clearCart
  } = useCart();

  const selectedItems = cartItems.filter(item => item.selected);
  const totalPrice = selectedItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const totalWeight = selectedItems.reduce((sum, item) => {
    const weight = typeof item.weight === 'number' ? item.weight : 0;
    return sum + weight * item.quantity;
  }, 0);

  const allSelected = cartItems.length > 0 && cartItems.every(item => item.selected);

  const toggleSelectAll = () => {
    cartItems.forEach(item => {
      toggleSelected(item.id);
    });
  };

  const removeSelected = () => {
    selectedItems.forEach(item => {
      removeItem(item.id);
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-zinc-100">
      <Header />
      
      <main className="flex-grow container mx-auto px-20 py-16">
        {/* Хлебные крошки */}
        <div className="flex gap-1.5 text-sm mb-8">
          <span>Главная</span>
          <span>/</span>
          <span>Корзина</span>
        </div>

        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-8">
            <h1 className="text-3xl">Корзина</h1>
            <div className="text-sm text-gray-500">
              {selectedItems.length} товара • Вес — {totalWeight} кг
            </div>
          </div>
        </div>

        {cartItems.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-gray-500 mb-8">Корзина пуста</p>
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
          <>
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center gap-4">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={allSelected}
                    onChange={toggleSelectAll}
                    className="w-4 h-4"
                  />
                  <span>Выбрать все</span>
                </label>
              </div>
              <button
                onClick={removeSelected}
                className="text-red-500 hover:text-red-600 transition-colors"
                disabled={selectedItems.length === 0}
              >
                Удалить выбранные
              </button>
            </div>

            <div className="grid grid-cols-[1fr,400px] gap-8">
              {/* Список товаров */}
              <div className="space-y-6">
                {cartItems.map(item => (
                  <div key={item.id} className="flex gap-6 bg-white p-6">
                    <input
                      type="checkbox"
                      checked={item.selected}
                      onChange={() => toggleSelected(item.id)}
                      className="w-4 h-4 mt-1"
                    />
                    <div className="w-24 h-24 bg-gray-100">
                      <img 
                        src={item.images?.[0]} 
                        alt={item.name} 
                        className="w-full h-full object-contain" 
                      />
                    </div>
                    <div className="flex-grow">
                      <h3 className="font-medium mb-2">{item.name}</h3>
                      <div className="text-sm text-gray-500 mb-4">
                        Арт. {item.article}
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-8 h-8 flex items-center justify-center border border-gray-300 hover:bg-gray-100"
                          >
                            -
                          </button>
                          <input
                            type="number"
                            value={item.quantity}
                            onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                            className="w-16 text-center border border-gray-300 py-1"
                          />
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-8 h-8 flex items-center justify-center border border-gray-300 hover:bg-gray-100"
                          >
                            +
                          </button>
                        </div>
                        <div className="font-medium">{item.price * item.quantity} ₽</div>
                        <button 
                          onClick={() => removeItem(item.id)}
                          className="text-red-500 hover:text-red-600 transition-colors ml-auto"
                        >
                          Удалить
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Итого */}
              <div className="bg-white p-6 h-fit">
                <h2 className="text-xl font-medium mb-6">Итого</h2>
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span>Товары ({selectedItems.length})</span>
                    <span>{totalPrice} ₽</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Вес</span>
                    <span>{totalWeight} кг</span>
                  </div>
                </div>
                <button className="w-full py-3 bg-black text-white hover:bg-gray-900 transition-colors">
                  Перейти к оформлению
                </button>
              </div>
            </div>
          </>
        )}
      </main>
    </div>
  );
};

export default CartPage; 