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
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

interface ProductPageProps {
  // При необходимости добавьте пропсы
}

const ProductPage: React.FC<ProductPageProps> = () => {
  const { id } = useParams<{ id: string }>();
  const [quantity, setQuantity] = useState(1);
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isInFavorites, setIsInFavorites] = useState(false);
  const [isInCompare, setIsInCompare] = useState(false);

  // Тестовые изображения
  const productImages = [
    'https://cdn.lemanapro.ru/lmru/image/upload/f_auto/q_auto/dpr_1.0/c_pad/w_1000/h_1000/v1673360248/lmcode/CEUdBnZ21E6NJWrWSYml9g/84498286.jpg',
    'https://cdn.lemanapro.ru/lmru/image/upload/f_auto/q_auto/dpr_1.0/c_pad/w_1000/h_1000/v1673360251/lmcode/c_lEc0jGu0-0hqAO5xkrgQ/84498286_01.png',
    'https://cdn.lemanapro.ru/lmru/image/upload/f_auto/q_auto/dpr_1.0/c_pad/w_1000/h_1000/v1673360251/lmcode/v9yUT2pruEKvIg6-0LlX7A/84498286_02.png',
    'https://cdn.lemanapro.ru/lmru/image/upload/f_auto/q_auto/dpr_1.0/c_pad/w_1000/h_1000/v1673360251/lmcode/qemKGihGf0u2nTxXezfoOw/84498286_03.png',
    'https://cdn.lemanapro.ru/lmru/image/upload/f_auto/q_auto/dpr_1.0/c_pad/w_1000/h_1000/v1673360251/lmcode/EmkEyBnc50e9C9HhsrwMfA/84498286_04.png',
    'https://cdn.lemanapro.ru/lmru/image/upload/f_auto/q_auto/dpr_1.0/c_pad/w_1000/h_1000/v1673360251/lmcode/y0GaUXQpyUiR7Ruwddy9xA/84498286_05.png',
    'https://cdn.lemanapro.ru/lmru/image/upload/f_auto/q_auto/dpr_1.0/c_pad/w_1000/h_1000/v1673360251/lmcode/8ZZu05xuaUWkYWVOGMpAow/84498286_06.png',
    'https://cdn.lemanapro.ru/lmru/image/upload/f_auto/q_auto/dpr_1.0/c_pad/w_1000/h_1000/v1673360251/lmcode/XHYxabaDhESKZWCNBeacbg/84498286_07.png',
  ];

  const slides = productImages.map(src => ({
    src,
  }));

  // Тестовые данные для отзывов
  const reviewsData = {
    stats: {
      averageRating: 4.7,
      totalReviews: 128,
      ratingDistribution: {
        5: 98,
        4: 20,
        3: 6,
        2: 2,
        1: 2
      }
    },
    reviews: [
      {
        id: '1',
        author: 'Роман Кравченко',
        rating: 5,
        date: '22 сентября 2022',
        advantages: 'Упакованно по царски... приятно.',
        disadvantages: 'Цена',
        text: 'Распаковал, получил отдельный кайф от анбоксинга. Алиса включилась, сама обновилась красота. В комплекте блискучие ненужные наклейки. Брал для подключения умных ламп. Яндекс лампы светят ярче лампы WIZ но стоят огого и весят раза в 3 тежелее обычных. В целом кайф.',
        likes: 8,
        dislikes: 5,
        useTime: 'Использует меньше месяца'
      },
      {
        id: '2',
        author: 'Виктор',
        rating: 5,
        date: '18 декабря 2024',
        advantages: 'громкости хватает для к��хни, есть выход на усилитель или наушники',
        disadvantages: 'нет',
        text: 'очень выгодная цена за эту модель',
        likes: 3,
        dislikes: 0,
        useTime: 'Использует от полугода до года'
      },
      {
        id: '3',
        author: 'Александр',
        rating: 4,
        date: '15 марта 2024',
        advantages: 'Качество звука, дизайн, компактность',
        disadvantages: 'Иногда подвисает, нужно перезагружать',
        text: 'Отличная колонка для дома. Звук чистый, басы хорошие. Алиса понимает команды с первого раза. Единственный минус - редкие зависания.',
        likes: 15,
        dislikes: 2,
        useTime: 'Использует больше года'
      },
      {
        id: '4',
        author: 'Елена',
        rating: 5,
        date: '1 марта 2024',
        advantages: 'Компактная, стильная, отличный звук',
        disadvantages: 'Не обнаружила',
        text: 'Прекрасная колонка! Отлично вписалась в интерьер, зву�� намного лучше, чем ожидала. Алиса работает отлично, музыку включает мгновенно.',
        likes: 7,
        dislikes: 1,
        useTime: 'Использует месяц или два'
      }
    ]
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
          <a href="/catalog/category" className="hover:text-black">сесители</a>
          <span>/</span>
          <span className="text-black">ESTIMA Cosmos CM 01 Белый</span>
        </div>

        {/* Основная информация о товаре */}
        <div className="grid grid-cols-2 gap-12">
          {/* Левая колонка с изображением */}
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
              {productImages.map((image, index) => (
                <SwiperSlide key={index}>
                  <div className="w-full h-full">
                    <img 
                      src={image} 
                      alt={`Product Image ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
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
              {productImages.map((image, index) => (
                <SwiperSlide key={index}>
                  <div className="cursor-pointer aspect-square">
                    <img 
                      src={image} 
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Правая колонка с информацией */}
          <div>
            <div className="mb-6">
              <span className="text-sm text-gray-500 uppercase">ПЛИТКА БАЗОВАЯ</span>
              <h1 className="text-2xl font-medium mt-2">ESTIMA Cosmos CM 01 Белый</h1>
            </div>

            <div className="mb-8">
              <span className="text-2xl font-medium">3269 ₽</span>
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

              <button className="flex-grow bg-black text-white px-6 py-2 hover:bg-gray-900 transition-colors">
                ДОБАВИТЬ В КОРЗИНУ
              </button>

              <button 
                onClick={() => setIsInFavorites(!isInFavorites)}
                className="p-2 border border-gray-300 hover:bg-gray-100"
              >
                <HeartIcon className="w-6 h-6" isActive={isInFavorites} />
              </button>

              <button 
                onClick={() => setIsInCompare(!isInCompare)}
                className="p-2 border border-gray-300 hover:bg-gray-100"
              >
                <CompareIcon className="w-6 h-6" isActive={isInCompare} />
              </button>
            </div>

            {/* Информация о товаре */}
            <div className="space-y-4 text-sm">
              <div className="flex gap-4">
                <span className="text-gray-500">Артикул:</span>
                <span>06033287</span>
              </div>
              <div className="flex gap-4">
                <span className="text-gray-500">Производитель:</span>
                <span>TIKURILLA</span>
              </div>
              <div className="flex gap-4">
                <span className="text-gray-500">Единица товара:</span>
                <span>шт</span>
              </div>
            </div>
          </div>
        </div>

        {/* Табы с информацией о товаре */}
        <div className="mt-24">
          <ProductTabs 
            description="Описание товара..."
            characteristics={{
              "Бренд": "ESTIMA",
              "Коллекция": "Cosmos",
              // ... остальные характеристики
            }}
            reviews={reviewsData.reviews}
            reviewStats={reviewsData.stats}
          />
        </div>

        {/* Похожие товары */}
        <section className="mt-32">
          <h2 className="text-4xl mb-12">Вас может заинтересовать</h2>
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