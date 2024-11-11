import { ProductData } from '../types/product.types';

const productImages = [
  'https://cdn.leroymerlin.ru/lmru/image/upload/f_auto/q_auto/dpr_1.0/c_pad/w_1000/h_1000/v1692972628/lmcode/SELnZ7nutEKgLmrR-pWTYQ/82565305.png',
  'https://cdn.leroymerlin.ru/lmru/image/upload/f_auto/q_auto/dpr_1.0/c_pad/w_1000/h_1000/v1668585106/lmcode/IMXttfWOBUe2VIAPqxzcZw/17356206.jpg',
  'https://cdn.leroymerlin.ru/lmru/image/upload/f_auto/q_auto/dpr_1.0/c_pad/w_1000/h_1000/v1686319463/lmcode/UdLCCLWFt0KyEjhnk6ua2Q/88449090.jpg'
];

const getRandomImage = () => {
  const randomIndex = Math.floor(Math.random() * productImages.length);
  return productImages[randomIndex];
};

export const recommendedProducts: ProductData[] = [
  {
    id: 1,
    image: getRandomImage(),
    imageSrc: getRandomImage(),
    category: "Ванна акриловая",
    name: "TRITON Стандарт 170*70 см",
    price: "15990 ₽",
    discount: "20%"
  },
  {
    id: 2,
    image: getRandomImage(),
    imageSrc: getRandomImage(),
    category: "Душевая кабина",
    name: "NIAGARA Премиум 90x90 см",
    price: "32990 ₽",
    discount: "15%"
  },
  {
    id: 3,
    image: getRandomImage(),
    imageSrc: getRandomImage(), 
    category: "Ванна чугунная",
    name: "GOLDMAN Классик 170x70 см",
    price: "42990 ₽",
    discount: "30%"
  },
  {
    id: 4,
    image: getRandomImage(),
    imageSrc: getRandomImage(),
    category: "Ванна стальная",
    name: "ROCA CONTESA 150x70 см", 
    price: "17990 ₽",
    discount: "10%"
  },
  {
    id: 5,
    image: getRandomImage(),
    imageSrc: getRandomImage(),
    category: "Душевой уголок",
    name: "BRAVAT Neo BS090.3110A",
    price: "23990 ₽",
    discount: "20%"
  },
  {
    id: 6,
    image: getRandomImage(),
    imageSrc: getRandomImage(),
    category: "Ванна акриловая",
    name: "TRITON Эмма 170x70 см",
    price: "18990 ₽", 
    discount: "25%"
  },
  {
    id: 7,
    image: getRandomImage(),
    imageSrc: getRandomImage(),
    category: "Унитаз-компакт",
    name: "SANITA LUXE Best Lux",
    price: "13990 ₽",
    discount: "25%"
  }
];

// Полный список 30 товаров для каталога
export const catalogProducts: ProductData[] = [
  {
    id: 1,
    image: getRandomImage(),
    imageSrc: getRandomImage(),
    name: "TRITON Аура 150*70 см",
    category: "Ванна акриловая",
    price: "16553 ₽",
    discount: "35%"
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
    image: getRandomImage(),
    imageSrc: getRandomImage()
  },
  {
    id: 4,
    name: "NIAGARA Premium 90*90 см",
    category: "Душевая кабина",
    price: "32990 ₽",
    discount: "25%",
    image: getRandomImage(),
    imageSrc: getRandomImage()
  },
  {
    id: 5,
    name: "CERSANIT Parva подвесной",
    category: "Унитаз",
    price: "12990 ₽",
    discount: "30%",
    image: getRandomImage(),
    imageSrc: getRandomImage()
  },
  {
    id: 6,
    name: "ROCA Gap 60 см",
    category: "Раковина",
    price: "8990 ₽",
    discount: "15%",
    image: getRandomImage(),
    imageSrc: getRandomImage()
  },
  {
    id: 7,
    name: "GROHE Eurosmart для раковины",
    category: "Смеситель",
    price: "5990 ₽",
    discount: "20%",
    image: getRandomImage(),
    imageSrc: getRandomImage()
  },
  {
    id: 8,
    name: "RAVAK Rosa II 170*105 см правая",
    category: "Ванна акриловая",
    price: "29990 ₽",
    discount: "15%",
    image: getRandomImage(),
    imageSrc: getRandomImage()
  },
  {
    id: 9,
    name: "CERSANIT Nano 90*90 см",
    category: "Душевая кабина",
    price: "28990 ₽",
    discount: "20%",
    image: getRandomImage(),
    imageSrc: getRandomImage()
  },
  {
    id: 10,
    name: "LAUFEN Pro подвесной",
    category: "Унитаз",
    price: "15990 ₽",
    discount: "25%",
    image: getRandomImage(),
    imageSrc: getRandomImage()
  },
  {
    id: 11,
    name: "VILLEROY & BOCH Subway 3.0",
    category: "Раковина",
    price: "12990 ₽",
    discount: "10%",
    image: getRandomImage(),
    imageSrc: getRandomImage()
  },
  {
    id: 12,
    name: "HANSGROHE Talis E 110",
    category: "Смеситель",
    price: "7990 ₽",
    discount: "15%",
    image: getRandomImage(),
    imageSrc: getRandomImage()
  },
  {
    id: 13,
    name: "BLB Europa 170*70 см",
    category: "Ванна стальная",
    price: "17990 ₽",
    discount: "20%",
    image: getRandomImage(),
    imageSrc: getRandomImage()
  },
  {
    id: 14,
    name: "AQUATEK Альфа",
    category: "Душевая кабина",
    price: "35990 ₽",
    discount: "30%",
    image: getRandomImage(),
    imageSrc: getRandomImage()
  },
  {
    id: 15,
    name: "DURAVIT D-Neo",
    category: "Унитаз",
    price: "18990 ₽",
    discount: "15%",
    image: getRandomImage(),
    imageSrc: getRandomImage()
  },
  {
    id: 16,
    name: "KERAMAG iCon 75 см",
    category: "Раковина",
    price: "9990 ₽",
    discount: "25%",
    image: getRandomImage(),
    imageSrc: getRandomImage()
  },
  {
    id: 17,
    name: "KLUDI Pure&Style",
    category: "Смеситель",
    price: "6590 ₽",
    discount: "20%",
    image: getRandomImage(),
    imageSrc: getRandomImage()
  },
  {
    id: 18,
    name: "KALDEWEI Saniform Plus",
    category: "Ванна стальная",
    price: "21990 ₽",
    discount: "15%",
    image: getRandomImage(),
    imageSrc: getRandomImage()
  },
  {
    id: 19,
    name: "RADAWAY Premium Plus DWD",
    category: "Душевая кабина",
    price: "39990 ₽",
    discount: "20%",
    image: getRandomImage(),
    imageSrc: getRandomImage()
  },
  {
    id: 20,
    name: "IDEAL STANDARD Connect Air",
    category: "Унитаз",
    price: "16990 ₽",
    discount: "25%",
    image: getRandomImage(),
    imageSrc: getRandomImage()
  },
  {
    id: 21,
    name: "GEBERIT Selnova Square",
    category: "Раковина",
    price: "11990 ₽",
    discount: "15%",
    image: getRandomImage(),
    imageSrc: getRandomImage()
  },
  {
    id: 22,
    name: "BRAVAT Spring",
    category: "Смеситель",
    price: "5990 ₽",
    discount: "30%",
    image: getRandomImage(),
    imageSrc: getRandomImage()
  },
  {
    id: 23,
    name: "ROCA Princess-N 170*75",
    category: "Ванна стальная",
    price: "23990 ₽",
    discount: "20%",
    image: getRandomImage(),
    imageSrc: getRandomImage()
  },
  {
    id: 24,
    name: "HUPPE Design Pure",
    category: "Душевая кабина",
    price: "42990 ₽",
    discount: "15%",
    image: getRandomImage(),
    imageSrc: getRandomImage()
  },
  {
    id: 25,
    name: "VITRA S50",
    category: "Унитаз",
    price: "14990 ₽",
    discount: "25%",
    image: getRandomImage(),
    imageSrc: getRandomImage()
  },
  {
    id: 26,
    name: "JACOB DELAFON Struktura",
    category: "Раковина",
    price: "10990 ₽",
    discount: "20%",
    image: getRandomImage(),
    imageSrc: getRandomImage()
  },
  {
    id: 27,
    name: "AM.PM Spirit V2.0",
    category: "Смеситель",
    price: "6990 ₽",
    discount: "30%",
    image: getRandomImage(),
    imageSrc: getRandomImage()
  },
  {
    id: 28,
    name: "EXCELLENT Oceana 180*80",
    category: "Ванна акриловая",
    price: "31990 ₽",
    discount: "15%",
    image: getRandomImage(),
    imageSrc: getRandomImage()
  },
  {
    id: 29,
    name: "KAISER Linear 57182",
    category: "Душевая стойка",
    price: "21990 ₽",
    discount: "20%",
    image: getRandomImage(),
    imageSrc: getRandomImage()
  },
  {
    id: 30,
    name: "SANITA LUXE Best Lux",
    category: "Унитаз-компакт",
    price: "13990 ₽",
    discount: "25%",
    image: getRandomImage(),
    imageSrc: getRandomImage()
  }
];

export const interiorProducts: ProductData[] = [
  {
    id: 1,
    image: getRandomImage(),
    imageSrc: getRandomImage(),
    category: "Штукатурка",
    name: "LITOKOL Litoplan Base 25 кг",
    price: "372 ₽"
  },
  {
    id: 2,
    image: getRandomImage(),
    imageSrc: getRandomImage(),
    category: "Ванна акриловая",
    name: "RAVAK Rosa II 170*105 см правая",
    price: "29990 ₽",
    discount: "15%"
  },
  {
    id: 3,
    image: getRandomImage(),
    imageSrc: getRandomImage(),
    category: "Плитка настенная",
    name: "KERAMA MARAZZI Гран-Виа 30*60 см",
    price: "1290 ₽",
    discount: "10%"
  },
  {
    id: 4,
    image: getRandomImage(),
    imageSrc: getRandomImage(), 
    category: "Смеситель для раковины",
    name: "GROHE Eurosmart 33265002",
    price: "8490 ₽"
  },
  {
    id: 5,
    image: getRandomImage(),
    imageSrc: getRandomImage(),
    category: "Ламинат",
    name: "QUICK STEP Eligna 32 класс дуб венге",
    price: "1890 ₽",
    discount: "20%"
  },
  {
    id: 6,
    image: getRandomImage(),
    imageSrc: getRandomImage(),
    category: "Обои виниловые",
    name: "VICTORIA STENOVA Джунгли 1.06*10 м",
    price: "2490 ₽"
  },
  {
    id: 7,
    image: getRandomImage(),
    imageSrc: getRandomImage(),
    category: "Краска интерьерная",
    name: "TIKKURILA Harmony 9л матовая",
    price: "5990 ₽",
    discount: "15%"
  },
  {
    id: 8,
    image: getRandomImage(),
    imageSrc: getRandomImage(),
    category: "Паркет",
    name: "TARKETT Tango Classic Дуб Рустик",
    price: "3290 ₽"
  },
  {
    id: 9,
    image: getRandomImage(),
    imageSrc: getRandomImage(),
    category: "Керамогранит",
    name: "ESTIMA Standard ST04 60*60 см",
    price: "890 ₽",
    discount: "25%"
  },
  {
    id: 10,
    image: getRandomImage(),
    imageSrc: getRandomImage(),
    category: "Декоративный камень",
    name: "WHITE HILLS Берн угловой элемент",
    price: "1490 ₽"
  },
  {
    id: 11,
    image: getRandomImage(),
    imageSrc: getRandomImage(),
    category: "Потолочная плитка",
    name: "ARMSTRONG Retail Board 600*600 мм",
    price: "290 ₽"
  },
  {
    id: 12,
    image: getRandomImage(),
    imageSrc: getRandomImage(),
    category: "Линолеум",
    name: "TARKETT Force Canvas 3 3.5м",
    price: "890 ₽",
    discount: "30%"
  }
];