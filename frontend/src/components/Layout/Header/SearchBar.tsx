import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const searchSuggestions = [
  { id: 1, name: 'Ванна акриловая TRITON', category: 'Ванны' },
  { id: 2, name: 'Смеситель для ванны', category: 'Смесители' },
  // Добавьте больше подсказок
];

const SearchBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [suggestions, setSuggestions] = useState<typeof searchSuggestions>([]);
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setSearchValue('');
        setSuggestions([]);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearch = (value: string) => {
    setSearchValue(value);
    if (value.length > 0) {
      const filtered = searchSuggestions.filter(item =>
        item.name.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filtered);
    } else {
      setSuggestions([]);
    }
  };

  return (
    <div className="relative" ref={searchRef}>
      <button
        onClick={() => setIsOpen(true)}
        className="text-white hover:opacity-80 transition-opacity"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M21 21L16.5 16.5M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round"
          />
        </svg>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: 300 }}
            exit={{ opacity: 0, width: 0 }}
            className="absolute right-0 top-1/2 -translate-y-1/2"
          >
            <input
              type="text"
              value={searchValue}
              onChange={(e) => handleSearch(e.target.value)}
              placeholder="Поиск по каталогу..."
              className="w-full px-4 py-2 bg-white/10 backdrop-blur-md text-white placeholder-white/60 border border-white/20 rounded-t focus:outline-none focus:border-white"
              autoFocus
            />
            {suggestions.length > 0 && (
              <div className="absolute top-full left-0 w-full bg-black/90 backdrop-blur-sm rounded-b shadow-lg">
                {suggestions.map(suggestion => (
                  <div 
                    key={suggestion.id}
                    className="px-4 py-2 hover:bg-white/10 cursor-pointer"
                  >
                    <div className="text-white">{suggestion.name}</div>
                    <div className="text-white/60 text-sm">{suggestion.category}</div>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SearchBar; 