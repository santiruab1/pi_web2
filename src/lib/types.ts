// Tipos base
export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  avatar?: string;
  role: 'admin' | 'user' | 'moderator';
  createdAt: string;
  updatedAt: string;
  isActive: boolean;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  images?: string[];
  features: string[];
  inStock: boolean;
  stock?: number;
  rating: number;
  reviews: number;
  sku?: string;
  brand?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Category {
  id: string;
  name: string;
  description?: string;
  slug: string;
  parentId?: string;
  image?: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

// Tipos de autenticación
export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface AuthResponse {
  user: User;
  token: string;
  refreshToken: string;
  expiresAt: string;
}

// Tipos de API
export interface ApiResponse<T> {
  data: T;
  message?: string;
  success: boolean;
  errors?: string[];
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    pageSize: number;
    total: number;
    totalPages: number;
    hasNext: boolean;
    hasPrev: boolean;
  };
}

export interface ApiError {
  message: string;
  status: number;
  code?: string;
  details?: any;
}

// Tipos de estado
export type LoadingState = 'idle' | 'loading' | 'success' | 'error';

export interface AsyncState<T> {
  data: T | null;
  loading: LoadingState;
  error: string | null;
}

// Tipos de formularios
export interface FormField {
  value: string;
  error?: string;
  touched?: boolean;
}

export interface ContactForm {
  name: FormField;
  email: FormField;
  subject: FormField;
  message: FormField;
}

// Tipos de navegación
export interface NavItem {
  href: string;
  label: string;
  icon?: string;
  children?: NavItem[];
  isActive?: boolean;
  requiresAuth?: boolean;
}

// Tipos de notificación
export type NotificationType = 'success' | 'error' | 'warning' | 'info';

export interface Notification {
  id: string;
  type: NotificationType;
  title: string;
  message: string;
  duration?: number;
  autoClose?: boolean;
  createdAt: string;
}

// Tipos de configuración
export interface UserPreferences {
  theme: 'light' | 'dark' | 'system';
  language: string;
  notifications: {
    email: boolean;
    push: boolean;
    marketing: boolean;
  };
  privacy: {
    profileVisible: boolean;
    activityVisible: boolean;
  };
}

// Tipos de carrito de compras
export interface CartItem {
  id: string;
  productId: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  totalPrice: number;
}

export interface Cart {
  items: CartItem[];
  totalItems: number;
  totalPrice: number;
  updatedAt: string;
}

// Tipos de análisis
export interface AnalyticsData {
  visitors: {
    total: number;
    growth: number;
    chartData: { date: string; value: number }[];
  };
  sales: {
    total: number;
    growth: number;
    chartData: { date: string; value: number }[];
  };
  products: {
    topSelling: { id: string; name: string; sales: number }[];
    lowStock: Product[];
  };
  users: {
    total: number;
    newThisMonth: number;
    retention: number;
  };
}

// Tipos de filtros
export interface ProductFilters {
  category?: string;
  priceMin?: number;
  priceMax?: number;
  inStock?: boolean;
  rating?: number;
  search?: string;
  sortBy?: 'name' | 'price' | 'rating' | 'newest';
  sortOrder?: 'asc' | 'desc';
}

// Tipos de componentes
export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

export interface InputProps {
  label?: string;
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url';
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  required?: boolean;
  disabled?: boolean;
  error?: string;
  helpText?: string;
  className?: string;
  id?: string;
}

// Tipos de utilidades
export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

export type Prettify<T> = {
  [K in keyof T]: T[K];
} & {};
