import React from 'react';

interface ProductNavigationProps {
  onPrev?: () => void;
  onNext?: () => void;
  currentPage?: number;
  totalPages?: number;
}

const ArrowLeftIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 12H5" />
    <path d="M12 19l-7-7 7-7" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14" />
    <path d="M12 5l7 7-7 7" />
  </svg>
);

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
          <ArrowLeftIcon />
        </button>
        <button 
          onClick={onNext}
          className="p-2 hover:bg-gray-100 rounded transition-colors"
        >
          <ArrowRightIcon />
        </button>
      </div>
    </div>
  );
};

export default ProductNavigation;