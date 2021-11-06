import { createSlice } from '@reduxjs/toolkit';

export const reviewSlice = createSlice({
  name: 'review',
  initialState: {
    reviews: []
  },
  reducers: {
    GET_REVIEWS: (state, action) => {
      state.reviews = action.payload;
    },
    SET_REVIEW: (state, action) => {
      state.reviews.unshift(action.payload);
    }
  }
})

export const { GET_REVIEWS, SET_REVIEW } = reviewSlice.actions;
export default reviewSlice.reducer;

