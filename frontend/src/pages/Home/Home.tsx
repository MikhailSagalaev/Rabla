import React from 'react';
import { motion } from 'framer-motion';
import Header from '../../components/Layout/Header/Header';
import Footer from '../../components/Layout/Footer/Footer';
import CategoryCard from '../../components/UI/CategoryCard';
import ProductCard from '../../components/Product/ProductCard';
import ProductNavigation from '../../components/UI/ProductNavigation';
import { categories } from '../../data/categories';
import { popularProducts, recommendedProducts } from '../../data/products';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* Hero секция */}
        <section className="relative h-[800px] bg-[#F5F5F5]">
          <div className="container mx-auto px-4 h-full flex items-center">
            <motion.div 
              className="max-w-[600px]"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h1 className="text-7xl font-light mb-8">
                Ванны
              </h1>
              <p className="text-xl mb-12">
                Широкий выбор ванн различных форм, размеров и материалов изготовления
              </p>
              <button className="bg-black text-white px-12 py-4 text-lg hover:bg-gray-800 transition-colors">
                Перейти в каталог
              </button>
            </motion.div>
          </div>
          <div className="absolute right-0 top-0 h-full w-1/2">
            <img 
              src="/images/hero-bath.jpg" 
              alt="Ванна" 
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        {/* Категории */}
        <section className="py-32">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl mb-16">КАТЕГОРИИ</h2>
            <div className="grid grid-cols-4 gap-8">
              {categories.map((category) => (
                <CategoryCard key={category.id} {...category} />
              ))}
            </div>
          </div>
        </section>

        {/* Популярные товары */}
        <section className="bg-white py-32">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-16">
              <h2 className="text-4xl">ПОПУЛЯРНЫЕ</h2>
              <ProductNavigation />
            </div>
            <div className="grid grid-cols-3 gap-8">
              {popularProducts.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </div>
        </section>

        {/* Дизайн интерьера */}
        <section className="py-32 bg-[#F5F5F5]">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 gap-16">
              <div>
                <h2 className="text-4xl mb-8">ДИЗАЙН ИНТЕРЬЕРА</h2>
                <p className="text-xl mb-12">
                  Мы поможем вам создать идеальный дизайн для вашей ванной комнаты
                </p>
                <button className="bg-black text-white px-12 py-4 text-lg hover:bg-gray-800 transition-colors">
                  Оставить заявку
                </button>
              </div>
              <div className="relative">
                <img 
                  src="/images/interior-design.jpg" 
                  alt="Дизайн интерьера" 
                  className="w-full h-[500px] object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Рекомендуемые */}
        <section className="py-32">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-16">
              <h2 className="text-4xl">РЕКОМЕНДУЕМЫЕ</h2>
              <ProductNavigation />
            </div>
            <div className="grid grid-cols-4 gap-8">
              {recommendedProducts.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;