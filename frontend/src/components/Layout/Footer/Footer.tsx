import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const socialLinks = [
    {
      name: 'Facebook',
      icon: 'https://cdn.builder.io/api/v1/image/assets/88cd18cb416f431783e515601f7fda51/2a297af36e03620bcdaa248fd817e78e6cda86b7099851cd18db446bfda1e6d4',
      url: '#facebook'
    },
    {
      name: 'Instagram',
      icon: 'https://cdn.builder.io/api/v1/image/assets/88cd18cb416f431783e515601f7fda51/7bd2fd0bd2d73f94a3c8e230dae5c11b2f3fd8ee3714f6856cda3f3d472c5305',
      url: '#instagram'
    },
    {
      name: 'YouTube',
      icon: 'https://cdn.builder.io/api/v1/image/assets/88cd18cb416f431783e515601f7fda51/c2646f05a17f2f7d3b1eab91efd6c9dba6f6f9f173db47665439c83147ea6570',
      url: '#youtube'
    }
  ];

  const paymentMethods = [
    {
      name: 'Visa',
      image: 'https://cdn.builder.io/api/v1/image/assets/88cd18cb416f431783e515601f7fda51/0eaa751e8289a6feaa0d42680da588fa492fe6e6049e2f49e982429c6ca5cc49',
      aspect: '1.43',
      width: '43px'
    },
    {
      name: 'Mastercard',
      image: 'https://cdn.builder.io/api/v1/image/assets/88cd18cb416f431783e515601f7fda51/f10b67e58d96f4f5d229f603b5ea6e650f098a450234460a85a58736d176f7e4',
      aspect: '1.13',
      width: '34px'
    },
    {
      name: 'Mir',
      image: 'https://cdn.builder.io/api/v1/image/assets/88cd18cb416f431783e515601f7fda51/95ca0f6f2db1d08ebb9bfde6e2e9db2dd176013db940c4d36aa81dc57fd390e8',
      aspect: '1.57',
      width: '47px'
    }
  ];

  return (
    <footer className="flex overflow-hidden flex-col self-stretch pt-28 pb-11 mt-24 w-full bg-black max-md:pt-24 max-md:mt-10">
      {/* Main Footer Content */}
      <div className="ml-28 w-full max-w-[972px] max-md:ml-5 max-md:mr-5">
        <div className="flex gap-5 max-md:flex-col">
          {/* Contact Information */}
          <div className="flex flex-col w-[33%] max-md:w-full">
            <div className="flex flex-col items-start w-full leading-snug text-white max-md:mt-10">
              <Link to="/">
                <img 
                  src="https://cdn.builder.io/api/v1/image/assets/88cd18cb416f431783e515601f7fda51/03b6bb92bb4cc176d37e99bb17ac31833056c2ec30b6298fcae20c6f52960927" 
                  alt="Logo" 
                  className="object-contain w-28 max-w-full aspect-[3.73]"
                  loading="lazy" 
                />
              </Link>
              <div className="mt-9 text-2xl leading-none hover:text-gray-200 transition-colors">
                <a href="tel:88001017872">8 800 101 78 72</a>
              </div>
              <div className="self-stretch mt-2 text-xs text-zinc-400">
                круглосуточный телефон call-центра
              </div>
              <div className="flex gap-8 mt-6 text-sm whitespace-nowrap">
                <a href="#whatsapp" className="flex gap-2 hover:text-gray-300 transition-colors">
                  <img 
                    src="https://cdn.builder.io/api/v1/image/assets/88cd18cb416f431783e515601f7fda51/e3564e89217302ad900ea0b2fb7234b50383006b58406c20c3604bf04b4d1e99" 
                    alt="WhatsApp" 
                    className="object-contain shrink-0 w-4 aspect-square"
                    loading="lazy" 
                  />
                  <span>WhatsApp</span>
                </a>
                <a href="#telegram" className="flex gap-2 hover:text-gray-300 transition-colors">
                  <img 
                    src="https://cdn.builder.io/api/v1/image/assets/88cd18cb416f431783e515601f7fda51/cdd90ce502b2042603260b5f128e737b166c9058fe6bd1ecf56671ec4c536879" 
                    alt="Telegram" 
                    className="object-contain shrink-0 w-4 aspect-square"
                    loading="lazy" 
                  />
                  <span>Telegram</span>
                </a>
              </div>
            </div>
          </div>

          {/* About Us Navigation */}
          <nav className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow items-start mt-16 text-sm leading-none text-zinc-400 max-md:mt-10">
              <h2 className="text-xl leading-none text-white">о нас</h2>
              <Link to="/privacy" className="self-stretch mt-8 hover:text-white transition-colors">
                политика конфиденциальности
              </Link>
              <Link to="/payment" className="mt-5 hover:text-white transition-colors">
                оплата и доставка
              </Link>
              <Link to="/contacts" className="mt-6 hover:text-white transition-colors">
                контакты
              </Link>
            </div>
          </nav>

          {/* Additional Navigation */}
          <nav className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow items-start mt-16 text-sm leading-none text-zinc-400 max-md:mt-10">
              <h2 className="text-xl leading-none text-white">дополнительно</h2>
              <Link to="/promotions" className="mt-8 hover:text-white transition-colors">
                акции
              </Link>
              <Link to="/manufacturers" className="mt-7 leading-none hover:text-white transition-colors">
                производители
              </Link>
              <Link to="/gift-certificates" className="self-stretch mt-6 hover:text-white transition-colors">
                подарочные сертификаты
              </Link>
            </div>
          </nav>
        </div>
      </div>

      {/* Social Media and Payment Methods */}
      <div className="flex flex-col justify-center px-16 py-8 mt-40 w-full border-t border-white border-opacity-10 max-md:px-5 max-md:mt-10">
        <div className="flex flex-wrap gap-5 justify-between w-full max-w-[1180px] mx-auto">
          {/* Social Media Links */}
          <div className="flex gap-6 my-auto">
            {socialLinks.map((social) => (
              <a 
                key={social.name}
                href={social.url}
                aria-label={social.name}
                className="hover:opacity-80 transition-opacity"
              >
                <img 
                  src={social.icon}
                  alt={social.name}
                  className="object-contain shrink-0 w-5 aspect-square"
                  loading="lazy" 
                />
              </a>
            ))}
          </div>

          {/* Payment Methods */}
          <div className="flex gap-6">
            {paymentMethods.map((method) => (
              <img 
                key={method.name}
                src={method.image}
                alt={method.name}
                className={`object-contain shrink-0 aspect-[${method.aspect}] w-[${method.width}]`}
                loading="lazy" 
              />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Border */}
      <div className="flex w-full border-t border-white border-opacity-10 min-h-[1px]" />
    </footer>
  );
};

export default Footer;