import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { ICategory } from '../category/categorySlice';

export interface IProduct {
  id: number;
  title: string;
  price: number;
  images: string[];
  creationAt: Date;
  updatedAt: Date;
  category: ICategory;
  description?: string;
}

interface ProductState {
  products: IProduct[];
  selectedProduct: IProduct | null;
}

// Define the initial state using that type
const initialState: ProductState = {
  products: [],
  selectedProduct: null,
};

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setCurrentProducts: (state, action: PayloadAction<IProduct[]>) => {
      state.products = action.payload;
    },
    setSelectedProduct: (state, action: PayloadAction<IProduct>) => {
      state.selectedProduct = action.payload;
    },
  },
});

export const { setCurrentProducts, setSelectedProduct } = productSlice.actions;

export default productSlice.reducer;
