import { configureStore } from '@reduxjs/toolkit';
import productSlice from '../states/catalogue/productSlice';
import categorySlice from '../states/catalogue/categorySlice';
import billingSlice from '../states/billing/billingSlice';
import vendorSlice from '../states/vendor/vendorSlice';
import customerSlice from '../states/customer/customerSlice';
import userSlice from '../states/user/userSlice';
import staffSlice from '../states/staff/staffSlice';

export const store = configureStore({
  reducer: {
    product: productSlice,
    category: categorySlice,
    billing: billingSlice,
    vendor: vendorSlice,
    customer: customerSlice,
    staff: staffSlice,
    user: userSlice,
  },
});
