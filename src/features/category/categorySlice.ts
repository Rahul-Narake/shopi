import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface ICategory {
  id: number;
  name: string;
  image: string;
  creationAt?: Date;
  updatedAt?: Date;
}

interface CategoryState {
  currentCategory: string;
  categories: ICategory[];
}

const initialState: CategoryState = {
  currentCategory: '',
  categories: [
    {
      id: 1,
      name: 'Clothes',
      image: 'http://placeimg.com/640/480/cats',
    },
    {
      id: 2,
      name: 'Electronics',
      image: 'https://i.imgur.com/ZANVnHE.jpeg',
    },
    {
      id: 5,
      name: 'Furniture',
      image: 'http://placeimg.com/640/480',
    },
    {
      id: 56,
      name: 'Toys',
      image: 'http://placeimg.com/640/480',
    },
  ],
};

export const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    setCurrentCategory: (state, action: PayloadAction<string>) => {
      state.currentCategory = action.payload;
    },
    setCategories: (state, action: PayloadAction<ICategory[]>) => {
      state.categories = action.payload;
    },
  },
});

export const { setCurrentCategory, setCategories } = categorySlice.actions;
export default categorySlice.reducer;
