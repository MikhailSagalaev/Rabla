import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import ProductCard from '../Product/ProductCard';
import { brandProducts } from '../../data/products';

import 'swiper/css';
import 'swiper/css/navigation';

const BrandSection: React.FC = () => {
  return (
    <section className="container mx-auto px-20 mt-32">
      {/* Заголовок */}
      <div className="relative mb-2000">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-5xl font-light mb-4">
            Новый бренд <span className="font-medium">ESTIMA</span>
          </h2>
          <Link 
            to="/catalog/estima" 
            className="inline-block text-lg hover:opacity-80 transition-opacity"
          >
            перейти к покупкам →
          </Link>
        </motion.div>

        {/* Основной блок */}
        <div className="mt-8">
          {/* Фоновый блок с картинкой */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="relative bg-[#1A1A1A] overflow-hidden h-[600px]"
          >
            <motion.img 
              initial={{ scale: 1.1 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/10306e27040109.5635f38b3451c.jpg" 
              alt="ESTIMA background" 
              className="w-full h-full object-cover opacity-50"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80" />
          </motion.div>

          {/* Слайдер с товарами */}
          <div className="relative -mt-32">
            <div className="relative px-10">
              <div 
                className="absolute -left-16 top-1/2 -translate-y-1/2 z-10 cursor-pointer hover:opacity-80 transition-opacity text-black"
                onClick={() => document.querySelector('.swiper-button-prev')?.dispatchEvent(new Event('click'))}
              >
                <svg 
                  width="32" 
                  height="32" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="1.5"
                  className="rotate-180"
                >
                  <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div 
                className="absolute -right-16 top-1/2 -translate-y-1/2 z-10 cursor-pointer hover:opacity-80 transition-opacity text-black"
                onClick={() => document.querySelector('.swiper-button-next')?.dispatchEvent(new Event('click'))}
              >
                <svg 
                  width="32" 
                  height="32" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="1.5"
                >
                  <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              
              <Swiper
                modules={[Navigation]}
                spaceBetween={24}
                slidesPerView={4}
                navigation={true}
                className="overflow-hidden [&_.swiper-button-next]:!hidden [&_.swiper-button-prev]:!hidden"
              >
                {brandProducts.map((product) => (
                  <SwiperSlide key={product.id} className="!h-auto">
                    <div className="group relative h-full">
                      <ProductCard 
                        product={product} 
                        viewMode="grid" 
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandSection;