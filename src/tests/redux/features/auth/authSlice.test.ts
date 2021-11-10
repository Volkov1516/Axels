import { AnyAction } from 'redux';
import reducer, { SET_USER } from '../../../../redux/features/auth/authSlice';

const isAuth = {
  id: 0,
  email: '',
  password: '',
  logged: false
}

describe('reviewSlice', () => {

  it('should return the initial state', () => {
    expect(reducer(undefined, <AnyAction>{})).toEqual({isAuth});
  });

});

