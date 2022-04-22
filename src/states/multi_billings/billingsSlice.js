/**
 *----------------------------@mit----------------------------
 * This is the billings slice that will responsible for
 * holding state of multiple billings.
 * -----------------------------------------------------------
 */
import { createSlice } from '@reduxjs/toolkit';

/**
 * Initial billingsSlice State 
 */
const initialState = {
    // It will hold the list of {id: 10012, custpmer: {}, items: []}
    value: []
};


/**
 * Creating billingsSlice to handle the multiple billings state
 */
const billingsSlice = createSlice({
    name: 'billings',
    initialState,
    reducers: {
        // Action to add a product to the billing items
        addItem: (state, action) => {
            const { product, bill_Id } = action.payload;

            const _billing = state.value.find(billing => billing.id === bill_Id);

            if (_billing) {
                // const _index = state.value.indexOf(_billing);
                const _item = _billing.items.find(item => item.product.id === product.id);
                if (_item) {
                    const _index = _billing.items.indexOf(_item);
                    if (_item.product.quantity - _item.quantity > 0) {
                        _billing.items[_index].quantity += 1;
                        _billing.items[_index].cgst += _item.product.tax.cgst * _item.product.selling_price
                        _billing.items[_index].sgst += _item.product.tax.sgst * _item.product.selling_price
                        _billing.items[_index].total += _item.product.selling_price;
                    } else {
                        console.log('Out of stock');
                    }
                } else {
                    _billing.items.push({
                        product: product,
                        cgst: product.tax.cgst * product.selling_price,
                        sgst: product.tax.sgst * product.selling_price,
                        quantity: 1,
                        total: product.selling_price,
                    });
                }
            } else {
                state.value.push({
                    id: bill_Id,
                    customer: {},
                    items: [{
                        product: product,
                        cgst: product.tax.cgst * product.selling_price,
                        sgst: product.tax.sgst * product.selling_price,
                        quantity: 1,
                        total: product.selling_price,
                    }],
                });
            }
        },

        // Action to increase the item quantity. Just send productId as payload
        increaseQuantity: (state, action) => {
            const { productId, bill_Id } = action.payload;

            const _billing = state.value.find(billing => billing.id === bill_Id);

            if (_billing) {
                const _item = _billing.items.find(item => item.product.id === productId);
                if (_item) {
                    const _index = _billing.items.indexOf(_item);
                    if (_item.product.quantity - _item.quantity > 0) {
                        _billing.items[_index].quantity++;
                        _billing.items[_index].cgst += _item.product.tax.cgst * _item.product.selling_price;
                        _billing.items[_index].sgst += _item.product.tax.sgst * _item.product.selling_price;
                        _billing.items[_index].total += _item.product.selling_price;
                    } else {
                        console.log('Out of stock');
                    }
                } else {
                    console.log('Item not found');
                }
            } else {
                console.log('Billing not found');
            }
        },

        // Action to decrease the item quantity. Just send productId as payload
        decreaseQuantity: (state, action) => {
            const { productId, bill_Id } = action.payload;

            const _billing = state.value.find(billing => billing.id === bill_Id);
            if (_billing) {
                const _item = _billing.items.find(item => item.product.id === productId);
                if (_item) {
                    const _index = _billing.items.indexOf(_item);
                    if (_item.quantity > 0) {
                        _billing.items[_index].cgst -= _item.product.tax.cgst * _item.product.selling_price;
                        _billing.items[_index].sgst -= _item.product.tax.sgst * _item.product.selling_price;
                        _billing.items[_index].total -= _item.product.selling_price;

                        if (_item.quantity === 1) {
                            _billing.items.splice(_index, 1);
                        } else {
                            _billing.items[_index].quantity--;
                        }
                    } else {
                        console.log('Quantity cannot be less than 0');
                    }
                } else {
                    console.log('Item not found');
                }
            } else {
                console.log('Billing not found');
            }
        },

        // Action to set the customer. Just send the customer object as payload
        setCustomer: (state, action) => {
            const { customer, bill_Id } = action.payload;

            const _billing = state.value.find(billing => billing.id === bill_Id);
            if (_billing) {
                _billing.customer = customer;
            } else {
                console.log('Billing not found');
            }
        },

        // Action to remove the bill from the state. Just send the bill_Id as payload
        removeBill: (state, action) => {
            const { bill_Id } = action.payload;

            const _billing = state.value.find(billing => billing.id === bill_Id);
            if (_billing) {
                const _index = state.value.indexOf(_billing);
                state.value.splice(_index, 1);
            } else {
                console.log('Billing not found');
            }
        }

    },
});


/**
 * Exporting the actions from the billingsSlice
 */
export const { addItem, increaseQuantity, decreaseQuantity, setCustomer, removeBill } = billingsSlice.actions;

/**
 * This will be used to select the value from the state in the component using the useSelector hook
 */
export const selectBills = (state) => state.billings.value;

/**
 * FInally Exporting the reducer from the billingsSlice
 */
export default billingsSlice.reducer;
