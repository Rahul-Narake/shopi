import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

enum SidebarType {
  cart = 'CART',
  info = 'INFO',
}

interface SidebarState {
  isOpen: boolean;
  type: string;
}

const initialState: SidebarState = {
  isOpen: false,
  type: SidebarType.cart,
};

export const sidebarSlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    open: (state, action: PayloadAction<boolean>) => {
      state.isOpen = action.payload;
    },
    setType: (state, action: PayloadAction<string>) => {
      state.type = action.payload;
    },
  },
});

export const { open, setType } = sidebarSlice.actions;
export default sidebarSlice.reducer;
