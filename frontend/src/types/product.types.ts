import { Review, ReviewStats } from './review.types';

export interface ProductData {
  id: number;
  name: string;
  category: string;
  price: number;
  imageSrc?: string;
  images?: string[];
  image?: string;
  discount?: string;
  article: string;
  manufacturer: string;
  unit: string;
  weight: number;
  description?: string;
  characteristics?: Record<string, string>;
  reviews?: Review[];
  reviewStats?: ReviewStats;
  inStock?: boolean;
  isHit?: boolean;
  isNew?: boolean;
}

export interface CartItem extends ProductData {
  quantity: number;
  selected?: boolean;
}

export interface ProductViewProps extends ProductData {
  viewMode?: 'grid' | 'list';
}

export interface ProductGridConfig {
  viewMode?: 'grid' | 'list';
  loading?: boolean;
  columns?: number;
}

export type Product = ProductData;

export interface FeatureCard {
  id: string;
  image: string;
  title: string;
  description: string;
  icon?: string;
}

export interface ProductDetails extends ProductData {
  relatedProducts: ProductData[];
}