import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation as SwiperNavigation } from 'swiper/modules';
import ProductCard from '../Product/ProductCard';
import { products } from '../../data/products';

import 'swiper/css';
import 'swiper/css/navigation';

const PopularProductsSection: React.FC = () => {
  return (
    <div className="relative">
      {/* Стрелки навигации */}
      <div className="absolute -top-16 right-0 flex gap-4 z-10">
        <button className="swiper-button-prev !static !w-12 !h-12 border border-gray-300 after:!text-xs hover:bg-gray-100 after:!text-black" />
        <button className="swiper-button-next !static !w-12 !h-12 border border-gray-300 after:!text-xs hover:bg-gray-100 after:!text-black" />
      </div>

      {/* Слайдер */}
      <div className="mt-12">
        <Swiper
          modules={[SwiperNavigation]}
          spaceBetween={30}
          slidesPerView={4}
          navigation={{
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next',
          }}
          className="!overflow-visible"
        >
          {products.map((product) => (
            <SwiperSlide key={product.id} className="!h-auto">
              <div className="group relative h-full bg-white hover:shadow-lg transition-shadow duration-300">
                <ProductCard {...product} viewMode="grid" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default PopularProductsSection;