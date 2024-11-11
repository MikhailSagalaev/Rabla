export interface FilterState {
  categories: string[];
  priceRange: {
    min: number;
    max: number;
  };
  sort: string;
}

export interface SortOption {
  value: string;
  label: string;
}

export interface CategoryFilter {
  id: string;
  label: string;
} 