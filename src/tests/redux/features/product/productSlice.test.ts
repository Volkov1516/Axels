import { AnyAction } from 'redux';
import reducer, { GET_PRODUCTS } from '../../../../redux/features/product/productSlice';

const products =  [{
  id: 10,
  title: '',
  description: '',
  descriptionFull: '',
  img: ''
}]

interface ProductState {
  products: {
    id: number,
    title: string,
    description: string,
    descriptionFull: string,
    img: string
  }[]
}

const initialState: ProductState = {
  products: []
}

describe('productSlice', () => {

  it('should return the initial state', () => {
    expect(reducer(undefined, <AnyAction>{})).toEqual({products: []});
  });

  it('should match a GET_PRODUCTS action', () => {
    expect(reducer(initialState, GET_PRODUCTS(products))).toEqual({products});
  });

});



