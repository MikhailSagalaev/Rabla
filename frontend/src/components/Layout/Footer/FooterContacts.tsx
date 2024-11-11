import React from 'react';

const FooterContacts: React.FC = () => {
  return (
    <div className="flex flex-col items-start w-full leading-snug text-white">
      <img 
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/58fc832781f40ae14ec10279871c69c509a0c47eb73e45658047edd9bd0cb0df" 
        alt="Company Logo" 
        className="object-contain w-28 max-w-full aspect-[3.73]"
        loading="lazy" 
      />
      <div className="mt-9 text-2xl leading-none">8 800 101 78 72</div>
      <div className="self-stretch mt-2 text-xs text-zinc-400">
        круглосуточный телефон call-центра
      </div>
      <div className="mt-4 text-lg leading-none">market@rabla.ru</div>
      
      <div className="flex gap-8 mt-6 text-sm whitespace-nowrap">
        <a href="#whatsapp" className="flex gap-2 hover:text-zinc-300 transition-colors">
          <img 
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e3564e89217302ad900ea0b2fb7234b50383006b58406c20c3604bf04b4d1e99" 
            alt="WhatsApp" 
            className="object-contain shrink-0 w-4 aspect-square"
            loading="lazy" 
          />
          <span>WhatsApp</span>
        </a>
        <a href="#telegram" className="flex gap-2 hover:text-zinc-300 transition-colors">
          <img 
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/cdd90ce502b2042603260b5f128e737b166c9058fe6bd1ecf56671ec4c536879" 
            alt="Telegram" 
            className="object-contain shrink-0 w-4 aspect-square"
            loading="lazy" 
          />
          <span>Telegram</span>
        </a>
      </div>
    </div>
  );
};

export default FooterContacts;