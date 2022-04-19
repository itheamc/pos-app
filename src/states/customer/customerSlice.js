/**
 *----------------------------@mit----------------------------
 * This is the customer slice that will responsible for
 * fetching the customers from the server and 
 * managing their state.
 * -----------------------------------------------------------
 */

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchCustomers, addCustomer, updateCustomer, deleteCustomer } from './apis';

/**
 * Initial customerSlice State 
 */
const initialState = {
    value: [],
    selected: null,
    status: 'idle',
    error: null,
};

/**
 * Function to handle the async request to fetch the customers
 */
export const fetchCustomersAsync = createAsyncThunk(
    'customer/fetchCustomers',
    async () => {
        const response = await fetchCustomers();
        return response.data;
    }
);


/**
 * Function to handle the async request to add the customer
 */
export const addCustomerAsync = createAsyncThunk(
    'customer/addCustomer',
    async (customer) => {
        const response = await addCustomer(customer);
        return response.data;
    }
);

/**
 * Function to handle the async request to update the customer
 */
export const updateCustomerAsync = createAsyncThunk(
    'customer/updateCustomer',
    async (customer) => {
        const response = await updateCustomer(customer);
        return response.data;
    }
);

/**
 * Function to handle the async request to delete the customer
 */
export const deleteCustomerAsync = createAsyncThunk(
    'customer/deleteCustomer',
    async (customer) => {
        const response = await deleteCustomer(customer);
        return response.data;
    }
);


/**
 * Creating customerSice to handle the customers state
 */
const customerSlice = createSlice({
    name: 'customer',
    initialState,
    reducers: {
        select: (state, action) => {
            state.selected = action.payload.customer;
        },
    },
    // lets handle actions generated by createAsyncThunk or in other slices.
    // with the extra reducers
    extraReducers: (builder) => {
        builder
            .addCase(fetchCustomersAsync.pending, (state) => {
                state.status = 'fetching';
            })
            .addCase(fetchCustomersAsync.fulfilled, (state, action) => {
                state.status = 'idle';
                state.value = action.payload;
            })
            .addCase(fetchCustomersAsync.rejected, (state, action) => {
                state.status = 'idle';
                state.error = action.error;
            })
            .addCase(addCustomerAsync.pending, (state) => {
                state.status = 'adding';
            })
            .addCase(addCustomerAsync.fulfilled, (state, action) => {
                state.status = 'idle';
                state.value = action.payload;
            })
            .addCase(addCustomerAsync.rejected, (state, action) => {
                state.status = 'idle';
                state.error = action.error;
            })
            .addCase(updateCustomerAsync.pending, (state) => {
                state.status = 'updating';
            })
            .addCase(updateCustomerAsync.fulfilled, (state, action) => {
                state.status = 'idle';
                const index = state.value.findIndex(customer => customer.id === action.payload.id);
                state.value[index] = action.payload;
            })
            .addCase(updateCustomerAsync.rejected, (state, action) => {
                state.status = 'idle';
                state.error = action.error;
            })
            .addCase(deleteCustomerAsync.pending, (state) => {
                state.status = 'deleting';
            })
            .addCase(deleteCustomerAsync.fulfilled, (state, action) => {
                state.status = 'idle';
                const index = state.value.findIndex(customer => customer.id === action.payload.id);
                state.value.splice(index, 1);
            })
            .addCase(deleteCustomerAsync.rejected, (state, action) => {
                state.status = 'idle';
                state.error = action.error;
            });

    },
});


/**
 * Exporting the actions from the customerSlice
 */
export const { select } = customerSlice.actions;

/**
 * This will be used to select the value from the state in the component using the useSelector hook
 * @param {*} state 
 * @returns 
 */
export const selectCustomers = (state) => state.customer.value;
export const selectSelectedCustomer = (state) => state.customer.selected;
export const selectCustomerStatus = (state) => state.customer.status;
export const selectCustomerError = (state) => state.customer.error;

/**
 * Finally Exporting the reducer from the customerSlice
 */
export default customerSlice.reducer;
