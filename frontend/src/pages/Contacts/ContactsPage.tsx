import React from 'react';
import Header from '../../components/Layout/Header/Header';
import Footer from '../../components/Layout/Footer/Footer';

const ContactsPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-zinc-100">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 pt-[180px]">
        <h1 className="text-4xl mb-8">Контакты</h1>
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl mb-4">Наш адрес</h2>
            <p className="mb-4">г. Москва, ул. Примерная, д. 123</p>
            <h2 className="text-2xl mb-4">Телефон</h2>
            <p className="mb-4">+7 (999) 123-45-67</p>
            <h2 className="text-2xl mb-4">Email</h2>
            <p>info@estima.ru</p>
          </div>
          <div>
            {/* Здесь можно добавить карту */}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContactsPage; 