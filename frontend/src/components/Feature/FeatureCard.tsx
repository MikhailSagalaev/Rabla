import React from 'react';
import { FeatureCard as FeatureCardType } from '../../types/product.types';

const FeatureCard: React.FC<FeatureCardType> = ({ image, title, description }) => {
  return (
    <div className="flex flex-col">
      <img 
        src={image}
        alt={title}
        className="w-full h-auto"
      />
      <h3 className="mt-4 text-xl font-semibold">{title}</h3>
      <p className="mt-2 text-gray-600">{description}</p>
    </div>
  );
};

export default FeatureCard;