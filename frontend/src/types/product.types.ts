export interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
  discount?: string;
  imageSrc: string;
}

export interface ProductData {
    id: number;
    name: string;
    category: string;
    price: string;
    discount?: string;
    imageSrc: string;
  }
  
  export type ViewMode = 'grid' | 'list';

  export interface FeatureCard {
    id: number;
    image: string;
    title: string;
    description: string;
  }