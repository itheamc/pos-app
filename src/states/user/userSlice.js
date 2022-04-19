/**
 *----------------------------@mit----------------------------
 * This is the user slice that will responsible for
 * fetching user from the server and 
 * managing it's state.
 * -----------------------------------------------------------
 */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchUser, updateUser } from './apis';

/**
 * Initial userSlice State 
 */
const initialState = {
    value: {},
    status: 'idle',
    error: null,
};

/**
 * Function to handle the async request to fetch the users from the server
 */
export const fetchUserAsync = createAsyncThunk(
    'user/fetchUser',
    async () => {
        const response = await fetchUser();
        return response.data;
    }
);


/**
 * Function to handle the async request to update a user to the server
 */
export const updateUserAsync = createAsyncThunk(
    'user/updateUser',
    async (user) => {
        const response = await updateUser(user);
        return response.data;
    }
);



/**
 * Creating userSice to handle the users state
 */
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {

    },
    // lets handle actions generated by createAsyncThunk or in other slices.
    // with the extra reducers
    extraReducers: (builder) => {
        builder
            .addCase(fetchUserAsync.pending, (state) => {
                state.status = 'fetching';
            })
            .addCase(fetchUserAsync.fulfilled, (state, action) => {
                state.status = 'idle';
                state.value = action.payload;
            })
            .addCase(fetchUserAsync.rejected, (state, action) => {
                state.status = 'idle';
                state.error = action.error;
            })
            .addCase(updateUserAsync.pending, (state) => {
                state.status = 'updating';
            })
            .addCase(updateUserAsync.fulfilled, (state, action) => {
                state.status = 'idle';
                state.value = action.payload;
            })
            .addCase(updateUserAsync.rejected, (state, action) => {
                state.status = 'idle';
                state.error = action.error;
            });

    },
});


/**
 * Exporting the actions from the userSlice
 */
export const { } = userSlice.actions;

/**
 * This will be used to select the value from the state in the component using the useSelector hook
 * @param {*} state 
 * @returns 
 */
export const selectUser = (state) => state.user.value;
export const selectUserStatus = (state) => state.user.status;
export const selectUserError = (state) => state.user.error;

/**
 * FInally Exporting the reducer from the userSlice
 */
export default userSlice.reducer;
