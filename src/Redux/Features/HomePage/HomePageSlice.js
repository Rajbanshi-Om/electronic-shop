import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
}

export const HomePageSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
      allValue: (state, action) => {
        state.value = []
        state.value.push(action.payload)
    },
   
  },
})

// Action creators are generated for each case reducer function
export const {allValue } = HomePageSlice.actions

export default HomePageSlice.reducer