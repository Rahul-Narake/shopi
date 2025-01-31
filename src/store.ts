import { configureStore } from '@reduxjs/toolkit';
import productReducer from './features/product/productSlice';
import categoryReduce from './features/category/categorySlice';
import sidebarReducer from './features/rightSidebar/sidebarSlice';
import cartReducer from './features/cart/cartSlice';
import orderReducer from './features/order/orderSlice';
import userReducer from './features/user/userSlice';

export const store = configureStore({
  reducer: {
    product: productReducer,
    category: categoryReduce,
    sidebar: sidebarReducer,
    cart: cartReducer,
    order: orderReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
