import { AnyAction } from 'redux';
import reducer, { GET_REVIEWS, SET_REVIEW } from '../../../../redux/features/review/reviewSlice';

const review = {
  id: 0,
  productId: 0,
  userId: 0,
  userName: '',
  text: '',
  rate: ''
}

const reviews = [{
  id: 0,
  productId: 0,
  userId: 0,
  userName: '',
  text: '',
  rate: ''
}]

interface ReviewState {
  reviews: {
    id: number,
    productId: number,
    userId: number,
    userName: string,
    text: string,
    rate: string
  }[]
}

const initialState: ReviewState = {
  reviews: []
}

describe('reviewSlice', () => {

  it('should return the initial state', () => {
    expect(reducer(undefined, <AnyAction>{})).toEqual({reviews: []});
  });

  it('should match a GET_REIEWS action', () => {
    expect(reducer(initialState, GET_REVIEWS(reviews))).toEqual({reviews});
  });

  test('should match a SET_REIEW action', () => {
    expect(reducer({reviews: []}, SET_REVIEW(review))).toEqual({reviews: [review]});
  });

});

