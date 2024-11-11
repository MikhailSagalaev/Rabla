import React from 'react';
import { Link } from 'react-router-dom';

const Logo: React.FC = () => {
  return (
    <div className="flex flex-col text-base leading-none text-center">
      <img 
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/58fc832781f40ae14ec10279871c69c509a0c47eb73e45658047edd9bd0cb0df" 
        alt="Company Logo" 
        className="object-contain self-center w-28 max-w-full aspect-[3.73]"
        loading="lazy" 
      />
      <div className="flex gap-9 mt-6">
        <Link to="/bestsellers" className="grow shrink w-20">
          хиты продаж
        </Link>
        <Link to="/recommended" className="grow shrink w-[185px]">
          вас может заинтерисовать
        </Link>
      </div>
    </div>
  );
};

export default Logo;