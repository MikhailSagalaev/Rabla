import React from 'react';

interface PaymentMethodProps {
  image: string;
  alt: string;
}

export const PaymentMethod: React.FC<PaymentMethodProps> = ({ image, alt }) => {
  return (
    <img
      loading="lazy"
      src={image}
      alt={alt}
      className="object-contain h-8"
    />
  );
}; 