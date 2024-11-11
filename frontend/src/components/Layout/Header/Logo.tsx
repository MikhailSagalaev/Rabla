import React from 'react';
import { Link } from 'react-router-dom';

const Logo: React.FC = () => {
  return (
    <Link to="/" className="transition-opacity hover:opacity-80">
      <img 
        loading="lazy" 
        src="https://cdn.builder.io/api/v1/image/assets/88cd18cb416f431783e515601f7fda51/65164c5d1487fff497cc0290d5cddab51a059e47b69a7cb61a43cec207fd6d77" 
        alt="Company Logo" 
        className="object-contain shrink-0 self-stretch my-auto w-28 aspect-[3.73]" 
      />
    </Link>
  );
};

export default Logo;