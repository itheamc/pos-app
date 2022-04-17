import { createSlice } from '@reduxjs/toolkit';

/**
 * Initial billingSlice State 
 */
const initialState = {
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

                    state.items[_index].total = (_item.product.selling_price * _item.quantity) + _item.cgst + _item.sgst;
                } else {
                    alert('Out of stock');
                }
            } else {
                state.items.push({
                    product: product,
                    cgst: product.tax.cgst * product.selling_price,
                    sgst: product.tax.sgst * product.selling_price,
                    quantity: 1,
                    total: product.selling_price + (product.tax.cgst * product.selling_price) + (product.tax.sgst * product.selling_price),
                });
            }
        },

        // action to increase the item quantity
        // send index of the item as payload
        increaseQuantity: (state, action) => {
            const { index } = action.payload;

            if (state.items[index].product.quantity - state.items[index].quantity > 0) {
                state.items[index].quantity++;

                const cgst = state.items[index].product.tax.cgst * state.items[index].product.selling_price;
                const sgst = state.items[index].product.tax.sgst * state.items[index].product.selling_price;

                state.items[index].cgst += cgst;
                state.items[index].sgst += sgst;
                state.items[index].total += state.items[index].product.selling_price + cgst + sgst;
            } else {
                alert('Out of stock');
            }
        },

        // action to decrease the item quantity
        // send index of the item as payload
        decreaseQuantity: (state, action) => {
            const { index } = action.payload;

            if (state.items[index].quantity > 0) {
                const cgst = state.items[index].product.tax.cgst * state.items[index].product.selling_price;
                const sgst = state.items[index].product.tax.sgst * state.items[index].product.selling_price;

                state.items[index].cgst -= cgst;
                state.items[index].sgst -= sgst;
                state.items[index].total -= state.items[index].product.selling_price + cgst + sgst;

                if (state.items[index].quantity === 1) {
                    state.items.splice(index, 1);
                } else {
                    state.items[index].quantity--;
                }
            } else {
                console.log('Quantity cannot be less than 0');
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
 * @param {*} state 
 */
export const selectBillItems = (state) => state.billing.items;

/**
 * FInally Exporting the reducer from the billingSlice
 */
export default billingSlice.reducer;
