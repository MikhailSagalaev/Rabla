import React from 'react';
import { motion } from 'framer-motion';
import Header from '../../components/Layout/Header/Header';
import Footer from '../../components/Layout/Footer/Footer';
import CategoriesSection from '../../components/Sections/CategoriesSection';
import PopularProductsSection from '../../components/Sections/PopularProductsSection';
import RecommendedProductsSection from '../../components/Sections/RecommendedProductsSection';
import BrandSection from '../../components/Sections/BrandSection';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#f2f2f2]">
      <Header />
      
      {/* Hero секция */}
      <section className="relative h-screen w-full">
        <div className="absolute inset-0">
          <img 
            src="/images/hero/main-bg.png" 
            alt="Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/50" />
        </div>
        
        <div className="relative h-full container mx-auto px-20">
          <div className="h-full flex items-center justify-end">
            <div className="max-w-[600px] text-white">
              <h1 className="text-7xl font-light mb-8">Ванны</h1>
              <p className="text-xl mb-12">
                Широкий выбор ванн различных форм, размеров и материалов изготовления
              </p>
              <button className="bg-white text-black px-12 py-4 text-lg hover:bg-gray-100 transition-colors">
                Перейти в каталог
              </button>
            </div>
          </div>
        </div>

        {/* Скролл индикатор */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <ScrollIndicator />
        </div>
      </section>

      {/* Бренд ESTIMA */}
      <BrandSection />

      {/* Категории */}
      <section className="container mx-auto px-20 mt-32">
        <h2 className="text-4xl mb-12">Категории</h2>
        <CategoriesSection />
      </section>

      {/* Популярное */}
      <section className="container mx-auto px-20 mt-32">
        <h2 className="text-4xl mb-12">Популярное</h2>
        <PopularProductsSection />
      </section>

      {/* Рекомендуем */}
      <section className="container mx-auto px-20 mt-32 mb-32">
        <h2 className="text-4xl mb-12">Рекомендуем</h2>
        <RecommendedProductsSection />
      </section>

      <Footer />
    </div>
  );
};

const ScrollIndicator = () => (
  <svg width="21" height="32" viewBox="0 0 21 32" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="1" y="1" width="19" height="30" rx="9.5" />
    <circle cx="10.5" cy="10" r="3" fill="currentColor" />
  </svg>
);

export default Home;