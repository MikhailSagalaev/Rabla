import { Product, ProductData } from '../types/product.types';

export const convertToProductData = (product: Product): ProductData => ({
  ...product,
  imageSrc: product.imageSrc
});

export const convertProductsToProductData = (products: Product[]): ProductData[] => 
  products.map(convertToProductData); 