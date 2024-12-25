import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import { CompareIcon, CartIcon, HeartIcon } from '../../UI/Icons/index';
import { useCompare } from '../../../hooks/useCompare';
import { useCart } from '../../../hooks/useCart';

const HeaderTools: React.FC = () => {
  const { items: compareItems } = useCompare();
  const { items: cartItems } = useCart();

  return (
    <div className="flex items-center gap-6">
      <SearchBar />
      
      <Link to="/compare" className="text-white hover:opacity-80 transition-opacity relative">
        <CompareIcon className="w-6 h-6" isActive={compareItems.length > 0} />
        {compareItems.length > 0 && (
          <span className="absolute -top-1 -right-1 bg-white text-black text-xs w-4 h-4 flex items-center justify-center rounded-full">
            {compareItems.length}
          </span>
        )}
      </Link>

      <Link to="/favorites" className="text-white hover:opacity-80 transition-opacity">
        <HeartIcon className="w-6 h-6" />
      </Link>

      <Link to="/cart" className="text-white hover:opacity-80 transition-opacity relative">
        <CartIcon className="w-6 h-6" isActive={cartItems.length > 0} />
        {cartItems.length > 0 && (
          <span className="absolute -top-1 -right-1 bg-white text-black text-xs w-4 h-4 flex items-center justify-center rounded-full">
            {cartItems.length}
          </span>
        )}
      </Link>
    </div>
  );
};

export default HeaderTools; 