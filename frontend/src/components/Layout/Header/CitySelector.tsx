import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const cities = ['Рязань', 'Москва', 'Санкт-Петербург', 'Казань'];

const LocationIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M8 8.5C9.10457 8.5 10 7.60457 10 6.5C10 5.39543 9.10457 4.5 8 4.5C6.89543 4.5 6 5.39543 6 6.5C6 7.60457 6.89543 8.5 8 8.5Z" />
    <path d="M13 6.5C13 11 8 14.5 8 14.5C8 14.5 3 11 3 6.5C3 3.18629 5.23858 1 8 1C10.7614 1 13 3.18629 13 6.5Z" />
  </svg>
);

const CitySelector: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState('Рязань');

  return (
    <div className="relative">
      <button 
        className="flex items-center gap-2 text-white hover:opacity-80 transition-opacity"
        onClick={() => setIsOpen(!isOpen)}
      >
        <LocationIcon />
        <span>{selectedCity}</span>
        <motion.svg 
          width="10" 
          height="6" 
          viewBox="0 0 10 6" 
          fill="none"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5"/>
        </motion.svg>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 mt-2 bg-black/90 backdrop-blur-sm rounded-lg shadow-lg z-50"
          >
            <div className="py-2 flex flex-col min-w-[200px]">
              {cities.map((city) => (
                <button
                  key={city}
                  className={`
                    w-full text-left px-4 py-2 text-white hover:bg-white/10 transition-colors
                    ${city === selectedCity ? 'font-medium bg-white/5' : ''}
                  `}
                  onClick={() => {
                    setSelectedCity(city);
                    setIsOpen(false);
                  }}
                >
                  {city}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CitySelector; 