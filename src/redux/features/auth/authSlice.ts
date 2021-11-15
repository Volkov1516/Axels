import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  isAuth: {
    id: number,
    email: string,
    password: string,
    logged?: boolean
  }
}

const initialState: AuthState = {
  isAuth: {
    id: 0,
    email: '',
    password: '',
    logged: false
  }
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    SET_USER: (state, action: PayloadAction<{
      id: number,
      email: string,
      password: string,
      logged: boolean
    }>) => {
      state.isAuth = action.payload;
    }
  }
})

export const { SET_USER } = authSlice.actions;
export default authSlice.reducer;

