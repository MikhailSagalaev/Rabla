import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../../components/Product/ProductCard';
import { popularProducts, interestedProducts } from './productData';

const Home: React.FC = () => {
  return (
    <div className="bg-zinc-100">
      <div className="relative flex flex-col items-center px-20 pt-8 pb-64 w-full text-white min-h-[654px] max-md:px-5 max-md:pb-24">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/d10f70fe2f7fefcd7fbe60c1f5baeaa984f78fbb4ae86dddd97e76286f630c4f"
          className="object-cover absolute inset-0 w-full h-full"
          alt="hero"
        />
        <div className="relative flex flex-col mb-0 w-full max-w-[1173px] max-md:mb-2.5">
          <div className="flex flex-col items-start self-end mt-36 mr-16 max-w-full w-[452px] max-md:mt-10 max-md:mr-2.5">
            <h1 className="self-stretch text-5xl tracking-normal max-md:text-4xl">
              Экспресс доставка
            </h1>
            <p className="mt-4 text-base">в течении одного часа</p>
            <Link to="/catalog" className="flex flex-row items-center gap-3 px-6 py-5 mt-8 text-xs tracking-widest text-center text-black uppercase bg-stone-50">
              перейти в каталог
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/a4e3b8792f12e4b038df5e424c7bd7c1a772c8c569bd1d076192388a4a893a16"
                className="w-3.5 aspect-[1.4]"
                alt="arrow"
              />
            </Link>
          </div>
        </div>
      </div>

      <div className="flex flex-col mt-32 w-full max-w-[1286px] mx-auto max-md:mt-10">
        <h2 className="text-center text-4xl tracking-tight text-black">
          почему нужно выбрать нас
        </h2>
        <div className="mt-12 grid grid-cols-3 gap-5 max-md:grid-cols-1">
          {[
            {
              image: "https://cdn.builder.io/api/v1/image/assets/TEMP/00ac7fea2429baad5ff18b0aba1cdda53c08309e5adf97e9789f0f93034b8da6",
              title: "лучшие цены",
              description: "Сравниваем цены - предлагаем лучшее.",
            },
            {
              image: "https://cdn.builder.io/api/v1/image/assets/TEMP/06aba711a7cfdcc972fe672349c205d280a57ac7fd50c70abaec003d801119be",
              title: "доставка сегодня",
              description: "В течении нескольких часов, после оплаты покупки.",
            },
            {
              image: "https://cdn.builder.io/api/v1/image/assets/TEMP/3acf66a91a2df83720685c22ebaae9768088ec8cebd1fbc296660995b595173d",
              title: "удобная оплата",
              description: "Принимаем к оплате банковские карты, электронные платежи.",
            },
          ].map((item, index) => (
            <div key={index} className="flex flex-col">
              <img
                src={item.image}
                className="w-full aspect-[1.81]"
                alt={item.title}
              />
              <h3 className="mt-4 text-xs tracking-widest uppercase">
                {item.title}
              </h3>
              <p className="mt-2.5 text-xl">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-[1286px] mx-auto mt-36 max-md:mt-10">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl tracking-tight text-black">
            ПОПУЛЯРНЫЕ
          </h2>
          <div className="flex gap-1.5">
            {/* Навигационн��е стрелки */}
          </div>
        </div>

        <div className="grid grid-cols-4 gap-5 max-md:grid-cols-1">
          {popularProducts.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>

      <div className="max-w-[1286px] mx-auto mt-36 max-md:mt-10">
        <h2 className="text-4xl tracking-tight text-black mb-12">
          вас может заинтересовать
        </h2>

        <div className="grid grid-cols-4 gap-5 max-md:grid-cols-1">
          {interestedProducts.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>

        <button className="w-full py-5 mt-12 text-xs tracking-widest text-center text-white uppercase bg-black">
          показать больше товаров
        </button>
      </div>
    </div>
  );
};

export default Home; 