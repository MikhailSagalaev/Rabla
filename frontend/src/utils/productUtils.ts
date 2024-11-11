import { Product, ProductData } from '../types/product.types';

export const convertToProductData = (product: Product): ProductData => ({
  ...product,
  image: product.imageSrc,
  imageSrc: product.imageSrc
});

export const convertProductsToProductData = (products: Product[]): ProductData[] => 
  products.map(convertToProductData); 