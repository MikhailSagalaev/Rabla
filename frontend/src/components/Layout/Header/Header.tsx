import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface HeaderProps {
  breadcrumbs?: BreadcrumbItem[];
  title?: string;
}

const Header: React.FC<HeaderProps> = ({ breadcrumbs, title }) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <header className={`flex relative flex-col items-center self-stretch px-20 pt-8 ${isHomePage ? 'pb-64' : 'pb-40'} w-full text-white min-h-[657px] max-md:px-5 max-md:pb-24`}>
      {/* Background */}
      <img 
        src="https://cdn.builder.io/api/v1/image/assets/88cd18cb416f431783e515601f7fda51/5a1531c89faffcf048546ca8d3037ee4374185900c7efe8b5e3fc571d0b61560" 
        alt="Background" 
        className="object-cover absolute inset-0 size-full"
        loading="lazy" 
      />

      <div className="flex relative flex-col mb-0 w-full max-w-[1172px] max-md:mb-2.5">
        {/* Navigation */}
        <nav className="flex flex-wrap gap-5 justify-between w-full">
          <div className="flex flex-col">
            {/* Top Bar */}
            <div className="flex flex-wrap gap-5 justify-between max-w-full text-base whitespace-nowrap w-[641px]">
              <div className="flex gap-2.5 my-auto">
                <img 
                  src="https://cdn.builder.io/api/v1/image/assets/88cd18cb416f431783e515601f7fda51/be206a84ad30d4fdd62331d248fe63bc2b40c8208d01306b869539887274e890" 
                  alt="Location" 
                  className="object-contain shrink-0 aspect-[1.08] w-[13px]"
                  loading="lazy" 
                />
                <span>Москва</span>
              </div>
              <Link to="/">
                <img 
                  src="https://cdn.builder.io/api/v1/image/assets/88cd18cb416f431783e515601f7fda51/03b6bb92bb4cc176d37e99bb17ac31833056c2ec30b6298fcae20c6f52960927" 
                  alt="Logo" 
                  className="object-contain shrink-0 w-28 max-w-full aspect-[3.73]"
                  loading="lazy" 
                />
              </Link>
            </div>

            {/* Main Navigation */}
            <ul className="flex gap-9 self-end mt-6 text-base leading-none text-center">
              {[
                { label: 'каталог', path: '/catalog' },
                { label: 'бренды', path: '/brands' },
                { label: 'новинки', path: '/new' },
                { label: 'популярные', path: '/popular' },
                { label: 'хиты продаж', path: '/bestsellers' },
                { label: 'вас может заинтерисовать', path: '/recommended' }
              ].map((item) => (
                <li key={item.path}>
                  <Link 
                    to={item.path}
                    className={`hover:opacity-80 transition-opacity ${location.pathname === item.path ? 'font-medium' : ''}`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Navigation */}
          <Link to="/about" className="self-end mt-14 text-base leading-none text-center max-md:mt-10 hover:opacity-80 transition-opacity">
            о нас
          </Link>
          <div className="flex gap-3 self-start mt-1 text-base leading-none text-center">
            <Link to="/payment" className="grow self-end mt-12 max-md:mt-10 hover:opacity-80 transition-opacity">
              оплата и доставка
            </Link>
            <div className="flex flex-col whitespace-nowrap">
              <img 
                src="https://cdn.builder.io/api/v1/image/assets/88cd18cb416f431783e515601f7fda51/3cbe28d4e34d8b86865332c2487f7e019fa4d84502f28ac8b77c1279e796b151" 
                alt="Contact info" 
                className="object-contain aspect-[5.95] w-[125px]"
                loading="lazy" 
              />
              <Link to="/contacts" className="self-center mt-7 hover:opacity-80 transition-opacity">
                контакты
              </Link>
            </div>
          </div>
        </nav>

        {/* Divider */}
        <div className="shrink-0 mt-2 w-full h-px border border-white border-solid" />

        {/* Content Section */}
        {(breadcrumbs || title) && (
          <>
            <img 
              src="https://cdn.builder.io/api/v1/image/assets/88cd18cb416f431783e515601f7fda51/e22bb28144b775a535fd22d549130c9b2b0fef4b76ede55db3d53a89c2258872" 
              alt="Scroll" 
              className="object-contain mt-80 aspect-[1.91] w-[21px] max-md:mt-10"
              loading="lazy" 
            />

            <div className="flex flex-wrap gap-5 justify-between mt-2.5 w-full max-w-[1078px]">
              {/* Breadcrumbs */}
              {breadcrumbs && (
                <div className="flex gap-1.5 self-end mt-7 text-sm whitespace-nowrap">
                  {breadcrumbs.map((item, index) => (
                    <React.Fragment key={index}>
                      {index > 0 && <span className="leading-loose">/</span>}
                      {item.path ? (
                        <Link to={item.path} className="leading-loose hover:opacity-80 transition-opacity">
                          {item.label}
                        </Link>
                      ) : (
                        <span className="leading-loose">{item.label}</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              )}

              {/* Page Title */}
              {title && (
                <h1 className="text-5xl tracking-normal leading-none max-md:text-4xl">
                  {title}
                </h1>
              )}
            </div>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;