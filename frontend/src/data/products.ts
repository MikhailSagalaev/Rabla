import { ProductData } from '../types/product.types';

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

export const products: ProductData[] = [
  {
    id: 1,
    name: "Ванна ESTIMA Comfort",
    category: "baths",
    price: 89990,
    imageSrc: "/images/products/bath-1.jpg",
    discount: "-15%",
    article: "EST-2023-001",
    manufacturer: "ESTIMA",
    unit: "шт",
    weight: 45.5,
    description: "Современная ванна с эргономичным дизайном и долговечным акриловым покрытием. Идеально подходит для ванных комнат любого размера.",
    characteristics: {
      "Материал": "Акрил",
      "Длина": "170 см",
      "Ширина": "70 см",
      "Глубина": "45 см",
      "Объем": "180 л",
      "Цвет": "Белый",
      "Страна производства": "Россия",
      "Гарантия": "10 лет"
    },
    images: productImages,
    inStock: true,
    isHit: true,
    reviews: [
      {
        id: "1",
        author: "Анна",
        rating: 5,
        text: "Отличная ванна! Качество на высоте.",
        date: "2024-02-15",
        advantages: "Качественный материал, удобная форма",
        disadvantages: "Нет",
        useTime: "Использует больше года",
        likes: 12,
        dislikes: 0
      }
    ]
  },
  {
    id: 2,
    name: "Ванна ESTIMA Comfort",
    category: "baths",
    price: 89990,
    imageSrc: "/images/products/bath-2.jpg",
    discount: "-15%",
    article: "EST-2023-002",
    manufacturer: "ESTIMA",
    unit: "шт",
    weight: 45.5,
    description: "Современная ванна с эргономичным дизайном и долговечным акриловым покрытием. Идеально подходит для ванных комнат любого размера.",
    characteristics: {
      "Материал": "Акрил",
      "Длина": "170 см",
      "Ширина": "70 см",
      "Глубина": "45 см",
      "Объем": "180 л",
      "Цвет": "Белый",
      "Страна производства": "Россия",
      "Гарантия": "10 лет"
    },
    images: productImages,
    inStock: true,
    isHit: true,
  },
  {
    id: 3,
    name: "Ванна ESTIMA Elite",
    category: "baths",
    price: 109990,
    imageSrc: "/images/products/bath-3.jpg",
    discount: "-10%",
    article: "EST-2023-003",
    manufacturer: "ESTIMA",
    unit: "шт",
    weight: 50.5,
    description: "Премиальная ванна с инновационным дизайном и технологией анти-скольжения.",
    characteristics: {
      "Материал": "Акрил премиум-класса",
      "Длина": "190 см",
      "Ширина": "85 см",
      "Глубина": "55 см",
      "Объем": "220 л",
      "Цвет": "Белый матовый",
      "Страна производства": "Россия",
      "Гарантия": "15 лет"
    },
    images: productImages,
    inStock: true,
    isHit: true,
    reviews: [
      {
        id: "1",
        author: "Ольга",
        rating: 5,
        text: "Ванна превзошла ожидания. Очень комфортная и элегантная.",
        date: "2024-03-15",
        advantages: "Комфорт, элегантность, качество",
        disadvantages: "Высокая цена",
        useTime: "Использует месяц",
        likes: 10,
        dislikes: 0
      }
    ]
  },
  {
    id: 4,
    name: "Ванна ESTIMA Luxe",
    category: "baths",
    price: 129990,
    imageSrc: "/images/products/bath-4.jpg",
    discount: "-5%",
    article: "EST-2023-004",
    manufacturer: "ESTIMA",
    unit: "шт",
    weight: 55.5,
    description: "Люксовая ванна с уникальным дизайном и технологией гидромассажа.",
    characteristics: {
      "Материал": "Акрил люкс-класса",
      "Длина": "200 см",
      "Ширина": "90 см",
      "Глубина": "60 см",
      "Объем": "250 л",
      "Цвет": "Белый с золотистым оттенком",
      "Страна производства": "Россия",
      "Гарантия": "20 лет"
    },
    images: productImages,
    inStock: true,
    isNew: true,
    reviews: [
      {
        id: "1",
        author: "Иван",
        rating: 5,
        text: "Ванна - это шедевр. Очень комфортная и функциональная.",
        date: "2024-04-01",
        advantages: "Комфорт, функциональность, качество",
        disadvantages: "Высокая цена",
        useTime: "Использует месяц",
        likes: 12,
        dislikes: 0
      }
    ]
  },
  {
    id: 5,
    name: "Ванна ESTIMA Pro",
    category: "baths",
    price: 89990,
    imageSrc: "/images/products/bath-5.jpg",
    discount: "-15%",
    article: "EST-2023-005",
    manufacturer: "ESTIMA",
    unit: "шт",
    weight: 48.5,
    description: "Профессиональная ванна с инновационным дизайном и технологией анти-скольжения.",
    characteristics: {
      "Материал": "Акрил премиум-класса",
      "Длина": "180 см",
      "Ширина": "80 см",
      "Глубина": "50 см",
      "Объем": "200 л",
      "Цвет": "Белый глянцевый",
      "Страна производства": "Россия",
      "Гарантия": "15 лет"
    },
    images: productImages,
    inStock: true,
    isHit: true,
    reviews: [
      {
        id: "1",
        author: "Мария",
        rating: 5,
        text: "Ванна - это отличный выбор для любого дома.",
        date: "2024-04-15",
        advantages: "Качество, комфорт, функциональность",
        disadvantages: "Высокая цена",
        useTime: "Использует месяц",
        likes: 10,
        dislikes: 0
      }
    ]
  },
  {
    id: 6,
    name: "Ванна ESTIMA Classic",
    category: "baths",
    price: 69990,
    imageSrc: "/images/products/bath-6.jpg",
    discount: "-10%",
    article: "EST-2023-006",
    manufacturer: "ESTIMA",
    unit: "шт",
    weight: 45.5,
    description: "Классическая ванна с традиционным дизайном и качественным акрилом.",
    characteristics: {
      "Материал": "Акрил",
      "Длина": "170 см",
      "Ширина": "70 см",
      "Глубина": "45 см",
      "Объем": "180 л",
      "Цвет": "Белый",
      "Страна производства": "Россия",
      "Гарантия": "10 лет"
    },
    images: productImages,
    inStock: true,
    isHit: true,
    reviews: [
      {
        id: "1",
        author: "Алексей",
        rating: 5,
        text: "Ванна - это отличный выбор для любого дома.",
        date: "2024-05-01",
        advantages: "Качество, комфорт, доступная цена",
        disadvantages: "Нет",
        useTime: "Использует месяц",
        likes: 12,
        dislikes: 0
      }
    ]
  },
  {
    id: 7,
    name: "Ванна ESTIMA Premium",
    category: "baths",
    price: 99990,
    imageSrc: "/images/products/bath-7.jpg",
    discount: "-5%",
    article: "EST-2023-007",
    manufacturer: "ESTIMA",
    unit: "шт",
    weight: 52.5,
    description: "Премиальная ванна с инновационным дизайном и технологией гидромассажа.",
    characteristics: {
      "Материал": "Акрил премиум-класса",
      "Длина": "190 см",
      "Ширина": "85 см",
      "Глубина": "55 см",
      "Объем": "220 л",
      "Цвет": "Белый матовый",
      "Страна производства": "Россия",
      "Гарантия": "20 лет"
    },
    images: productImages,
    inStock: true,
    isNew: true,
    reviews: [
      {
        id: "1",
        author: "Наталья",
        rating: 5,
        text: "Ванна - это шедевр. Очень комфортная и функциональная.",
        date: "2024-05-15",
        advantages: "Комфорт, функциональность, качество",
        disadvantages: "Высокая цена",
        useTime: "Использует месяц",
        likes: 10,
        dislikes: 0
      }
    ]
  }
];

export const brandProducts: ProductData[] = [
  {
    id: 101,
    name: "Ванна ESTIMA Comfort",
    category: "baths",
    price: 89990,
    imageSrc: "/images/products/estima-1.jpg",
    discount: "-15%",
    article: "EST-2023-101",
    manufacturer: "ESTIMA",
    unit: "шт",
    weight: 48.5,
    description: "Премиальная ванна из коллекции Comfort с инновационным покрытием и системой антискольжения.",
    characteristics: {
      "Материал": "Акрил премиум-класса",
      "Длина": "180 см",
      "Ширина": "80 см",
      "Глубина": "50 см",
      "Объем": "200 л",
      "Цвет": "Белый глянцевый",
      "Страна производства": "Россия",
      "Гарантия": "15 лет"
    },
    images: productImages,
    inStock: true,
    isNew: true,
    reviews: [
      {
        id: "1",
        author: "Михаил",
        rating: 5,
        text: "Превосходное качество и дизайн",
        date: "2024-03-01",
        advantages: "Стильный дизайн, качественные материалы",
        disadvantages: "Высокая цена",
        useTime: "Использует месяц",
        likes: 8,
        dislikes: 1
      }
    ]
  },
  {
    id: 102,
    name: "Ванна ESTIMA Luxury",
    category: "baths",
    price: 129990,
    imageSrc: "/images/products/estima-2.jpg",
    discount: "-10%",
    article: "EST-2023-102",
    manufacturer: "ESTIMA",
    unit: "шт",
    weight: 52.0,
    description: "Роскошная ванна с функцией подогрева воды и гидромассажем.",
    characteristics: {
      "Материал": "Акрил премиум-класса",
      "Длина": "190 см",
      "Ширина": "85 см",
      "Глубина": "55 см",
      "Объем": "220 л",
      "Цвет": "Белый матовый",
      "Страна производства": "Россия",
      "Гарантия": "15 лет"
    },
    images: productImages,
    inStock: true,
    isNew: true,
    reviews: [
      {
        id: "2",
        author: "Екатерина",
        rating: 4,
        text: "Очень удобная и красивая ванна, но дороговата.",
        date: "2024-04-10",
        advantages: "Комфорт, дизайн",
        disadvantages: "Цена",
        useTime: "Использует 2 месяца",
        likes: 5,
        dislikes: 2
      }
    ]
  },
  {
    id: 103,
    name: "Ванна ESTIMA Classic",
    category: "baths",
    price: 79990,
    imageSrc: "/images/products/estima-3.jpg",
    discount: "-5%",
    article: "EST-2023-103",
    manufacturer: "ESTIMA",
    unit: "шт",
    weight: 44.0,
    description: "Классическая ванна с прочным акриловым покрытием и удобной формой.",
    characteristics: {
      "Материал": "Акрил",
      "Длина": "170 см",
      "Ширина": "70 см",
      "Глубина": "45 см",
      "Объем": "180 л",
      "Цвет": "Белый",
      "Страна производства": "Россия",
      "Гарантия": "10 лет"
    },
    images: productImages,
    inStock: true,
    isNew: true,
    reviews: [
      {
        id: "3",
        author: "Алексей",
        rating: 5,
        text: "Отличная ванна за свои деньги.",
        date: "2024-05-05",
        advantages: "Цена, качество",
        disadvantages: "Нет",
        useTime: "Использует 3 месяца",
        likes: 10,
        dislikes: 0
      }
    ]
  },
  {
    id: 104,
    name: "Ванна ESTIMA Modern",
    category: "baths",
    price: 99990,
    imageSrc: "/images/products/estima-4.jpg",
    discount: "-12%",
    article: "EST-2023-104",
    manufacturer: "ESTIMA",
    unit: "шт",
    weight: 47.0,
    description: "Современная ванна с функцией самоочистки и антибактериальным покрытием.",
    characteristics: {
      "Материал": "Акрил премиум-класса",
      "Длина": "180 см",
      "Ширина": "80 см",
      "Глубина": "50 см",
      "Объем": "200 л",
      "Цвет": "Белый глянцевый",
      "Страна производства": "Россия",
      "Гарантия": "15 лет"
    },
    images: productImages,
    inStock: true,
    isNew: true,
    reviews: [
      {
        id: "4",
        author: "Ирина",
        rating: 5,
        text: "Очень довольна покупкой, ванна просто супер!",
        date: "2024-06-15",
        advantages: "Функции, качество",
        disadvantages: "Нет",
        useTime: "Использует 1 месяц",
        likes: 7,
        dislikes: 0
      }
    ]
  },
  {
    id: 105,
    name: "Ванна ESTIMA Premium",
    category: "baths",
    price: 139990,
    imageSrc: "/images/products/estima-5.jpg",
    discount: "-18%",
    article: "EST-2023-105",
    manufacturer: "ESTIMA",
    unit: "шт",
    weight: 53.0,
    description: "Премиальная ванна с функцией гидромассажа и подогрева воды.",
    characteristics: {
      "Материал": "Акрил премиум-класса",
      "Длина": "190 см",
      "Ширина": "85 см",
      "Глубина": "55 см",
      "Объем": "220 л",
      "Цвет": "Белый матовый",
      "Страна производства": "Россия",
      "Гарантия": "15 лет"
    },
    images: productImages,
    inStock: true,
    isNew: true,
    reviews: [
      {
        id: "5",
        author: "Дмитрий",
        rating: 5,
        text: "Ванна просто шикарная, рекомендую!",
        date: "2024-07-20",
        advantages: "Гидромассаж, подогрев",
        disadvantages: "Цена",
        useTime: "Использует 2 недели",
        likes: 12,
        dislikes: 1
      }
    ]
  },
  {
    id: 106,
    name: "Ванна ESTIMA Eco",
    category: "baths",
    price: 69990,
    imageSrc: "/images/products/estima-6.jpg",
    discount: "-8%",
    article: "EST-2023-106",
    manufacturer: "ESTIMA",
    unit: "шт",
    weight: 42.0,
    description: "Экологичная ванна с использованием переработанных материалов и энергосберегающих технологий.",
    characteristics: {
      "Материал": "Экологичный акрил",
      "Длина": "170 см",
      "Ширина": "70 см",
      "Глубина": "45 см",
      "Объем": "180 л",
      "Цвет": "Белый",
      "Страна производства": "Россия",
      "Гарантия": "10 лет"
    },
    images: productImages,
    inStock: true,
    isNew: true,
    reviews: [
      {
        id: "6",
        author: "Светлана",
        rating: 4,
        text: "Хорошая ванна, но хотелось бы больше функций.",
        date: "2024-08-10",
        advantages: "Экологичность, цена",
        disadvantages: "Мало функций",
        useTime: "Использует 1 месяц",
        likes: 4,
        dislikes: 1
      }
    ]
  }
];

export const recommendedProducts: ProductData[] = [
  {
    id: 201,
    name: "Ванна ESTIMA Deluxe",
    category: "baths",
    price: 179990,
    imageSrc: "/images/products/recommended-1.jpg",
    discount: "-20%",
    article: "EST-2023-201",
    manufacturer: "ESTIMA",
    unit: "шт",
    weight: 55.5,
    description: "Премиальная ванна с системой гидромассажа",
    characteristics: {
      "Материал": "Акрил премиум-класса",
      "Длина": "180 см",
      "Ширина": "80 см",
      "Глубина": "50 см",
      "Объем": "200 л",
      "Цвет": "Белый глянцевый"
    },
    images: productImages,
    inStock: true
  },
  {
    id: 202,
    name: "Смеситель ESTIMA Premium",
    category: "mixers",
    price: 34990,
    imageSrc: "/images/products/recommended-2.jpg",
    discount: "-15%",
    article: "EST-2023-202",
    manufacturer: "ESTIMA",
    unit: "шт",
    weight: 2.5,
    description: "Премиальный смеситель с керамическим картриджем и системой экономии воды",
    characteristics: {
      "Материал": "Латунь",
      "Покрытие": "Хром",
      "Тип": "Однорычажный",
      "Высота": "25 см",
      "Гарантия": "5 лет"
    },
    images: productImages,
    inStock: true
  },
  {
    id: 203,
    name: "Душевая кабина ESTIMA Luxe",
    category: "showers",
    price: 89990,
    imageSrc: "/images/products/recommended-3.jpg",
    discount: "-25%",
    article: "EST-2023-203",
    manufacturer: "ESTIMA",
    unit: "шт",
    weight: 85.0,
    description: "Душевая кабина премиум-класса с гидромассажм и тропическим душем",
    characteristics: {
      "Размеры": "90x90 см",
      "Высота": "215 см",
      "Стекло": "Закаленное 8мм",
      "Профиль": "Хром",
      "Поддон": "Акриловый",
      "Гарантия": "3 года"
    },
    images: productImages,
    inStock: true
  },
  {
    id: 204,
    name: "Унитаз ESTIMA Comfort",
    category: "toilets",
    price: 19990,
    imageSrc: "/images/products/recommended-4.jpg",
    discount: "-10%",
    article: "EST-2023-204",
    manufacturer: "ESTIMA",
    unit: "шт",
    weight: 30.0,
    description: "Комфортный унитаз с системой антивсплеск и микролифт",
    characteristics: {
      "Материал": "Санфарфор",
      "Высота": "40 см",
      "Ширина": "35 см",
      "Глубина": "65 см",
      "Цвет": "Белый",
      "Гарантия": "5 лет"
    },
    images: productImages,
    inStock: true
  },
  {
    id: 205,
    name: "Раковина ESTIMA Elegance",
    category: "sinks",
    price: 15990,
    imageSrc: "/images/products/recommended-5.jpg",
    discount: "-5%",
    article: "EST-2023-205",
    manufacturer: "ESTIMA",
    unit: "шт",
    weight: 15.0,
    description: "Элегантная раковина с глянцевым покрытием и системой перелива",
    characteristics: {
      "Материал": "Санфарфор",
      "Ширина": "60 см",
      "Глубина": "45 см",
      "Высота": "20 см",
      "Цвет": "Белый",
      "Гарантия": "3 года"
    },
    images: productImages,
    inStock: true
  },
  {
    id: 206,
    name: "Зеркало ESTIMA Modern",
    category: "mirrors",
    price: 9990,
    imageSrc: "/images/products/recommended-6.jpg",
    discount: "-20%",
    article: "EST-2023-206",
    manufacturer: "ESTIMA",
    unit: "шт",
    weight: 5.0,
    description: "Современное зеркало с подсветкой и антизапотевающим покрытием",
    characteristics: {
      "Материал": "Стекло",
      "Ширина": "80 см",
      "Высота": "60 см",
      "Глубина": "2 см",
      "Цвет": "Белый",
      "Гарантия": "2 года"
    },
    images: productImages,
    inStock: true
  },
  {
    id: 207,
    name: "Полотенцесушитель ESTIMA Heat",
    category: "towel warmers",
    price: 24990,
    imageSrc: "/images/products/recommended-7.jpg",
    discount: "-15%",
    article: "EST-2023-207",
    manufacturer: "ESTIMA",
    unit: "шт",
    weight: 7.0,
    description: "Электрический полотенцесушитель с таймером и регулировкой температуры",
    characteristics: {
      "Материал": "Нержавеющая сталь",
      "Ширина": "50 см",
      "Высота": "100 см",
      "Глубина": "10 см",
      "Цвет": "Хром",
      "Гарантия": "3 года"
    },
    images: productImages,
    inStock: true
  },
  {
    id: 208,
    name: "Шкаф ESTIMA Storage",
    category: "furniture",
    price: 39990,
    imageSrc: "/images/products/recommended-8.jpg",
    discount: "-10%",
    article: "EST-2023-208",
    manufacturer: "ESTIMA",
    unit: "шт",
    weight: 40.0,
    description: "Вместительный шкаф с системой плавного закрывания и регулируемыми полками",
    characteristics: {
      "Материал": "МДФ высокой плотности",
      "Ширина": "100 см",
      "Высота": "200 см",
      "Глубина": "50 см",
      "Покрытие": "Влагостойкое",
      "Цвет": "Белый матовый",
      "Фурнитура": "Blum (Австрия)",
      "Гарантия": "2 года"
    },
    images: productImages,
    inStock: true
  }
];

export const interiorProducts: ProductData[] = [
  {
    id: 301,
    name: "Ванна ESTIMA Interior",
    category: "baths",
    price: 149990,
    imageSrc: "/images/products/interior-1.jpg",
    article: "EST-2023-301",
    manufacturer: "ESTIMA",
    unit: "шт",
    weight: 52.0,
    description: "Дизайнерская ванна для современного интерьера",
    characteristics: {
      "Материал": "Акрил премиум-класса",
      "Длина": "175 см",
      "Ширина": "75 см",
      "Глубина": "48 см",
      "Объем": "190 л",
      "Цвет": "Белый матовый",
      "Гарантия": "10 лет"
    },
    images: productImages,
    inStock: true
  },
  {
    id: 302,
    name: "Тумба ESTIMA Modern",
    category: "furniture",
    price: 49990,
    imageSrc: "/images/products/interior-2.jpg",
    article: "EST-2023-302",
    manufacturer: "ESTIMA",
    unit: "шт",
    weight: 25.0,
    description: "Современная тумба с системой плавного закрывания и вместительными ящиками",
    characteristics: {
      "Материал": "МДФ высокой плотности",
      "Ширина": "80 см",
      "Высота": "50 см",
      "Глубина": "45 см",
      "Покрытие": "Влагостойкое",
      "Цвет": "Белый глянец",
      "Фурнитура": "Blum (Австрия)",
      "Гарантия": "2 года"
    },
    images: productImages,
    inStock: true
  },
  {
    id: 303,
    name: "Зеркало ESTIMA Elegance",
    category: "furniture",
    price: 29990,
    imageSrc: "/images/products/interior-3.jpg",
    article: "EST-2023-303",
    manufacturer: "ESTIMA",
    unit: "шт",
    weight: 15.0,
    description: "Элегантное зеркало с LED-подсветкой и системой антизапотевания",
    characteristics: {
      "Размер": "80x60 см",
      "Толщина стекла": "4 мм",
      "Подсветка": "LED",
      "Мощность подсветки": "12W",
      "Цветовая температура": "4000K",
      "Степень защиты": "IP44",
      "Гарантия": "3 года"
    },
    images: productImages,
    inStock: true
  },
  {
    id: 304,
    name: "Полка ESTIMA Classic",
    category: "furniture",
    price: 19990,
    imageSrc: "/images/products/interior-4.jpg",
    article: "EST-2023-304",
    manufacturer: "ESTIMA",
    unit: "шт",
    weight: 10.0,
    description: "Классическая полка с прочной конструкцией и стильным дизайном",
    characteristics: {
      "Материал": "Дерево",
      "Ширина": "60 см",
      "Высота": "30 см",
      "Глубина": "20 см",
      "Покрытие": "Лак",
      "Цвет": "Орех",
      "Гарантия": "1 год"
    },
    images: productImages,
    inStock: true
  },
  {
    id: 305,
    name: "Шкаф ESTIMA Grande",
    category: "furniture",
    price: 79990,
    imageSrc: "/images/products/interior-5.jpg",
    article: "EST-2023-305",
    manufacturer: "ESTIMA",
    unit: "шт",
    weight: 60.0,
    description: "Большой шкаф с зеркальными дверцами и множеством отделений",
    characteristics: {
      "Материал": "МДФ",
      "Ширина": "120 см",
      "Высота": "200 см",
      "Глубина": "60 см",
      "Покрытие": "Ламинированное",
      "Цвет": "Дуб",
      "Гарантия": "5 лет"
    },
    images: productImages,
    inStock: true
  },
  {
    id: 306,
    name: "Кресло ESTIMA Comfort",
    category: "furniture",
    price: 25990,
    imageSrc: "/images/products/interior-6.jpg",
    article: "EST-2023-306",
    manufacturer: "ESTIMA",
    unit: "шт",
    weight: 15.0,
    description: "Удобное кресло с мягкой обивкой и эргономичным дизайном",
    characteristics: {
      "Материал": "Ткань",
      "Ширина": "80 см",
      "Высота": "100 см",
      "Глубина": "90 см",
      "Цвет": "Серый",
      "Гарантия": "2 года"
    },
    images: productImages,
    inStock: true
  },
  {
    id: 307,
    name: "Стол ESTIMA Office",
    category: "furniture",
    price: 39990,
    imageSrc: "/images/products/interior-7.jpg",
    article: "EST-2023-307",
    manufacturer: "ESTIMA",
    unit: "шт",
    weight: 30.0,
    description: "Офисный стол с большим рабочим пространством и встроенными ящиками",
    characteristics: {
      "Материал": "МДФ",
      "Ширина": "150 см",
      "Высота": "75 см",
      "Глубина": "70 см",
      "Покрытие": "Ламинированное",
      "Цвет": "Белый",
      "Гарантия": "3 года"
    },
    images: productImages,
    inStock: true
  },
  {
    id: 308,
    name: "Комод ESTIMA Vintage",
    category: "furniture",
    price: 34990,
    imageSrc: "/images/products/interior-8.jpg",
    article: "EST-2023-308",
    manufacturer: "ESTIMA",
    unit: "шт",
    weight: 40.0,
    description: "Винтажный комод с резными элементами и вместительными ящиками",
    characteristics: {
      "Материал": "Дерево",
      "Ширина": "100 см",
      "Высота": "90 см",
      "Глубина": "45 см",
      "Покрытие": "Лак",
      "Цвет": "Темный орех",
      "Гарантия": "2 года"
    },
    images: productImages,
    inStock: true
  }
];

export const catalogProducts: ProductData[] = [
  ...products,
  ...brandProducts,
  ...recommendedProducts,
  ...interiorProducts
];

export const getProductById = (id: number): ProductData | undefined => {
  return catalogProducts.find(product => product.id === id);
};

export const getProductsByCategory = (category: string): ProductData[] => {
  return catalogProducts.filter(product => product.category === category);
};

export const getDiscountedProducts = (): ProductData[] => {
  return catalogProducts.filter(product => product.discount);
};

export const getPopularProducts = (limit: number = 4): ProductData[] => {
  return catalogProducts.slice(0, limit);
};

export const getRecommendedProducts = (limit: number = 4): ProductData[] => {
  return recommendedProducts.slice(0, limit);
};

export const getInteriorProducts = (limit: number = 4): ProductData[] => {
  return interiorProducts.slice(0, limit);
};