import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  products: {
    id: number,
    title: string,
    description: string,
    descriptionFull: string,
    img: string
  }[]
}

const initialState: AuthState = {
  products: []
}

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    GET_PRODUCTS: (state, action: PayloadAction<{id: number, title: string, description: string, descriptionFull: string, img: string}[]>) => {
      state.products = action.payload;
    }
  }
})

export const { GET_PRODUCTS } = productSlice.actions;
export default productSlice.reducer;

