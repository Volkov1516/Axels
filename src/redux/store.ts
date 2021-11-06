import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from '@redux-saga/core';

import authReducer from './features/auth/authSlice';
import productReducer from './features/product/productSlice';
import reviewReducer from './features/review/reviewSlice';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

export default configureStore({
  reducer: {
    auth: authReducer,
    product: productReducer,
    review: reviewReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware)
})

sagaMiddleware.run(rootSaga);

