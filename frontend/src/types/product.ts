export interface Specification {
  name: string;
  value: string;
}

export interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  isNew?: boolean;
  specifications?: Specification[];
}