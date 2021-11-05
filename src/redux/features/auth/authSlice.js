import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuth: false
  },
  reducers: {
    SET_USER: (state, action) => {
      state.isAuth = action.payload;
    }
  }
})

export const { SET_USER } = authSlice.actions;
export default authSlice.reducer;

