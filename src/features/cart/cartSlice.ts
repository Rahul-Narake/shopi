import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProduct } from '../product/productSlice';

export interface CartItemState {
  product: IProduct;
  quantity: number;
}

export interface CartState {
  products: CartItemState[];
}

const initialState: CartState = {
  products: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<IProduct>) => {
      const products = state.products.map((p) => p.product as IProduct);

      if (!products.find((p) => p.id === action.payload.id)) {
        state.products.push({ product: action.payload, quantity: 1 });
      } else {
        alert('already added');
      }
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.products = state.products.filter(
        (p) => p.product.id !== action.payload
      );
    },
    increseQuantity: (state, action: PayloadAction<number>) => {
      state.products = state.products.map((p) => {
        if (p.product.id === action.payload) {
          return { ...p, quantity: p.quantity + 1 };
        } else {
          return p;
        }
      });
      console.log(state.products);
    },
    decreseQuantity: (state, action: PayloadAction<number>) => {
      state.products = state.products.map((p) => {
        if (p.product.id === action.payload && p.quantity > 0) {
          return { ...p, quantity: p.quantity - 1 };
        } else {
          return p;
        }
      });
    },
    emptyCart: (state) => {
      state.products = [];
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increseQuantity,
  decreseQuantity,
  emptyCart,
} = cartSlice.actions;
export default cartSlice.reducer;
