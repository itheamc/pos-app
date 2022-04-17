import { configureStore } from '@reduxjs/toolkit';
import productSlice from '../slices/catalogue/productSlice';
import categorySlice from '../slices/catalogue/categorySlice';
import billingSlice from '../slices/catalogue/billingSlice';
import vendorSlice from '../slices/vendor/vendorSlice';

export const store = configureStore({
  reducer: {
    product: productSlice,
    category: categorySlice,
    billing: billingSlice,
    vendor: vendorSlice,
  },
});
