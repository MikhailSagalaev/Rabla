import React from 'react';
import Header from '../../components/Layout/Header/Header';
import Footer from '../../components/Layout/Footer/Footer';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-zinc-100">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 pt-[180px]">
        <h1 className="text-4xl mb-8">О компании</h1>
        {/* Контент страницы */}
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage; 