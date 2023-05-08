import { createSlice } from '@reduxjs/toolkit';
import { type UserState } from '@/types/types';

const initialState: UserState = {
  user: null
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },

    logout: (state) => {
      state.user = null;
    }
  }
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
