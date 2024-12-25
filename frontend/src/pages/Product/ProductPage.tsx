import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Navigation, Thumbs } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Header from '../../components/Layout/Header/Header';
import Footer from '../../components/Layout/Footer/Footer';
import ProductTabs from '../../components/Product/ProductTabs';
import PopularProductsSection from '../../components/Sections/PopularProductsSection';
import { HeartIcon, CompareIcon } from '../../components/UI/Icons/index';
import { ProductData, CartItem } from '../../types/product.types';
import { Review, ReviewStats } from '../../types/review.types';
import { getProductById } from '../../data/products';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { useCart } from '../../hooks/useCart';
import { useCompare } from '../../hooks/useCompare';

interface ProductPageProps {
  // При необходимоси добавьте пропсы
}

interface Slide {
  src: string;
}

const defaultReviewStats: ReviewStats = {
  averageRating: 0,
  totalReviews: 0,
  ratingDistribution: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 }
};

const ProductPage: React.FC<ProductPageProps> = () => {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();
  const { addToCompare, removeFromCompare, isInCompare } = useCompare();
  const [quantity, setQuantity] = useState(1);
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isInFavorites, setIsInFavorites] = useState(false);

  const product = getProductById(Number(id));
  const productInCompare = isInCompare(Number(id));

  if (!product) {
    return <div>Товар не найден</div>;
  }

  const slides = product.images?.map((src: string) => ({
    src,
  })) || [];

  const reviews = (product.reviews || []).map((review: Review) => ({
    ...review,
    id: String(review.id)
  }));

  const handleAddToCart = () => {
    if (product) {
      const cartItem: CartItem = {
        ...product,
        price: Number(product.price),
        quantity,
        selected: true
      };
      addToCart(cartItem);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-zinc-100 overflow-x-hidden">
      <Header isFixed={true} />
      
      <main className="flex-grow container mx-auto px-20 pt-[180px]">
        {/* Хлебные крошки */}
        <div className="flex gap-2 text-sm text-gray-500 mb-8">
          <a href="/" className="hover:text-black">главная</a>
          <span>/</span>
          <a href="/catalog" className="hover:text-black">каталог</a>
          <span>/</span>
          <a href={`/catalog/${product.category.toLowerCase()}`} className="hover:text-black">{product.category.toLowerCase()}</a>
          <span>/</span>
          <span className="text-black">{product.name}</span>
        </div>

        <div className="grid grid-cols-2 gap-12">
          {/* Галерея */}
          <div className="space-y-4">
            <Swiper
              style={{
                '--swiper-navigation-color': '#000',
                '--swiper-pagination-color': '#000',
              } as React.CSSProperties}
              spaceBetween={10}
              navigation={true}
              thumbs={{ swiper: thumbsSwiper }}
              modules={[Navigation, Thumbs]}
              className="w-full aspect-square cursor-zoom-in"
              onClick={() => setIsOpen(true)}
            >
              {product.images?.map((image: string, index: number) => (
                <SwiperSlide key={index}>
                  <div className="w-full h-full">
                    <img src={image} alt={`Product ${index + 1}`} className="w-full h-full object-cover" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <Swiper
              onSwiper={setThumbsSwiper}
              spaceBetween={10}
              slidesPerView={4}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[Thumbs]}
              className="thumbs-swiper"
            >
              {product.images?.map((image, index) => (
                <SwiperSlide key={index}>
                  <div className="cursor-pointer aspect-square">
                    <img src={image} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Информация о товаре */}
          <div>
            <div className="mb-6">
              <span className="text-sm text-gray-500 uppercase">{product.category}</span>
              <h1 className="text-2xl font-medium mt-2">{product.name}</h1>
            </div>

            <div className="mb-8">
              <span className="text-2xl font-medium">{product.price} ₽</span>
            </div>

            <div className="flex gap-4 items-center mb-8">
              <div className="flex items-center border border-gray-300">
                <button 
                  onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                  className="px-4 py-2 hover:bg-gray-100"
                >
                  -
                </button>
                <span className="px-4 py-2">{quantity}</span>
                <button 
                  onClick={() => setQuantity(prev => prev + 1)}
                  className="px-4 py-2 hover:bg-gray-100"
                >
                  +
                </button>
              </div>

              <button 
                onClick={handleAddToCart}
                className="flex-grow bg-black text-white px-6 py-2 hover:bg-gray-900 transition-colors"
              >
                ДОБАВИТЬ В КОРЗИНУ
              </button>

              <button 
                onClick={() => setIsInFavorites(!isInFavorites)}
                className="p-2 border border-gray-300 hover:bg-gray-100"
              >
                <HeartIcon className="w-6 h-6" isActive={isInFavorites} />
              </button>

              <button 
                onClick={() => {
                  if (productInCompare) {
                    removeFromCompare(Number(id));
                  } else {
                    addToCompare(product);
                  }
                }}
                className="p-2 border border-gray-300 hover:bg-gray-100"
              >
                <CompareIcon className="w-6 h-6" isActive={productInCompare} />
              </button>
            </div>

            {/* Информация о товаре */}
            <div className="space-y-4 text-sm border-t border-gray-200 pt-8">
              <div className="flex gap-4">
                <span className="text-gray-500">Артикул:</span>
                <span>{product.article}</span>
              </div>
              <div className="flex gap-4">
                <span className="text-gray-500">Производитель:</span>
                <span>{product.manufacturer}</span>
              </div>
              <div className="flex gap-4">
                <span className="text-gray-500">Единица товара:</span>
                <span>{product.unit}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Табы и похожие товары */}
        <div className="mt-24">
          <ProductTabs 
            description={product.description || ''}
            characteristics={product.characteristics || {}}
            reviews={reviews}
            reviewStats={product.reviewStats || defaultReviewStats}
          />
        </div>

        <section className="mt-32">
          <h2 className="text-4xl mb-12">Вас ��ожет заинтересовать</h2>
          <PopularProductsSection />
        </section>
      </main>

      <Lightbox
        open={isOpen}
        close={() => setIsOpen(false)}
        index={photoIndex}
        slides={slides}
        plugins={[Thumbnails]}
        thumbnails={{
          position: "start",
          width: 100,
          height: 100,
          gap: 16,
          padding: 16
        }}
        on={{
          view: ({ index }) => setPhotoIndex(index)
        }}
      />

      <Footer />
    </div>
  );
};

export default ProductPage; 