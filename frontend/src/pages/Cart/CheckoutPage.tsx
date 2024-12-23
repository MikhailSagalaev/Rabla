import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Layout/Header/Header';
import Footer from '../../components/Layout/Footer/Footer';

interface DeliveryMethod {
  id: string;
  name: string;
}

interface PaymentMethod {
  id: string;
  name: string;
}

const CheckoutPage: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    street: '',
    house: '',
    apartment: '',
    comment: '',
    deliveryMethod: '',
    paymentMethod: ''
  });

  const deliveryMethods: DeliveryMethod[] = [
    { id: 'address', name: 'Доставка по указанному адресу' }
  ];

  const paymentMethods: PaymentMethod[] = [
    { id: 'card', name: 'Банковской картой' },
    { id: 'cash', name: 'При получении' }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь будет логика отправки заказа
    console.log(formData);
  };

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

        <h1 className="text-3xl mb-12">Оформление заказа</h1>

        <div className="grid grid-cols-[1fr,400px] gap-8">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* 1. Контактные данные */}
            <section>
              <h2 className="text-xl mb-4">1. Контактные данные</h2>
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="ВАШЕ ИМЯ"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="p-4 border border-gray-300 uppercase text-sm"
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="КОНТАКТНЫЙ НОМЕР ТЕЛЕФОНА"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="p-4 border border-gray-300 uppercase text-sm"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="ВАША ЭЛЕКТРОННАЯ ПОЧТА"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="p-4 border border-gray-300 uppercase text-sm col-span-2"
                  required
                />
              </div>
            </section>

            {/* 2. Адрес доставки */}
            <section>
              <h2 className="text-xl mb-4">2. Адрес доставки</h2>
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  name="city"
                  placeholder="ГОРОД"
                  value={formData.city}
                  onChange={handleInputChange}
                  className="p-4 border border-gray-300 uppercase text-sm"
                  required
                />
                <input
                  type="text"
                  name="street"
                  placeholder="УЛИЦА"
                  value={formData.street}
                  onChange={handleInputChange}
                  className="p-4 border border-gray-300 uppercase text-sm"
                  required
                />
                <input
                  type="text"
                  name="house"
                  placeholder="ДОМ"
                  value={formData.house}
                  onChange={handleInputChange}
                  className="p-4 border border-gray-300 uppercase text-sm"
                  required
                />
                <input
                  type="text"
                  name="apartment"
                  placeholder="КВАРТИРА"
                  value={formData.apartment}
                  onChange={handleInputChange}
                  className="p-4 border border-gray-300 uppercase text-sm"
                />
              </div>
            </section>

            {/* 3. Способ доставки */}
            <section>
              <h2 className="text-xl mb-4">3. Способ доставки</h2>
              <div className="space-y-2">
                {deliveryMethods.map(method => (
                  <label key={method.id} className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="deliveryMethod"
                      value={method.id}
                      checked={formData.deliveryMethod === method.id}
                      onChange={handleInputChange}
                      className="w-4 h-4"
                      required
                    />
                    {method.name}
                  </label>
                ))}
              </div>
            </section>

            {/* 4. Способ оплаты */}
            <section>
              <h2 className="text-xl mb-4">4. Способ оплаты</h2>
              <div className="space-y-2">
                {paymentMethods.map(method => (
                  <label key={method.id} className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value={method.id}
                      checked={formData.paymentMethod === method.id}
                      onChange={handleInputChange}
                      className="w-4 h-4"
                      required
                    />
                    {method.name}
                  </label>
                ))}
              </div>
            </section>

            {/* 5. Комментарий */}
            <section>
              <h2 className="text-xl mb-4">5. Комментарий</h2>
              <textarea
                name="comment"
                placeholder="КОММЕНТАРИЙ К ЗАКАЗУ"
                value={formData.comment}
                onChange={handleInputChange}
                className="w-full p-4 border border-gray-300 uppercase text-sm h-32 resize-none"
              />
            </section>
          </form>

          {/* Сводка заказа */}
          <div className="bg-white p-6 h-fit">
            <h2 className="font-medium mb-6">Ваш заказ:</h2>
            
            <div className="space-y-4 mb-6">
              <div className="flex justify-between">
                <span>Сумма заказа:</span>
                <span>1100 ₽</span>
              </div>
              <div className="flex justify-between">
                <span>Сумма доставки:</span>
                <span>600 ₽</span>
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
              <span>1700 ₽</span>
            </div>

            <button 
              type="submit"
              className="w-full bg-black text-white py-4 hover:bg-gray-900 transition-colors uppercase"
            >
              Оформить заказ
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CheckoutPage; 