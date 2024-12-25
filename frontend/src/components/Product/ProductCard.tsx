import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HeartIcon, CompareIcon, CartIcon } from '../UI/Icons';
import { useCompare } from '../../hooks/useCompare';
import { useCart } from '../../hooks/useCart';
import { useFavorites } from '../../hooks/useFavorites';
import { ProductData } from '../../types/product.types';

interface ProductCardProps {
  product: ProductData;
  viewMode?: 'grid' | 'list';
}

const ProductCard: React.FC<ProductCardProps> = ({ product, viewMode = 'grid' }) => {
  const { addToCart } = useCart();
  const { items: compareItems, addToCompare, removeFromCompare } = useCompare();
  const { isInFavorites, addToFavorites, removeFromFavorites } = useFavorites();
  
  const isInCompare = compareItems.some(item => item.id === product.id);
  const isFavorite = isInFavorites(product.id);

  if (!product) return null;

  const {
    id,
    name,
    category,
    price,
    article,
    manufacturer,
    images,
    discount,
    inStock
  } = product;

  const mainImage = images && images.length > 0 ? images[0] : '';

  const handleCompareClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isInCompare) {
      removeFromCompare(id);
    } else {
      addToCompare(product);
    }
  };

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isFavorite) {
      removeFromFavorites(id);
    } else {
      addToFavorites(product);
    }
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(product);
  };

  return (
    <div className="relative group">
      <Link to={`/product/${id}`}>
        <div className="relative">
          <div className="relative aspect-square mb-4">
            <div className="absolute inset-0 bg-white">
              <img src={mainImage} alt={name} className="w-full h-full object-contain" />
            </div>
            {discount && (
              <div className="absolute top-0 left-0 bg-[#DAFF55] text-black px-3 py-1.5 text-sm font-medium">
                {discount}
              </div>
            )}
            <motion.button 
              whileTap={{ scale: 0.9 }}
              onClick={handleAddToCart}
              className="absolute bottom-4 right-4 p-3 bg-black bg-opacity-80 hover:opacity-80 transition-opacity"
            >
              <CartIcon className="w-6 h-6 text-white" />
            </motion.button>
          </div>
          <div className="space-y-2">
            <div className="text-sm text-gray-500">Арт. {article}</div>
            <div className="text-sm text-gray-500 uppercase">{category}</div>
            <h3 className="font-medium group-hover:text-gray-600 transition-colors">{name}</h3>
            <div className="text-lg font-medium">{price} ₽</div>
          </div>
        </div>
      </Link>

      <div className="absolute top-4 right-4 flex flex-col gap-2">
        <motion.button 
          whileTap={{ scale: 0.9 }}
          onClick={handleFavoriteClick}
          className="p-2 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors"
        >
          <HeartIcon className="w-5 h-5" isActive={isFavorite} />
        </motion.button>
        <motion.button 
          whileTap={{ scale: 0.9 }}
          onClick={handleCompareClick}
          className="p-2 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors"
        >
          <CompareIcon className="w-5 h-5" isActive={isInCompare} />
        </motion.button>
      </div>
    </div>
  );
};

export default ProductCard;