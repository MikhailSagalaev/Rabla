import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Layout/Header/Header';
import Footer from '../../components/Layout/Footer/Footer';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
  category: string;
  weight: number;
  article: string;
  selected?: boolean;
}

const CartPage: React.FC = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: 'AMBRELLA Techno Spot TA110 черный',
      price: 648,
      quantity: 1,
      image: '/images/products/1.jpg',
      category: 'СВЕТИЛЬНИК НАКЛАДНОЙ',
      weight: 0.357,
      article: '84498286',
      selected: true
    },
    {
      id: 2,
      name: 'AMBRELLA Techno Spot TA110 черный',
      price: 648,
      quantity: 1,
      image: '/images/products/1.jpg',
      category: 'СВЕТИЛЬНИК НАКЛАДНОЙ',
      weight: 0.4,
      article: '82664800',
      selected: true
    }
  ]);

  const totalWeight = cartItems.reduce((sum, item) => 
    sum + (item.selected ? item.weight * item.quantity : 0), 0
  ).toFixed(3);

  const selectedItems = cartItems.filter(item => item.selected);
  const allSelected = cartItems.length > 0 && cartItems.every(item => item.selected);

  const updateQuantity = (id: number, newQuantity: number) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity: Math.max(1, newQuantity) } : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const toggleSelect = (id: number) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, selected: !item.selected } : item
      )
    );
  };

  const toggleSelectAll = () => {
    setCartItems(items =>
      items.map(item => ({ ...item, selected: !allSelected }))
    );
  };

  const removeSelected = () => {
    setCartItems(items => items.filter(item => !item.selected));
  };

  const subtotal = cartItems.reduce((sum, item) => 
    sum + (item.selected ? item.price * item.quantity : 0), 0
  );

  return (
    <div className="min-h-screen flex flex-col bg-zinc-100 overflow-x-hidden">
      <Header isFixed={true} />
      <main className="flex-grow container mx-auto px-4 py-8 pt-[180px]">
        <button 
          onClick={() => navigate(-1)}
          className="mb-8 hover:opacity-70 transition-opacity"
        >
          ← Назад
        </button>

        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-8">
            <h1 className="text-3xl">Корзина</h1>
            <div className="text-sm text-gray-500">
              {selectedItems.length} товара • Вес — {totalWeight} кг
            </div>
          </div>
        </div>

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
              <div key={item.id} className="flex gap-6 p-6 bg-white">
                <input
                  type="checkbox"
                  checked={item.selected}
                  onChange={() => toggleSelect(item.id)}
                  className="w-4 h-4 mt-1"
                />
                
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-32 h-32 object-cover"
                />
                
                <div className="flex-grow">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="text-sm text-gray-500 mb-1">
                        Арт. {item.article}
                      </div>
                      <div className="text-sm text-gray-500 uppercase mb-1">
                        {item.category}
                      </div>
                      <h3 className="font-medium">{item.name}</h3>
                    </div>
                    <button 
                      onClick={() => removeItem(item.id)}
                      className="text-gray-400 hover:text-black transition-colors"
                    >
                      ×
                    </button>
                  </div>

                  <div className="flex justify-between items-end mt-4">
                    <div className="flex items-center border border-gray-300">
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="px-4 py-2 hover:bg-gray-100"
                      >
                        -
                      </button>
                      <span className="px-4 py-2">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="px-4 py-2 hover:bg-gray-100"
                      >
                        +
                      </button>
                    </div>
                    <div className="font-medium">
                      {item.price * item.quantity} ₽
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Сводка заказа */}
          <div className="bg-white p-6 h-fit">
            <div className="flex items-center gap-2 mb-6">
              <input
                type="checkbox"
                id="isLegalEntity"
                className="w-4 h-4"
              />
              <label htmlFor="isLegalEntity">
                Я юридическое лицо
              </label>
            </div>
            
            <div className="space-y-4 mb-6">
              <div className="flex justify-between">
                <span>Товары ({selectedItems.length})</span>
                <span>{subtotal} ₽</span>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              <input
                type="text"
                placeholder="ВВЕДИТЕ КОД КУПОНА"
                className="w-full p-4 border border-gray-300 uppercase text-sm"
              />
              <input
                type="text"
                placeholder="ВВЕДИТЕ КОД СЕРТИФИКАТА"
                className="w-full p-4 border border-gray-300 uppercase text-sm"
              />
            </div>

            <div className="flex justify-between text-xl font-medium mb-8">
              <span>Итого:</span>
              <span>{subtotal} ₽</span>
            </div>

            <button 
              onClick={() => navigate('/checkout')} 
              className="w-full bg-black text-white py-4 hover:bg-gray-900 transition-colors uppercase"
            >
              Перейти к оформлению
            </button>

            <div className="text-sm text-gray-500 mt-4 text-center">
              Дата и стоимость доставки или самовывоза определяются при оформлении заказа
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CartPage; 