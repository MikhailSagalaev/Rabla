import React from 'react';

interface ProductNavigationProps {
  onPrev?: () => void;
  onNext?: () => void;
  currentPage?: number;
  totalPages?: number;
}

const ProductNavigation: React.FC<ProductNavigationProps> = ({
  onPrev,
  onNext,
  currentPage,
  totalPages
}) => {
  return (
    <div className="flex items-center gap-4">
      {currentPage && totalPages && (
        <span className="text-sm text-gray-500">
          {currentPage} / {totalPages}
        </span>
      )}
      
      <div className="flex gap-1.5">
        <button 
          onClick={onPrev}
          className="p-2 hover:bg-gray-100 rounded transition-colors"
        >
          <img 
            src="/icons/arrow-left.svg" 
            alt="Previous" 
            className="w-6 h-6" 
          />
        </button>
        <button 
          onClick={onNext}
          className="p-2 hover:bg-gray-100 rounded transition-colors"
        >
          <img 
            src="/icons/arrow-right.svg" 
            alt="Next" 
            className="w-6 h-6" 
          />
        </button>
      </div>
    </div>
  );
};

export default ProductNavigation;