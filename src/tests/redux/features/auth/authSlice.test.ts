import { AnyAction } from 'redux';
import reducer, { SET_USER } from '../../../../redux/features/auth/authSlice';

const isAuth = {
  id: 0,
  email: '',
  password: '',
  logged: false
}

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

describe('reviewSlice', () => {

  it('should return the initial state', () => {
    expect(reducer(undefined, <AnyAction>{})).toEqual({isAuth});
  });

  it('should match a SET_USER action', () => {
    expect(reducer(initialState, SET_USER(isAuth))).toEqual({isAuth});
  });

});

