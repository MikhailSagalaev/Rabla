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