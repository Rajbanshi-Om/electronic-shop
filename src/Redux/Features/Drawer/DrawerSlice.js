import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value :false
}

export const DrawerSlice = createSlice({
    name: 'drawer',
    initialState,
    reducers: {
        toggleDrawer: (state, action) => {
            state.value = action.payload
        }
    }
    
})

export const { toggleDrawer } = DrawerSlice.actions;

export default DrawerSlice.reducer