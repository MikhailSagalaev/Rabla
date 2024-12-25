import React from 'react';
import Header from '../../components/Layout/Header/Header';
import Footer from '../../components/Layout/Footer/Footer';

const PaymentPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-zinc-100">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 pt-[180px]">
        <h1 className="text-4xl mb-8">Оплата</h1>
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl mb-4">Способы оплаты</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Банковской картой онлайн</li>
              <li>Наличными при получении</li>
              <li>Безналичный расчет для юридических лиц</li>
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PaymentPage; 