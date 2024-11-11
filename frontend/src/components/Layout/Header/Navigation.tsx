import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Navigation: React.FC = () => {
  return (
    <nav className="flex flex-wrap gap-9 w-full">
      <div className="flex flex-wrap flex-auto gap-9">
        {/* Location */}
        <div className="flex flex-col self-start mt-2.5 whitespace-nowrap">
          <div className="flex gap-2.5 self-start text-base">
            <img 
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/be206a84ad30d4fdd62331d248fe63bc2b40c8208d01306b869539887274e890" 
              alt="Location" 
              className="object-contain shrink-0 aspect-[1.08] w-[13px]"
              loading="lazy" 
            />
            <span>Рязань</span>
          </div>
          
          {/* Navigation Links */}
          <div className="flex gap-6 self-end mt-8 text-base text-center">
            <button className="flex gap-1.5 my-auto leading-none">
              <span>каталог</span>
              <img 
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/b23f85098c2cecf9e6d01faec8955d46577673e373d9a2a772e203390fc58ca2" 
                alt="Catalog" 
                className="object-contain shrink-0 aspect-[1.12] w-[9px]"
                loading="lazy" 
              />
            </button>
            <div className="flex flex-auto gap-9 leading-none">
              <Link to="/brands">бренды</Link>
              <Link to="/new" className="my-auto">новинки</Link>
              <Link to="/popular">популярные</Link>
            </div>
          </div>
        </div>

        <Logo />
        
        <Link to="/about" className="self-end mt-14 text-base leading-none text-center max-md:mt-10">
          о нас
        </Link>
      </div>

      {/* Right Navigation */}
      <div className="flex shrink gap-3.5 self-start mt-1.5 text-base leading-none text-center basis-auto">
        <Link to="/payment" className="grow self-end mt-12 max-md:mt-10">
          оплата и доставка
        </Link>
        <div className="flex flex-col whitespace-nowrap">
          <img 
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e74156a3132de69e5c9efbb6a52fa34882babdccfbd9f46d454223f6e939c3b9" 
            alt="Contact" 
            className="object-contain aspect-[5.95] w-[125px]"
            loading="lazy" 
          />
          <Link to="/contacts" className="self-center mt-7">контакты</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;