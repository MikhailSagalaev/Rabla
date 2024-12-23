export interface ProductData {
  id: number;
  name: string;
  category: string;
  price: string;
  imageSrc: string;
  discount?: string;
}

export interface ProductViewProps extends ProductData {
  viewMode?: 'grid' | 'list';
}

export interface ProductGridConfig {
  viewMode?: 'grid' | 'list';
  loading?: boolean;
  columns?: number;
}

// Если нужен отдельный тип Product
export type Product = ProductData;

export interface FeatureCard {
  id: string;
  image: string; // Добавляем поле image
  title: string;
  description: string;
  icon?: string; // Делаем icon опциональным
}

export interface ProductDetails extends ProductData {
  description: string;
  characteristics: {
    [key: string]: string;
  };
  reviews: Array<{
    id: number;
    author: string;
    rating: number;
    text: string;
    date: string;
  }>;
  relatedProducts: ProductData[];
}