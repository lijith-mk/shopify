import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Product} from '../../types';

interface ProductsState {
  items: Product[];
  loading: boolean;
  error: string | null;
  selectedCategory: string;
  searchQuery: string;
}

const initialState: ProductsState = {
  items: [],
  loading: false,
  error: null,
  selectedCategory: 'All',
  searchQuery: '',
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },

    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.items = action.payload;
      state.loading = false;
      state.error = null;
    },

    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = false;
    },

    setSelectedCategory: (state, action: PayloadAction<string>) => {
      state.selectedCategory = action.payload;
    },

    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },

    clearProducts: state => {
      state.items = [];
      state.error = null;
    },
  },
});

export const {
  setLoading,
  setProducts,
  setError,
  setSelectedCategory,
  setSearchQuery,
  clearProducts,
} = productsSlice.actions;

export default productsSlice.reducer;
