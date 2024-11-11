import React from 'react';

const FooterBottom: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center px-16 py-5 mt-40 w-full border-t border-white border-opacity-10 max-md:px-5 max-md:mt-10">
      <div className="flex flex-wrap gap-5 justify-between w-full max-w-[1180px]">
        <div className="flex flex-col text-xs text-white">
          <div className="self-start leading-none">
            © 2024 Rabla Market - интернет-магазин строительных и бытовых товаров.
          </div>
          <div className="mt-2 leading-4">
            <span className="capitalize">У</span>казанные на сайте цены не являются публичной офертой.{" "}
            <span className="capitalize">Ф</span>отографии, характеристики, внешний вид товаров могут отличаться от указанных на сайте или могут быть изменены производителем без отображения в каталоге.
          </div>
        </div>
        
        <div className="flex gap-6 my-auto">
          {['visa', 'mastercard', 'mir'].map((payment, index) => (
            <img 
              key={index}
              src={`https://cdn.builder.io/api/v1/image/assets/TEMP/${index === 0 ? '0eaa751e8289a6feaa0d42680da588fa492fe6e6049e2f49e982429c6ca5cc49' : index === 1 ? 'f10b67e58d96f4f5d229f603b5ea6e650f098a450234460a85a58736d176f7e4' : '95ca0f6f2db1d08ebb9bfde6e2e9db2dd176013db940c4d36aa81dc57fd390e8'}`}
              alt={`Payment ${payment}`}
              className={`object-contain shrink-0 ${index === 0 ? 'w-[43px] aspect-[1.43]' : index === 1 ? 'w-[34px] aspect-[1.13]' : 'w-[47px] aspect-[1.57]'}`}
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FooterBottom;