import {apiClient} from './client';
import {API_ENDPOINTS} from '../../constants';
import {Product} from '../../types';

export interface ProductsResponse {
  data: Product[];
  total: number;
  page: number;
  pageSize: number;
}

export interface ProductDetailResponse {
  data: Product;
}

export const productService = {
  // Get all products
  getProducts: async (params?: {
    page?: number;
    pageSize?: number;
    category?: string;
    search?: string;
  }): Promise<ProductsResponse> => {
    return apiClient.get<ProductsResponse>(API_ENDPOINTS.PRODUCTS, {params});
  },

  // Get product by ID
  getProductById: async (id: string): Promise<Product> => {
    const response = await apiClient.get<ProductDetailResponse>(
      API_ENDPOINTS.PRODUCT_DETAIL(id),
    );
    return response.data;
  },

  // Search products
  searchProducts: async (query: string): Promise<ProductsResponse> => {
    return apiClient.get<ProductsResponse>(API_ENDPOINTS.PRODUCT_SEARCH, {
      params: {q: query},
    });
  },

  // Get product categories
  getCategories: async (): Promise<string[]> => {
    return apiClient.get<string[]>(API_ENDPOINTS.PRODUCT_CATEGORIES);
  },
};
