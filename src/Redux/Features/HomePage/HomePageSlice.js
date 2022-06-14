import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
}

export const HomePageSlice = createSlice({
  name: 'homepage',
  initialState,
  reducers: {
      allValue: (state, action) => {
      state.value = []
      action.payload?.map((val, idx) => {
        let priceData = parseInt(val.price.slice(1))
        let mapData = {
          ...val,
          priceData,
          id:idx+1
        }
        return state.value.push(mapData)
      })
        
    },
   
  },
})

// Action creators are generated for each case reducer function
export const {allValue } = HomePageSlice.actions

export default HomePageSlice.reducer