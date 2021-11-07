import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  reviews: {
    id: number,
    productId: number,
    userId: number,
    userName: string,
    text: string,
    rate: string
  }[]
}

const initialState: AuthState = {
  reviews: []
}

export const reviewSlice = createSlice({
  name: 'review',
  initialState,
  reducers: {
    GET_REVIEWS: (state, action: PayloadAction<AuthState['reviews']>) => {
      state.reviews = action.payload;
    },
    SET_REVIEW: (state, action: PayloadAction<{
      id: number,
      productId: number,
      userId: number,
      userName: string,
      text: string,
      rate: string
    }>) => {
      state.reviews.unshift(action.payload);
    }
  }
})

export const { GET_REVIEWS, SET_REVIEW } = reviewSlice.actions;
export default reviewSlice.reducer;

