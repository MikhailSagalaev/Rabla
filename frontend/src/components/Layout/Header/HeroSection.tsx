import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {
  return (
    <div className="flex flex-col items-start self-end mt-36 mr-16 max-w-full leading-none w-[452px] max-md:mt-10 max-md:mr-2.5">
      <h1 className="self-stretch text-5xl tracking-normal max-md:text-4xl">
        Экспресс доставка
      </h1>
      <p className="mt-4 text-base">в течении одного часа</p>
      <Link 
        to="/catalog"
        className="flex gap-3 px-6 py-5 mt-8 text-xs tracking-widest text-center text-black uppercase bg-stone-50 hover:bg-stone-100 transition-colors"
      >
        <span>перейти в каталог</span>
        <img 
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a4e3b8792f12e4b038df5e424c7bd7c1a772c8c569bd1d076192388a4a893a16" 
          alt="Arrow" 
          className="object-contain shrink-0 self-start w-3.5 aspect-[1.4]"
          loading="lazy" 
        />
      </Link>
    </div>
  );
};

export default HeroSection;