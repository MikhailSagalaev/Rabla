export interface ProductCardProps {
    id: string;
    name: string;
    price: number;
    image: string;
    category?: string;
    discount?: number;
}

export const popularProducts: ProductCardProps[] = [
  {
    discount: 35,
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/181405ba9bd0b9bc4dc5abe0f2b55b1ba32609dd7b1169bab6e14f679e83c92d",
    category: "Штукатурка",
    name: "LITOKOL Litoplan Base 25 кг",
    price: 372,
    id: "1"
  }
];

export const interestedProducts: ProductCardProps[] = [
  {
    discount: 35,
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/f94c8222c080ed8ca8119f1e4608001061109128c4f7d991a9449d4ba740df4c",
    category: "Герметик",
    name: "KUDO универсальный Белый 85 мл",
    price: 186,
    id: "5"
  }
];