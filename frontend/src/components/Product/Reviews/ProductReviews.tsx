import React, { useState } from 'react';
import { Review, ReviewStats } from '../../../types/review.types';

interface ProductReviewsProps {
  reviews: Review[];
  stats: ReviewStats;
}

const ProductReviews: React.FC<ProductReviewsProps> = ({ reviews, stats }) => {
  const [sortBy, setSortBy] = useState<'date' | 'rating'>('date');

  const Star = ({ filled }: { filled: boolean }) => (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      className={`w-4 h-4 ${filled ? 'text-yellow-400' : 'text-gray-200'}`}
    >
      <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
      />
    </svg>
  );

  const sortedReviews = [...reviews].sort((a, b) => {
    if (sortBy === 'date') {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    }
    return b.rating - a.rating;
  });

  return (
    <div className="mt-12">
      {/* Заголовок и общая статистика */}
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-light">Отзывы</h2>
        <button className="px-6 py-3 border border-black hover:bg-black hover:text-white transition-colors">
          Написать отзыв
        </button>
      </div>

      {/* Статистика рейтинга */}
      <div className="grid grid-cols-2 gap-8 mb-12">
        <div className="flex items-center gap-8">
          <div className="text-center">
            <div className="text-5xl font-light mb-2">{stats.averageRating.toFixed(1)}</div>
            <div className="flex gap-1 justify-center mb-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} filled={star <= stats.averageRating} />
              ))}
            </div>
            <div className="text-sm text-gray-500">{stats.totalReviews} отзывов</div>
          </div>
          
          <div className="flex-grow">
            {[5, 4, 3, 2, 1].map((rating) => (
              <div key={rating} className="flex items-center gap-2 mb-2">
                <div className="text-sm w-3">{rating}</div>
                <div className="flex-grow bg-gray-100 h-2">
                  <div 
                    className="bg-yellow-400 h-full"
                    style={{ 
                      width: `${(stats.ratingDistribution[rating] / stats.totalReviews) * 100}%` 
                    }}
                  />
                </div>
                <div className="text-sm text-gray-500 w-10">
                  {stats.ratingDistribution[rating]}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Сортировка */}
      <div className="flex justify-end mb-6">
        <select 
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value as 'date' | 'rating')}
          className="border-b border-black pb-1"
        >
          <option value="date">По дате</option>
          <option value="rating">По рейтингу</option>
        </select>
      </div>

      {/* Список отзывов */}
      <div className="space-y-8">
        {sortedReviews.map((review) => (
          <div key={review.id} className="border-b pb-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} filled={star <= review.rating} />
                ))}
              </div>
              <div className="text-sm text-gray-500">{review.date}</div>
              <div className="text-sm">{review.author}</div>
            </div>

            {review.advantages && (
              <div className="mb-3">
                <div className="font-medium mb-1">Достоинства:</div>
                <div>{review.advantages}</div>
              </div>
            )}

            {review.disadvantages && (
              <div className="mb-3">
                <div className="font-medium mb-1">Недостатки:</div>
                <div>{review.disadvantages}</div>
              </div>
            )}

            <div className="mb-4">{review.text}</div>

            {review.images && review.images.length > 0 && (
              <div className="flex gap-2 mb-4">
                {review.images.map((image, index) => (
                  <img 
                    key={index}
                    src={image}
                    alt={`Review image ${index + 1}`}
                    className="w-20 h-20 object-cover cursor-pointer"
                  />
                ))}
              </div>
            )}

            <div className="flex gap-6">
              <button className="flex items-center gap-2 text-sm text-gray-500 hover:text-black">
                <span>👍</span>
                <span>{review.likes}</span>
              </button>
              <button className="flex items-center gap-2 text-sm text-gray-500 hover:text-black">
                <span>👎</span>
                <span>{review.dislikes}</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductReviews; 