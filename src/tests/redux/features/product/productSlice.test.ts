import { AnyAction } from 'redux';
import reducer, { GET_PRODUCTS } from '../../../../redux/features/product/productSlice';

describe('productSlice', () => {

  it('should return the initial state', () => {
    expect(reducer(undefined, <AnyAction>{})).toEqual({products: []});
  });

});

