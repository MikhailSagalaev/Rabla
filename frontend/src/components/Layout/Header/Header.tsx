import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import NavigationMenu from './NavigationMenu';
import CitySelector from './CitySelector';
import HeaderTools from './HeaderTools';

interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface HeaderProps {
  isFixed?: boolean;
}

const Header: React.FC<HeaderProps> = ({ isFixed = false }) => {
  const [isScrolled, setIsScrolled] = useState(isFixed);

  useEffect(() => {
    if (!isFixed) {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 0);
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [isFixed]);

  return (
    <header className={`
      fixed top-0 left-0 w-full z-50 transition-all duration-300
      ${isScrolled ? 'bg-black py-4' : 'py-8'}
    `}>
      <div className="container mx-auto px-20">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <CitySelector />
          </div>

          <Logo />

          <div className="flex-1 flex justify-end">
            <HeaderTools />
          </div>
        </div>

        <NavigationMenu />
      </div>
    </header>
  );
};

export default Header;