import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    filterArray:'',
    value: [],
    min: 0,
    max:0
}


export const FilterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        addFilterArray: (state, action) => {
            state.filterArray=action.payload
        },
        addFilter: (state, action) => {
            state.value.push(action.payload)
        },
        deleteFilterValue: (state, action) => {
            state.value = state.value.filter((val) => val !== action.payload)
            
        },
        minPrice: (state, action) => {
           state.min = action.payload 
            
        },
        maxPrice: (state, action) => {
           state.max = action.payload 
        },

    }
})

export const { addFilterArray,addFilter, deleteFilterValue,minPrice,maxPrice } = FilterSlice.actions;

export default FilterSlice.reducer