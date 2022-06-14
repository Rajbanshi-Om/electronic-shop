import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count:0
}

export const SubTotalSlice = createSlice({
    name: 'subtotal',
    initialState,
    reducers: {
        increseTotal: (state, action) => {
            state.count = action.payload 
        },
        decreseTotal: (state, action) => {
            state.count -= action.payload 
        }
    }
})
 
export const {increseTotal,decreseTotal} = SubTotalSlice.actions
export default SubTotalSlice.reducer;