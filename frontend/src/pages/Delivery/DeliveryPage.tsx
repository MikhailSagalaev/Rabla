import React from 'react';
import Header from '../../components/Layout/Header/Header';
import Footer from '../../components/Layout/Footer/Footer';

const DeliveryPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-zinc-100">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 pt-[180px]">
        <h1 className="text-4xl mb-8">Доставка</h1>
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl mb-4">Способы доставки</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Доставка курьером по Москве</li>
              <li>Самовывоз из магазина</li>
              <li>Доставка транспортной компанией</li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl mb-4">Стоимость доставки</h2>
            {/* Добавить информацию о стоимости */}
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DeliveryPage; 