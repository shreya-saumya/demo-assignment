import { configureStore } from '@reduxjs/toolkit';
import ProductListReducer from './reducers/productListReducer';

const store = configureStore({
    reducer: {
      product: ProductListReducer
    }
  })

export default store