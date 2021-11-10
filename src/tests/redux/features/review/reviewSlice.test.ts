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

describe('reviewSlice', () => {

  it('should return the initial state', () => {
    expect(reducer(undefined, <AnyAction>{})).toEqual({reviews: []});
  });

  test('should handle a review being added to an empty array', () => {
    expect(reducer({reviews: []}, SET_REVIEW(review))).toEqual({reviews: [review]})
  })

});

