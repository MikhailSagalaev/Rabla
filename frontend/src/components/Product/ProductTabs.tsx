import React, { useState } from 'react';
import { Review, ReviewStats } from '../../types/review.types';

interface ProductTabsProps {
  description: string;
  characteristics: {
    [key: string]: string;
  };
  reviews: Review[];
  reviewStats: ReviewStats;
}

const ProductTabs: React.FC<ProductTabsProps> = ({ 
  description, 
  characteristics, 
  reviews,
  reviewStats 
}) => {
  const [activeTab, setActiveTab] = useState('description');

  return (
    <div>
      <div className="flex gap-12 border-b border-gray-200">
        <button
          onClick={() => setActiveTab('description')}
          className={`pb-4 relative ${
            activeTab === 'description' ? 'text-black' : 'text-gray-400'
          }`}
        >
          Описание
          {activeTab === 'description' && (
            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-black" />
          )}
        </button>
        <button
          onClick={() => setActiveTab('characteristics')}
          className={`pb-4 relative ${
            activeTab === 'characteristics' ? 'text-black' : 'text-gray-400'
          }`}
        >
          Характеристики
          {activeTab === 'characteristics' && (
            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-black" />
          )}
        </button>
        <button
          onClick={() => setActiveTab('reviews')}
          className={`pb-4 relative flex items-center gap-2 ${
            activeTab === 'reviews' ? 'text-black' : 'text-gray-400'
          }`}
        >
          Отзывы
          <span className="text-xs align-super bg-gray-100 px-1.5 py-0.5 rounded">
            {reviewStats.totalReviews}
          </span>
          {activeTab === 'reviews' && (
            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-black" />
          )}
        </button>
      </div>

      <div className="py-8">
        {activeTab === 'description' && (
          <div className="prose max-w-none">
            <p>{description}</p>
          </div>
        )}

        {activeTab === 'characteristics' && (
          <div className="grid grid-cols-2 gap-4">
            {Object.entries(characteristics).map(([key, value]) => (
              <div key={key} className="flex justify-between py-2 border-b border-gray-100">
                <span className="text-gray-500">{key}</span>
                <span>{value}</span>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'reviews' && (
          <div>
            <div className="flex justify-between items-start mb-8">
              <div className="flex items-start gap-16">
                <div className="text-center">
                  <div className="text-5xl font-light mb-2">
                    {reviewStats.averageRating.toFixed(1)}
                  </div>
                  <div className="flex gap-1 justify-center mb-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg 
                        key={star}
                        className={`w-4 h-4 ${star <= reviewStats.averageRating ? 'text-yellow-400' : 'text-gray-200'}`}
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 24 24" 
                        fill="currentColor"
                      >
                        <path 
                          fillRule="evenodd" 
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ))}
                  </div>
                  <div className="text-sm text-gray-500">
                    На основе {reviewStats.totalReviews} отзывов
                  </div>
                </div>

                <div className="flex-grow max-w-md">
                  {[5, 4, 3, 2, 1].map((rating) => (
                    <div key={rating} className="flex items-center gap-2 mb-2">
                      <div className="flex-grow h-2 bg-gray-100 overflow-hidden">
                        <div 
                          className="h-full bg-yellow-400"
                          style={{ 
                            width: `${(reviewStats.ratingDistribution[rating] / reviewStats.totalReviews) * 100}%` 
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <button className="px-6 py-3 border border-black hover:bg-black hover:text-white transition-colors">
                Написать отзыв
              </button>
            </div>

            <div className="mb-6">
              <div className="relative inline-block">
                <select 
                  className="appearance-none bg-transparent border border-gray-300 px-4 py-2 pr-8 hover:border-black transition-colors cursor-pointer"
                  defaultValue="helpful"
                >
                  <option value="helpful">Сначала полезные</option>
                  <option value="date">Сначала новые</option>
                  <option value="rating">По рейтингу</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              {reviews.map((review) => (
                <div key={review.id} className="bg-white p-6 shadow-sm">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg 
                          key={star}
                          className={`w-4 h-4 ${star <= review.rating ? 'text-yellow-400' : 'text-gray-200'}`}
                          xmlns="http://www.w3.org/2000/svg" 
                          viewBox="0 0 24 24" 
                          fill="currentColor"
                        >
                          <path 
                            fillRule="evenodd" 
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            clipRule="evenodd"
                          />
                        </svg>
                      ))}
                    </div>
                    <div className="text-sm text-gray-500">{review.useTime}</div>
                    <div className="text-sm">{review.author}</div>
                    <div className="text-sm text-gray-500">{review.date}</div>
                  </div>

                  {review.advantages && (
                    <div className="mb-3">
                      <div className="font-medium mb-1">Достоинства:</div>
                      <div className="text-gray-700">{review.advantages}</div>
                    </div>
                  )}

                  {review.disadvantages && (
                    <div className="mb-3">
                      <div className="font-medium mb-1">Недостатки:</div>
                      <div className="text-gray-700">{review.disadvantages}</div>
                    </div>
                  )}

                  <div className="mb-4 text-gray-700">{review.text}</div>

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
        )}
      </div>
    </div>
  );
};

export default ProductTabs; 