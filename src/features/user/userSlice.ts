import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IUser {
  email: string;
}

interface UserState {
  currentUser: IUser | null;
  isLoggedIn: boolean;
}

const initialState: UserState = {
  currentUser: null,
  isLoggedIn: true,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<IUser>) => {
      state.isLoggedIn = true;
      state.currentUser = action.payload;
    },
    logout: (state) => {
      state.currentUser = null;
      state.isLoggedIn = false;
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
