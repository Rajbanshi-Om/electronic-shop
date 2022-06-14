import { configureStore } from '@reduxjs/toolkit'
import HomePageReducer from './Features/HomePage/HomePageSlice';
import AddToCartReducer from './Features/AddToCart/AddToCartSlice'
import FilterSlice from './Features/Filter/FilterSlice';
import  DrawerSlice  from './Features/Drawer/DrawerSlice';
import  SubTotalSlice from './Features/SubTotal/SubTotalSlice';

export const store = configureStore({
    reducer: {
    home: HomePageReducer,
    cart: AddToCartReducer,
    filter: FilterSlice,
    drawer: DrawerSlice,
    subtotal:SubTotalSlice
  },
})