import {apiClient} from './client';
import {API_ENDPOINTS} from '../../constants';
import {CartItem} from '../../types';

export interface CartResponse {
  items: CartItem[];
  total: number;
}

export const cartService = {
  // Get cart
  getCart: async (): Promise<CartResponse> => {
    return apiClient.get<CartResponse>(API_ENDPOINTS.CART);
  },

  // Add to cart
  addToCart: async (productId: string, quantity: number = 1): Promise<CartResponse> => {
    return apiClient.post<CartResponse>(API_ENDPOINTS.CART_ADD, {
      productId,
      quantity,
    });
  },

  // Update cart item
  updateCart: async (productId: string, quantity: number): Promise<CartResponse> => {
    return apiClient.put<CartResponse>(API_ENDPOINTS.CART_UPDATE, {
      productId,
      quantity,
    });
  },

  // Remove from cart
  removeFromCart: async (productId: string): Promise<CartResponse> => {
    return apiClient.delete<CartResponse>(
      `${API_ENDPOINTS.CART_REMOVE}/${productId}`,
    );
  },

  // Clear cart
  clearCart: async (): Promise<void> => {
    return apiClient.delete<void>(API_ENDPOINTS.CART_CLEAR);
  },
};
