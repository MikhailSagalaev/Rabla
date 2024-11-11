import React from 'react';
import { FeatureCard as FeatureCardType } from '../../types/product.types';

const FeatureCard: React.FC<FeatureCardType> = ({ image, title, description }) => {
  return (
    <div className="flex flex-col items-start p-6 bg-white rounded-lg shadow-md transition-transform hover:transform hover:scale-105">
      <img 
        src={image} 
        alt={title}
        className="w-full aspect-[1.81] object-cover rounded-lg"
        loading="lazy"
      />
      <h3 className="mt-4 text-xs tracking-widest uppercase text-gray-600">
        {title}
      </h3>
      <p className="mt-2.5 text-xl text-gray-800">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard; 