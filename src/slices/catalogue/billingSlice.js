import { createSlice } from '@reduxjs/toolkit';

/**
 * Initial billingSlice State 
 */
const initialState = {
    id: '',
    customer: {},   // In this form {id: 1, name: 'John', email: '', phone: '8569915577'}
    items: [],      // In this form [{product: {}, cgst: 100, sgst: 150, quantity: 0, total: 0}]
};


/**
 * Creating billingSlice to handle the billing state
 */
const billingSlice = createSlice({
    name: 'billing',
    initialState,
    reducers: {
        // action to add a product to the billing items
        addItem: (state, action) => {
            const { product } = action.payload;
            const _item = state.items.find(item => item.product.id === product.id);
            if (_item) {
                const _index = state.items.indexOf(_item);

                if (_item.product.quantity - _item.quantity > 0) {
                    state.items[_index].quantity += 1;
                    state.items[_index].cgst += _item.product.tax.cgst * _item.product.selling_price
                    state.items[_index].sgst += _item.product.tax.sgst * _item.product.selling_price

                    state.items[_index].total += _item.product.selling_price;
                } else {
                    console.log('Out of stock');
                }
            } else {
                state.items.push({
                    product: product,
                    cgst: product.tax.cgst * product.selling_price,
                    sgst: product.tax.sgst * product.selling_price,
                    quantity: 1,
                    total: product.selling_price,
                });
            }
        },

        // action to increase the item quantity
        // send index of the item as payload
        increaseQuantity: (state, action) => {
            const { productId } = action.payload;

            const _item = state.items.find(item => item.product.id === productId);
            if (_item) {
                const _index = state.items.indexOf(_item);

                if (_item.product.quantity - _item.quantity > 0) {

                    state.items[_index].quantity++;
                    state.items[_index].cgst += _item.product.tax.cgst * _item.product.selling_price;
                    state.items[_index].sgst += _item.product.tax.sgst * _item.product.selling_price;
                    state.items[_index].total += _item.product.selling_price;
                } else {
                    console.log('Out of stock');
                }
            } else {
                console.log('Item not found');
            }
        },

        // action to decrease the item quantity
        // send index of the item as payload
        decreaseQuantity: (state, action) => {
            const { productId } = action.payload;

            const _item = state.items.find(item => item.product.id === productId);

            if (_item) {
                const _index = state.items.indexOf(_item);

                if (_item.quantity > 0) {

                    state.items[_index].cgst -= _item.product.tax.cgst * _item.product.selling_price;
                    state.items[_index].sgst -= _item.product.tax.sgst * _item.product.selling_price;
                    state.items[_index].total -= _item.product.selling_price;

                    if (_item.quantity === 1) {
                        state.items.splice(_index, 1);
                    } else {
                        state.items[_index].quantity--;
                    }
                } else {
                    console.log('Quantity cannot be less than 0');
                }
            } else {
                console.log('Item not found');
            }
        },

    },
});


/**
 * Exporting the actions from the billingSlice
 */
export const { addItem, increaseQuantity, decreaseQuantity } = billingSlice.actions;

/**
 * This will be used to select the value from the state in the component using the useSelector hook
 */
export const selectBillItems = (state) => state.billing.items;
export const selectBillCustomer = (state) => state.billing.customer;
export const selectBillId = (state) => state.billing.id;

/**
 * FInally Exporting the reducer from the billingSlice
 */
export default billingSlice.reducer;
