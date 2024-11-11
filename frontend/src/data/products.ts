import { Product } from '../types/product.types';

const productImages = [
  'https://cdn.leroymerlin.ru/lmru/image/upload/f_auto/q_auto/dpr_1.0/c_pad/w_1000/h_1000/v1692972628/lmcode/SELnZ7nutEKgLmrR-pWTYQ/82565305.png',
  'https://cdn.leroymerlin.ru/lmru/image/upload/f_auto/q_auto/dpr_1.0/c_pad/w_1000/h_1000/v1668585106/lmcode/IMXttfWOBUe2VIAPqxzcZw/17356206.jpg',
  'https://cdn.leroymerlin.ru/lmru/image/upload/f_auto/q_auto/dpr_1.0/c_pad/w_1000/h_1000/v1686319463/lmcode/UdLCCLWFt0KyEjhnk6ua2Q/88449090.jpg'
];

const getRandomImage = () => {
  const randomIndex = Math.floor(Math.random() * productImages.length);
  return productImages[randomIndex];
};

export const recommendedProducts: Product[] = [
  {
    id: 1,
    imageSrc: getRandomImage(),
    category: "Ванна акриловая",
    name: "TRITON Стандарт 170*70 см",
    price: "15990 ₽",
    discount: "20%"
  },
  {
    id: 2,
    imageSrc: getRandomImage(),
    category: "Ванна стальная",
    name: "ROCA CONTESA 170*70 см",
    price: "19990 ₽",
    discount: "15%"
  },
  {
    id: 3,
    imageSrc: getRandomImage(),
    category: "Ванна чугунная",
    name: "GOLDMAN Classic 170*75 см",
    price: "45990 ₽",
    discount: "10%"
  },
  {
    id: 4,
    imageSrc: getRandomImage(),
    category: "Душевая кабина",
    name: "NIAGARA Premium 90*90 см",
    price: "32990 ₽",
    discount: "25%"
  },
  {
    id: 5,
    imageSrc: getRandomImage(),
    category: "Унитаз",
    name: "CERSANIT Parva подвесной",
    price: "12990 ₽",
    discount: "30%"
  },
  {
    id: 6,
    imageSrc: getRandomImage(),
    category: "Раковина",
    name: "ROCA Gap 60 см",
    price: "8990 ₽",
    discount: "15%"
  },
  {
    id: 7,
    imageSrc: getRandomImage(),
    category: "Смеситель",
    name: "GROHE Eurosmart для раковины",
    price: "5990 ₽",
    discount: "20%"
  },
  {
    id: 8,
    imageSrc: getRandomImage(),
    category: "Ванна акриловая",
    name: "RAVAK Rosa II 170*105 см правая",
    price: "29990 ₽",
    discount: "15%"
  },
  {
    id: 9,
    imageSrc: getRandomImage(),
    category: "Душевая стойка",
    name: "HANSGROHE Crometta 160",
    price: "18990 ₽",
    discount: "25%"
  },
  {
    id: 10,
    imageSrc: getRandomImage(),
    category: "Унитаз-компакт",
    name: "VITRA S50 с сиденьем",
    price: "15990 ₽",
    discount: "20%"
  },
  {
    id: 11,
    imageSrc: getRandomImage(),
    category: "Раковина",
    name: "LAUFEN Pro S 60 см",
    price: "9990 ₽",
    discount: "30%"
  },
  {
    id: 12,
    imageSrc: getRandomImage(),
    category: "Смеситель",
    name: "HANSGROHE Focus для ванны",
    price: "12990 ₽",
    discount: "15%"
  },
  {
    id: 13,
    imageSrc: getRandomImage(),
    category: "Ванна стальная",
    name: "KALDEWEI Saniform Plus 170*75",
    price: "22990 ₽",
    discount: "20%"
  },
  {
    id: 14,
    imageSrc: getRandomImage(),
    category: "Душевая кабина",
    name: "TIMO Comfort T-8820",
    price: "42990 ₽",
    discount: "10%"
  },
  {
    id: 15,
    imageSrc: getRandomImage(),
    category: "Унитаз",
    name: "IDEAL STANDARD Connect Air",
    price: "19990 ₽",
    discount: "25%"
  },
  {
    id: 16,
    imageSrc: getRandomImage(),
    category: "Раковина",
    name: "VILLEROY & BOCH Subway 2.0",
    price: "14990 ₽",
    discount: "20%"
  },
  {
    id: 17,
    imageSrc: getRandomImage(),
    category: "Смеситель",
    name: "KLUDI Pure&Easy для душа",
    price: "7990 ₽",
    discount: "30%"
  },
  {
    id: 18,
    imageSrc: getRandomImage(),
    category: "Ванна акриловая",
    name: "CERSANIT Zen 180*85 см",
    price: "26990 ₽",
    discount: "15%"
  },
  {
    id: 19,
    imageSrc: getRandomImage(),
    category: "Душевая панель",
    name: "TIMO Selene SX-4069",
    price: "35990 ₽",
    discount: "20%"
  },
  {
    id: 20,
    imageSrc: getRandomImage(),
    category: "Унитаз-компакт",
    name: "ROCA Gap Clean Rim",
    price: "17990 ₽",
    discount: "25%"
  },
  {
    id: 21,
    imageSrc: getRandomImage(),
    category: "Раковина",
    name: "DURAVIT D-Code 65 см",
    price: "11990 ₽",
    discount: "15%"
  },
  {
    id: 22,
    imageSrc: getRandomImage(),
    category: "Смеситель",
    name: "ORAS Optima для кухни",
    price: "8990 ₽",
    discount: "20%"
  },
  {
    id: 23,
    imageSrc: getRandomImage(),
    category: "Ванна чугунная",
    name: "ROCA Continental 170*70",
    price: "39990 ₽",
    discount: "10%"
  },
  {
    id: 24,
    imageSrc: getRandomImage(),
    category: "Душевая кабина",
    name: "BRAVAT Matrix BS090.2200A",
    price: "45990 ₽",
    discount: "15%"
  },
  {
    id: 25,
    imageSrc: getRandomImage(),
    category: "Унитаз",
    name: "GROHE Bau Ceramic подвесной",
    price: "16990 ₽",
    discount: "25%"
  },
  {
    id: 26,
    imageSrc: getRandomImage(),
    category: "Раковина",
    name: "JACOB DELAFON Struktura",
    price: "10990 ₽",
    discount: "20%"
  },
  {
    id: 27,
    imageSrc: getRandomImage(),
    category: "Смеситель",
    name: "AM.PM Spirit V2.0",
    price: "6990 ₽",
    discount: "30%"
  },
  {
    id: 28,
    imageSrc: getRandomImage(),
    category: "Ванна акриловая",
    name: "EXCELLENT Oceana 180*80",
    price: "31990 ₽",
    discount: "15%"
  },
  {
    id: 29,
    imageSrc: getRandomImage(),
    category: "Душевая стойка",
    name: "KAISER Linear 57182",
    price: "21990 ₽",
    discount: "20%"
  },
  {
    id: 30,
    imageSrc: getRandomImage(),
    category: "Унитаз-компакт",
    name: "SANITA LUXE Best Lux",
    price: "13990 ₽",
    discount: "25%"
  }
];

// Полный список 30 товаров для каталога
export const catalogProducts: Product[] = [
  {
    id: 1,
    name: "TRITON Аура 150*70 см",
    category: "Ванна акриловая",
    price: "16553 ₽",
    discount: "35%",
    imageSrc: getRandomImage()
  },
  {
    id: 2,
    name: "ROCA CONTESA 170*70 см",
    category: "Ванна стальная", 
    price: "19990 ₽",
    discount: "15%",
    imageSrc: getRandomImage()
  },
  {
    id: 3,
    name: "GOLDMAN Classic 170*75 см",
    category: "Ванна чугунная",
    price: "45990 ₽", 
    discount: "10%",
    imageSrc: getRandomImage()
  },
  {
    id: 4,
    name: "NIAGARA Premium 90*90 см",
    category: "Душевая кабина",
    price: "32990 ₽",
    discount: "25%",
    imageSrc: getRandomImage()
  },
  {
    id: 5,
    name: "CERSANIT Parva подвесной",
    category: "Унитаз",
    price: "12990 ₽",
    discount: "30%",
    imageSrc: getRandomImage()
  },
  {
    id: 6,
    name: "ROCA Gap 60 см",
    category: "Раковина",
    price: "8990 ₽",
    discount: "15%",
    imageSrc: getRandomImage()
  },
  {
    id: 7,
    name: "GROHE Eurosmart для раковины",
    category: "Смеситель",
    price: "5990 ₽",
    discount: "20%",
    imageSrc: getRandomImage()
  },
  {
    id: 8,
    name: "RAVAK Rosa II 170*105 см правая",
    category: "Ванна акриловая",
    price: "29990 ₽",
    discount: "15%",
    imageSrc: getRandomImage()
  },
  {
    id: 9,
    name: "CERSANIT Nano 90*90 см",
    category: "Душевая кабина",
    price: "28990 ₽",
    discount: "20%",
    imageSrc: getRandomImage()
  },
  {
    id: 10,
    name: "LAUFEN Pro подвесной",
    category: "Унитаз",
    price: "15990 ₽",
    discount: "25%",
    imageSrc: getRandomImage()
  },
  {
    id: 11,
    name: "VILLEROY & BOCH Subway 3.0",
    category: "Раковина",
    price: "12990 ₽",
    discount: "10%",
    imageSrc: getRandomImage()
  },
  {
    id: 12,
    name: "HANSGROHE Talis E 110",
    category: "Смеситель",
    price: "7990 ₽",
    discount: "15%",
    imageSrc: getRandomImage()
  },
  {
    id: 13,
    name: "BLB Europa 170*70 см",
    category: "Ванна стальная",
    price: "17990 ₽",
    discount: "20%",
    imageSrc: getRandomImage()
  },
  {
    id: 14,
    name: "AQUATEK Альфа",
    category: "Душевая кабина",
    price: "35990 ₽",
    discount: "30%",
    imageSrc: getRandomImage()
  },
  {
    id: 15,
    name: "DURAVIT D-Neo",
    category: "Унитаз",
    price: "18990 ₽",
    discount: "15%",
    imageSrc: getRandomImage()
  },
  {
    id: 16,
    name: "KERAMAG iCon 75 см",
    category: "Раковина",
    price: "9990 ₽",
    discount: "25%",
    imageSrc: getRandomImage()
  },
  {
    id: 17,
    name: "KLUDI Pure&Style",
    category: "Смеситель",
    price: "6590 ₽",
    discount: "20%",
    imageSrc: getRandomImage()
  },
  {
    id: 18,
    name: "KALDEWEI Saniform Plus",
    category: "Ванна стальная",
    price: "21990 ₽",
    discount: "15%",
    imageSrc: getRandomImage()
  },
  {
    id: 19,
    name: "RADAWAY Premium Plus DWD",
    category: "Душевая кабина",
    price: "39990 ₽",
    discount: "20%",
    imageSrc: getRandomImage()
  },
  {
    id: 20,
    name: "IDEAL STANDARD Connect Air",
    category: "Унитаз",
    price: "16990 ₽",
    discount: "25%",
    imageSrc: getRandomImage()
  },
  {
    id: 21,
    name: "GEBERIT Selnova Square",
    category: "Раковина",
    price: "11990 ₽",
    discount: "15%",
    imageSrc: getRandomImage()
  },
  {
    id: 22,
    name: "BRAVAT Spring",
    category: "Смеситель",
    price: "5990 ₽",
    discount: "30%",
    imageSrc: getRandomImage()
  },
  {
    id: 23,
    name: "ROCA Princess-N 170*75",
    category: "Ванна стальная",
    price: "23990 ₽",
    discount: "20%",
    imageSrc: getRandomImage()
  },
  {
    id: 24,
    name: "HUPPE Design Pure",
    category: "Душевая кабина",
    price: "42990 ₽",
    discount: "15%",
    imageSrc: getRandomImage()
  },
  {
    id: 25,
    name: "VITRA S50",
    category: "Унитаз",
    price: "14990 ₽",
    discount: "25%",
    imageSrc: getRandomImage()
  },
  {
    id: 26,
    name: "JACOB DELAFON Struktura",
    category: "Раковина",
    price: "10990 ₽",
    discount: "20%",
    imageSrc: getRandomImage()
  },
  {
    id: 27,
    name: "AM.PM Spirit V2.0",
    category: "Смеситель",
    price: "6990 ₽",
    discount: "30%",
    imageSrc: getRandomImage()
  },
  {
    id: 28,
    name: "EXCELLENT Oceana 180*80",
    category: "Ванна акриловая",
    price: "31990 ₽",
    discount: "15%",
    imageSrc: getRandomImage()
  },
  {
    id: 29,
    name: "KAISER Linear 57182",
    category: "Душевая стойка",
    price: "21990 ₽",
    discount: "20%",
    imageSrc: getRandomImage()
  },
  {
    id: 30,
    name: "SANITA LUXE Best Lux",
    category: "Унитаз-компакт",
    price: "13990 ₽",
    discount: "25%",
    imageSrc: getRandomImage()
  }
];

export const interiorProducts: Product[] = [
  {
    id: 1,
    imageSrc: getRandomImage(),
    category: "Штукатурка",
    name: "LITOKOL Litoplan Base 25 кг",
    price: "372 ₽"
  },
  {
    id: 2,
    imageSrc: getRandomImage(),
    category: "Шпаклевка",
    name: "KNAUF Ротбанд 30 кг",
    price: "589 ₽"
  },
  {
    id: 3,
    imageSrc: getRandomImage(),
    category: "Грунтовка",
    name: "CERESIT CT 17 10 л",
    price: "890 ₽"
  },
  {
    id: 4,
    imageSrc: getRandomImage(),
    category: "Затирка",
    name: "LITOKOL Litochrom 1-6 2 кг",
    price: "450 ₽"
  },
  {
    id: 5,
    imageSrc: getRandomImage(),
    category: "Клей",
    name: "MAPEI Kerabond T-R 25 кг",
    price: "780 ₽"
  },
  {
    id: 6,
    imageSrc: getRandomImage(),
    category: "Гипсокартон",
    name: "KNAUF ГКЛ 2500x1200x12.5 мм",
    price: "420 ₽"
  },
  {
    id: 7,
    imageSrc: getRandomImage(),
    category: "Профиль",
    name: "KNAUF ПН 75x40 3 м",
    price: "180 ₽"
  },
  {
    id: 8,
    imageSrc: getRandomImage(),
    category: "Краска",
    name: "TIKKURILA Euro Matt 2 9 л",
    price: "2990 ₽"
  },
  {
    id: 9,
    imageSrc: getRandomImage(),
    category: "Плитка",
    name: "KERAMA MARAZZI 20x20 см",
    price: "890 ₽"
  },
  {
    id: 10,
    imageSrc: getRandomImage(),
    category: "Ламинат",
    name: "TARKETT Gallery 1292x194 мм",
    price: "1290 ₽"
  },
  {
    id: 11,
    imageSrc: getRandomImage(),
    category: "Обои",
    name: "VICTORIA STENOVA Джунгли",
    price: "1590 ₽"
  },
  {
    id: 12,
    imageSrc: getRandomImage(),
    category: "Линолеум",
    name: "TARKETT Force Canvas 3 м",
    price: "890 ₽"
  },
  {
    id: 13,
    imageSrc: getRandomImage(),
    category: "Паркет",
    name: "BARLINEK Дуб классик",
    price: "2990 ₽"
  },
  {
    id: 14,
    imageSrc: getRandomImage(),
    category: "Керамогранит",
    name: "ESTIMA Standard ST 01 60x60",
    price: "1290 ₽"
  },
  {
    id: 15,
    imageSrc: getRandomImage(),
    category: "Мозаика",
    name: "KERAMA MARAZZI Золото",
    price: "3990 ₽"
  },
  {
    id: 16,
    imageSrc: getRandomImage(),
    category: "Декор",
    name: "ATLAS CONCORDE Бордюр",
    price: "590 ₽"
  },
  {
    id: 17,
    imageSrc: getRandomImage(),
    category: "Панели ПВХ",
    name: "VENTA Мрамор серый",
    price: "290 ₽"
  },
  {
    id: 18,
    imageSrc: getRandomImage(),
    category: "Подвесной потолок",
    name: "ARMSTRONG Bajkal 600x600",
    price: "190 ₽"
  },
  {
    id: 19,
    imageSrc: getRandomImage(),
    category: "Сайдинг",
    name: "DOCKE Premium D4.5D",
    price: "890 ₽"
  },
  {
    id: 20,
    imageSrc: getRandomImage(),
    category: "Утеплитель",
    name: "ROCKWOOL Лайт Баттс 50 мм",
    price: "1290 ₽"
  },
  {
    id: 21,
    imageSrc: getRandomImage(),
    category: "Пена монтажная",
    name: "MAKROFLEX Premium 750 мл",
    price: "490 ₽"
  },
  {
    id: 22,
    imageSrc: getRandomImage(),
    category: "Герметик",
    name: "МОМЕНТ Гермент силикон",
    price: "290 ₽"
  },
  {
    id: 23,
    imageSrc: getRandomImage(),
    category: "Клей обойный",
    name: "KLEO Extra 250 г",
    price: "190 ₽"
  },
  {
    id: 24,
    imageSrc: getRandomImage(),
    category: "Растворитель",
    name: "ТЕКС Уайт-спирит 0.5 л",
    price: "120 ₽"
  },
  {
    id: 25,
    imageSrc: getRandomImage(),
    category: "Лак",
    name: "PINOTEX Interior 2.7 л",
    price: "1490 ₽"
  },
  {
    id: 26,
    imageSrc: getRandomImage(),
    category: "Эмаль",
    name: "HAMMERITE серебристая 0.75 л",
    price: "890 ₽"
  },
  {
    id: 27,
    imageSrc: getRandomImage(),
    category: "Пропитка",
    name: "NEOMID Base Eco 5 л",
    price: "690 ₽"
  },
  {
    id: 28,
    imageSrc: getRandomImage(),
    category: "Антисептик",
    name: "TIKKURILA Valtti Expert 9 л",
    price: "3990 ₽"
  },
  {
    id: 29,
    imageSrc: getRandomImage(),
    category: "Гидроизоляция",
    name: "CERESIT CR 65 25 кг",
    price: "2490 ₽"
  },
  {
    id: 30,
    imageSrc: getRandomImage(),
    category: "Пленка",
    name: "ИЗОСПАН A 70 м²",
    price: "1990 ₽"
  }
];

export const popularProducts: Product[] = [
  {
    id: 1,
    imageSrc: getRandomImage(),
    category: "Ванна акриловая",
    name: "TRITON Стандарт 170*70 см",
    price: "15990 ₽",
    discount: "20%"
  },
  {
    id: 2,
    imageSrc: getRandomImage(),
    category: "Душевая кабина", 
    name: "NIAGARA Premium 90*90 см",
    price: "32990 ₽",
    discount: "25%"
  },
  {
    id: 3,
    imageSrc: getRandomImage(),
    category: "Унитаз",
    name: "CERSANIT Parva подвесной",
    price: "12990 ₽",
    discount: "30%"
  },
  {
    id: 4,
    imageSrc: getRandomImage(),
    category: "Раковина",
    name: "ROCA Gap 60 см",
    price: "8990 ₽",
    discount: "15%"
  },
  {
    id: 5,
    imageSrc: getRandomImage(),
    category: "Смеситель",
    name: "GROHE Eurosmart для раковины",
    price: "5990 ₽",
    discount: "20%"
  },
  {
    id: 6,
    imageSrc: getRandomImage(),
    category: "Ванна акриловая",
    name: "RAVAK Rosa II 170*105 см правая",
    price: "29990 ₽",
    discount: "15%"
  }
];