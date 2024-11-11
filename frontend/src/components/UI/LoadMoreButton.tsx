import React from 'react';
import Button from './Button';

interface LoadMoreButtonProps {
  onClick: () => void;
  loading?: boolean;
  disabled?: boolean;
  itemsLeft?: number;
  className?: string;
}

const LoadMoreButton: React.FC<LoadMoreButtonProps> = ({ 
  onClick, 
  loading = false,
  disabled = false,
  itemsLeft,
  className = ''
}) => {
  // Формируем текст кнопки
  const buttonText = loading 
    ? 'загрузка...' 
    : itemsLeft 
      ? `показать ещё (осталось ${itemsLeft})` 
      : 'показать больше товаров';

  return (
    <div className="flex flex-col items-center w-full">
      <Button
        onClick={onClick}
        loading={loading}
        disabled={disabled}
        fullWidth
        className={`
          mt-24 max-w-[1170px] 
          max-md:mt-10 max-md:max-w-full
          transition-all duration-300
          ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-900'}
          ${className}
        `}
      >
        {buttonText}
      </Button>
      
      {/* Опциональный индикатор прогресса */}
      {itemsLeft && !loading && (
        <div className="mt-4 text-sm text-gray-500">
          Загружено {itemsLeft} из {itemsLeft + 10} товаров
        </div>
      )}
    </div>
  );
};

// Вариант с автоматической загрузкой при прокрутке
export const InfiniteLoadMore: React.FC<LoadMoreButtonProps & { 
  threshold?: number 
}> = ({ 
  onClick, 
  loading, 
  disabled,
  threshold = 100 
}) => {
  const [isVisible, setIsVisible] = React.useState(false);
  const buttonRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
        if (entry.isIntersecting && !loading && !disabled) {
          onClick();
        }
      },
      {
        rootMargin: `0px 0px ${threshold}px 0px`
      }
    );

    if (buttonRef.current) {
      observer.observe(buttonRef.current);
    }

    return () => observer.disconnect();
  }, [onClick, loading, disabled, threshold]);

  return (
    <div 
      ref={buttonRef}
      className="w-full flex justify-center py-8"
    >
      {loading && (
        <div className="flex items-center gap-2 text-gray-500">
          <svg 
            className="animate-spin h-5 w-5" 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24"
          >
            <circle 
              className="opacity-25" 
              cx="12" 
              cy="12" 
              r="10" 
              stroke="currentColor" 
              strokeWidth="4"
            />
            <path 
              className="opacity-75" 
              fill="currentColor" 
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
          <span>Загрузка...</span>
        </div>
      )}
    </div>
  );
};

export default LoadMoreButton;