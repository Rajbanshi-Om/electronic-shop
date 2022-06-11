import { configureStore } from '@reduxjs/toolkit'
import HomePageReducer from './Features/HomePage/HomePageSlice'
export const store = configureStore({
    reducer: {
      home:HomePageReducer
  },
})