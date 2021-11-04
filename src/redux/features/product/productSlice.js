import { createSlice } from '@reduxjs/toolkit';

export const productSlice = createSlice({
  name: 'product',
  initialState: {
    products: []
  },
  reducers: {
    GET_PRODUCTS: (state, action) => {
      state.products = action.payload
    }
  }
})

export const { GET_PRODUCTS } = productSlice.actions;
export default productSlice.reducer;

