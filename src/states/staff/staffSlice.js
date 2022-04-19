/**
 *----------------------------@mit----------------------------
 * This is the staff slice that will responsible for
 * fetching the staffs from the server and 
 * managing their state.
 * -----------------------------------------------------------
 */

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchStaffs, addStaff, updateStaff, deleteStaff } from './apis';

/**
 * Initial staffSlice State 
 */
const initialState = {
    value: [],
    selected: null,
    status: 'idle',
    error: null,
};

/**
 * Function to handle the async request to fetch the staffs from the server
 */
export const fetchStaffsAsync = createAsyncThunk(
    'staff/fetchStaffs',
    async () => {
        const response = await fetchStaffs();
        return response.data;
    }
);

/**
 * Function to handle the async request to add a staff to the server
 */
export const addStaffAsync = createAsyncThunk(
    'staff/addStaff',
    async (staff) => {
        const response = await addStaff(staff);
        return response.data;
    }
);


/**
 * Function to handle the async request to update a staff to the server
 */
export const updateStaffAsync = createAsyncThunk(
    'staff/updateStaff',
    async (staff) => {
        const response = await updateStaff(staff);
        return response.data;
    }
);


/**
 * Function to handle the async request to delete a staff from the server
 */
export const deleteStaffAsync = createAsyncThunk(
    'staff/deleteStaff',
    async (staff) => {
        const response = await deleteStaff(staff);
        return response.data;
    }
);


/**
 * Creating staffSice to handle the staffs state
 */
const staffSlice = createSlice({
    name: 'staff',
    initialState,
    reducers: {
        select: (state, action) => {
            state.selected = action.payload.staff;
        },
    },
    // lets handle actions generated by createAsyncThunk or in other slices.
    // with the extra reducers
    extraReducers: (builder) => {
        builder
            .addCase(fetchStaffsAsync.pending, (state) => {
                state.status = 'fetching';
            })
            .addCase(fetchStaffsAsync.fulfilled, (state, action) => {
                state.status = 'idle';
                state.value = action.payload;
            })
            .addCase(fetchStaffsAsync.rejected, (state, action) => {
                state.status = 'idle';
                state.error = action.error;
            })
            .addCase(addStaffAsync.pending, (state) => {
                state.status = 'adding';
            })
            .addCase(addStaffAsync.fulfilled, (state, action) => {
                state.status = 'idle';
                state.value.push(action.payload);
            })
            .addCase(addStaffAsync.rejected, (state, action) => {
                state.status = 'idle';
                state.error = action.error;
            })
            .addCase(updateStaffAsync.pending, (state) => {
                state.status = 'updating';
            })
            .addCase(updateStaffAsync.fulfilled, (state, action) => {
                state.status = 'idle';
                const index = state.value.findIndex(staff => staff.id === action.payload.id);
                state.value[index] = action.payload;
            })
            .addCase(updateStaffAsync.rejected, (state, action) => {
                state.status = 'idle';
                state.error = action.error;
            })
            .addCase(deleteStaffAsync.pending, (state) => {
                state.status = 'deleting';
            })
            .addCase(deleteStaffAsync.fulfilled, (state, action) => {
                state.status = 'idle';
                const index = state.value.findIndex(staff => staff.id === action.payload.id);
                state.value.splice(index, 1);
            })
            .addCase(deleteStaffAsync.rejected, (state, action) => {
                state.status = 'idle';
                state.error = action.error;
            });

    },
});


/**
 * Exporting the actions from the staffSlice
 */
export const { select } = staffSlice.actions;

/**
 * This will be used to select the value from the state in the component using the useSelector hook
 * @param {*} state 
 * @returns 
 */
export const selectStaffs = (state) => state.staff.value;
export const selectSelectedStaff = (state) => state.staff.selected;
export const selectStaffStatus = (state) => state.staff.status;
export const selectStaffError = (state) => state.staff.error;

/**
 * FInally Exporting the reducer from the staffSlice
 */
export default staffSlice.reducer;
