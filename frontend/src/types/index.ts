// Product Types
export interface ProductData {
    id: number;
    name: string;
    category: string;
    price: string;
    discount?: string;
    imageSrc: string;
    description?: string;
    specifications?: Record<string, string>;
    inStock?: boolean;
    rating?: number;
    reviews?: number;
  }
  
  // View Mode Types
  export type ViewMode = 'grid' | 'list';
  
  // Sort Options
  export type SortOption = 'popular' | 'price-asc' | 'price-desc' | 'name' | 'new';
  
  // Filter Types
  export interface FilterOption {
    id: string;
    label: string;
    type: 'checkbox' | 'radio' | 'range';
    values?: string[];
    range?: {
      min: number;
      max: number;
      step: number;
    };
  }
  
  export interface FilterGroup {
    id: string;
    title: string;
    options: FilterOption[];
  }
  
  export interface FilterState {
    [key: string]: string[] | number[];
  }
  
  // Breadcrumb Types
  export interface BreadcrumbItem {
    label: string;
    path?: string;
  }
  
  // Pagination Types
  export interface PaginationState {
    currentPage: number;
    itemsPerPage: number;
    totalItems: number;
  }
  
  // Category Types
  export interface Category {
    id: number;
    name: string;
    slug: string;
    parentId?: number;
    image?: string;
    description?: string;
    productsCount?: number;
  }
  
  // Cart Types
  export interface CartItem extends ProductData {
    quantity: number;
  }
  
  export interface Cart {
    items: CartItem[];
    total: number;
    count: number;
  }
  
  // User Types
  export interface User {
    id: number;
    name: string;
    email: string;
    phone?: string;
    avatar?: string;
  }
  
  // API Response Types
  export interface ApiResponse<T> {
    data: T;
    status: 'success' | 'error';
    message?: string;
  }
  
  export interface PaginatedResponse<T> extends ApiResponse<T> {
    pagination: {
      currentPage: number;
      totalPages: number;
      totalItems: number;
      itemsPerPage: number;
    };
  }
  
  // Common Component Props
  export interface WithClassName {
    className?: string;
  }
  
  export interface WithChildren {
    children: React.ReactNode;
  }
  
  // Theme Types
  export type ThemeMode = 'light' | 'dark';
  
  // Navigation Types
  export interface MenuItem {
    id: string;
    label: string;
    path: string;
    icon?: string;
    children?: MenuItem[];
  }
  
  // Form Types
  export interface FormField {
    name: string;
    label: string;
    type: 'text' | 'email' | 'password' | 'number' | 'tel' | 'textarea';
    placeholder?: string;
    required?: boolean;
    validation?: {
      pattern?: RegExp;
      minLength?: number;
      maxLength?: number;
      min?: number;
      max?: number;
    };
  }
  
  // Error Types
  export interface AppError {
    code: string;
    message: string;
    field?: string;
  }