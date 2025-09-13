// Constantes de la aplicación

// URLs y endpoints
export const ROUTES = {
  HOME: '/',
  LOGIN: '/auth/login',
  REGISTER: '/auth/register',
  DASHBOARD: '/dashboard',
  PRODUCTS: '/products',
  SETTINGS: '/dashboard/settings',
  ANALYTICS: '/dashboard/analytics',
} as const;

// Configuración de la API
export const API_CONFIG = {
  BASE_URL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api',
  TIMEOUT: 10000, // 10 segundos
  RETRY_ATTEMPTS: 3,
} as const;

// Configuración de autenticación
export const AUTH_CONFIG = {
  TOKEN_KEY: 'auth_token',
  REFRESH_TOKEN_KEY: 'refresh_token',
  USER_KEY: 'user_data',
  SESSION_TIMEOUT: 24 * 60 * 60 * 1000, // 24 horas en milisegundos
} as const;

// Configuración de paginación
export const PAGINATION = {
  DEFAULT_PAGE_SIZE: 10,
  MAX_PAGE_SIZE: 100,
  DEFAULT_PAGE: 1,
} as const;

// Estados de loading
export const LOADING_STATES = {
  IDLE: 'idle',
  LOADING: 'loading',
  SUCCESS: 'success',
  ERROR: 'error',
} as const;

// Tipos de notificación
export const NOTIFICATION_TYPES = {
  SUCCESS: 'success',
  ERROR: 'error',
  WARNING: 'warning',
  INFO: 'info',
} as const;

// Configuración de validación
export const VALIDATION = {
  PASSWORD_MIN_LENGTH: 8,
  USERNAME_MIN_LENGTH: 3,
  EMAIL_REGEX: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  PHONE_REGEX: /^\+?[\d\s-()]+$/,
} as const;

// Configuración de archivos
export const FILE_CONFIG = {
  MAX_FILE_SIZE: 5 * 1024 * 1024, // 5MB
  ALLOWED_IMAGE_TYPES: ['image/jpeg', 'image/png', 'image/gif', 'image/webp'],
  ALLOWED_DOCUMENT_TYPES: ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'],
} as const;

// Configuración de tema
export const THEME = {
  COLORS: {
    PRIMARY: '#3B82F6',
    SECONDARY: '#6B7280',
    SUCCESS: '#10B981',
    ERROR: '#EF4444',
    WARNING: '#F59E0B',
    INFO: '#3B82F6',
  },
  BREAKPOINTS: {
    SM: '640px',
    MD: '768px',
    LG: '1024px',
    XL: '1280px',
    '2XL': '1536px',
  },
} as const;

// Configuración de localStorage
export const STORAGE_KEYS = {
  THEME: 'app_theme',
  LANGUAGE: 'app_language',
  USER_PREFERENCES: 'user_preferences',
  CART: 'shopping_cart',
  FAVORITES: 'user_favorites',
} as const;

// Configuración de cookies
export const COOKIE_CONFIG = {
  SAME_SITE: 'strict' as const,
  SECURE: process.env.NODE_ENV === 'production',
  HTTP_ONLY: true,
  MAX_AGE: 7 * 24 * 60 * 60, // 7 días en segundos
} as const;
