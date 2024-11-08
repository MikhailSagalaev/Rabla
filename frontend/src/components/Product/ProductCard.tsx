import React from 'react';
import { ProductCardProps } from '../../pages/Home/productData';

const ProductCard: React.FC<ProductCardProps> = ({ 
  name, 
  price, 
  image, 
  category, 
  discount 
}) => {
  return (
    <div className="flex flex-col">
      <div className="relative">
        {discount && (
          <span className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded">
            -{discount}%
          </span>
        )}
        <img src={image} alt={name} className="w-full h-auto" />
      </div>
      {category && (
        <span className="mt-2 text-sm text-gray-500">{category}</span>
      )}
      <h3 className="mt-1 text-lg">{name}</h3>
      <p className="text-xl font-bold">{price} ₽</p>
    </div>
  );
};

export default ProductCard;