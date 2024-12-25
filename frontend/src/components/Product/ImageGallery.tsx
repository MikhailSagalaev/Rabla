import React, { useState } from 'react';

interface ImageGalleryProps {
  slides: Array<{ src: string }>;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className="relative">
      {/* Основное изображение */}
      <div className="aspect-square overflow-hidden">
        <img
          src={slides[currentSlide].src}
          alt="Product"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Миниатюры */}
      <div className="flex gap-2 mt-4">
        {slides.map((slide, index) => (
          <button
            key={index}
            className={`w-20 h-20 overflow-hidden ${
              index === currentSlide ? 'border-2 border-black' : ''
            }`}
            onClick={() => setCurrentSlide(index)}
          >
            <img
              src={slide.src}
              alt={`Thumbnail ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery; 