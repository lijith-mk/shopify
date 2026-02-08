// App Information
export const APP_NAME = 'Shopify';
export const APP_VERSION = '1.0.0';
export const APP_BUILD = '1';

// Storage Keys
export const STORAGE_KEYS = {
  USER_TOKEN: '@user_token',
  USER_DATA: '@user_data',
  CART_DATA: '@cart_data',
  WISHLIST_DATA: '@wishlist_data',
  LANGUAGE: '@language',
  THEME: '@theme',
  ONBOARDING_COMPLETED: '@onboarding_completed',
};

// Pagination
export const PAGINATION = {
  DEFAULT_PAGE_SIZE: 20,
  MAX_PAGE_SIZE: 100,
};

// Product Categories
export const PRODUCT_CATEGORIES = {
  ALL: 'All',
  ELECTRONICS: 'Electronics',
  FASHION: 'Fashion',
  HOME: 'Home',
  ACCESSORIES: 'Accessories',
  SPORTS: 'Sports',
  BEAUTY: 'Beauty',
};

// Order Status
export const ORDER_STATUS = {
  PENDING: 'pending',
  PROCESSING: 'processing',
  SHIPPED: 'shipped',
  DELIVERED: 'delivered',
  CANCELLED: 'cancelled',
};

// Payment Methods
export const PAYMENT_METHODS = {
  CREDIT_CARD: 'credit_card',
  DEBIT_CARD: 'debit_card',
  PAYPAL: 'paypal',
  CASH_ON_DELIVERY: 'cash_on_delivery',
};

// Validation Rules
export const VALIDATION = {
  EMAIL_REGEX: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  PHONE_REGEX: /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/,
  PASSWORD_MIN_LENGTH: 8,
  NAME_MIN_LENGTH: 2,
  NAME_MAX_LENGTH: 50,
};

// Animation Durations
export const ANIMATION_DURATION = {
  FAST: 150,
  NORMAL: 300,
  SLOW: 500,
};

// Default Values
export const DEFAULT_CURRENCY = 'USD';
export const DEFAULT_LANGUAGE = 'en';

// Limits
export const MAX_CART_QUANTITY = 99;
export const MAX_WISHLIST_ITEMS = 100;
export const MAX_IMAGE_SIZE = 5 * 1024 * 1024; // 5MB
