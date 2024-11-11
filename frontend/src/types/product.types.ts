export interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
  discount?: string;
  imageSrc: string;
}

export interface ProductData extends Product {
  image?: string;
  viewMode?: 'grid' | 'list';
}

export interface FeatureCard {
  id: string;
  image: string; // Добавляем поле image
  title: string;
  description: string;
  icon?: string; // Делаем icon опциональным
}