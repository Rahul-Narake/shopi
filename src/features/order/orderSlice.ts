import { createSlice } from '@reduxjs/toolkit';
import { CartItemState } from '../cart/cartSlice';
import type { PayloadAction } from '@reduxjs/toolkit';

interface IOrder {
  products: CartItemState[];
  amount: number;
  date: Date;
}

interface OrderState {
  order: IOrder | null;
  myOrders: IOrder[];
}

const initialState: OrderState = {
  myOrders: [],
  order: null,
};

export const orderSlce = createSlice({
  name: 'order',
  initialState,
  reducers: {
    setOrder: (state, action: PayloadAction<IOrder>) => {
      state.order = action.payload;
      state.myOrders.push(action.payload);
    },
    setCurrentOrder: (state, action: PayloadAction<IOrder>) => {
      state.order = action.payload;
    },
  },
});

export const { setOrder } = orderSlce.actions;
export default orderSlce.reducer;
