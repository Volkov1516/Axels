import { takeEvery, put, call } from 'redux-saga/effects';

import { GET_PRODUCTS } from '../features/product/productSlice';
import { GET_REVIEWS } from '../features/review/reviewSlice';
import { getData } from '../../api';

export function* workerSaga() {
  const data = yield call(getData)

  yield put({type: GET_PRODUCTS, payload: data.products})
  yield put({type: GET_REVIEWS, payload: data.reviews})
}

export function* watcherSaga() {
  yield takeEvery('LOAD_DATA', workerSaga)
}

export default function* rootSaga() {
  yield watcherSaga()
}