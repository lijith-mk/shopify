// API Configuration
export const API_CONFIG = {
  BASE_URL: __DEV__
    ? 'http://localhost:3000/api'
    : 'https://api.yourapp.com',
  TIMEOUT: 30000, // 30 seconds
  RETRY_ATTEMPTS: 3,
};

// API Endpoints
export const API_ENDPOINTS = {
  // Auth
  LOGIN: '/auth/login',
  REGISTER: '/auth/register',
  LOGOUT: '/auth/logout',
  REFRESH_TOKEN: '/auth/refresh',
  
  // Products
  PRODUCTS: '/products',
  PRODUCT_DETAIL: (id: string) => `/products/${id}`,
  PRODUCT_SEARCH: '/products/search',
  PRODUCT_CATEGORIES: '/products/categories',
  
  // Cart
  CART: '/cart',
  CART_ADD: '/cart/add',
  CART_UPDATE: '/cart/update',
  CART_REMOVE: '/cart/remove',
  CART_CLEAR: '/cart/clear',
  
  // Orders
  ORDERS: '/orders',
  ORDER_DETAIL: (id: string) => `/orders/${id}`,
  ORDER_CREATE: '/orders/create',
  ORDER_CANCEL: (id: string) => `/orders/${id}/cancel`,
  
  // User
  USER_PROFILE: '/user/profile',
  USER_UPDATE: '/user/update',
  USER_ADDRESSES: '/user/addresses',
  
  // Wishlist
  WISHLIST: '/wishlist',
  WISHLIST_ADD: '/wishlist/add',
  WISHLIST_REMOVE: '/wishlist/remove',
};

// HTTP Status Codes
export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  CONFLICT: 409,
  INTERNAL_SERVER_ERROR: 500,
};
