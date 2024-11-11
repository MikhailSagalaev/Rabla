import { ProductData } from './product.types';

export interface FeatureCardType {
  id: number;
  image: string;
  title: string;
  description: string;
}

export interface ProductCardProps extends ProductData {
  viewMode?: 'grid' | 'list';
}

export interface ProductGridProps {
  products: ProductData[];
  viewMode?: 'grid' | 'list';
  loading?: boolean;
}

export interface ProductSliderProps {
  title: string;
  products: ProductData[];
} 