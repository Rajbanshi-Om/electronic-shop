import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
    basket : []
}
export const AddToCartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToBasket: (state, action) => {
            if (state.basket.length <= 0) {
                let mapData = {
                    ...action.payload,
                    count:1
                  }
                 state.basket.push(mapData)
            } else {
                let newBasket = current(state.basket)
                const filterData = newBasket?.filter((item) => item?.id === action.payload?.id)
                if (filterData.length > 0) {
                    const newArray =  current(state.basket).map((val, idx) => {
                        if (val?.id === action.payload?.id) {
                            return {...action.payload,count:filterData[0]?.count + 1}
                        }
                        return val
                    })
        
                state.basket = newArray
            } else {
                let mapData = {
                    ...action.payload,
                    count:1
                  }
                 state.basket.push(mapData)
                }
            }
                
            
        },
        deleteFromBasket: (state, action) => {
            state.basket = state.basket.filter((val) => val?.id !== action.payload)
        },
        removeCount: (state, action) => {
            let newBasket = current(state.basket)
            const filterData = newBasket?.filter((item) => item?.id === action.payload?.id)
            if (filterData.length > 0) {
                const newArray =  current(state.basket).map((val, idx) => {
                    if (val?.id === action.payload?.id) {
                        return {...action.payload,count:filterData[0]?.count - 1}
                    }
                    return val
                })
    
            state.basket = newArray
        }
        }

    }
})


export const { addToBasket,deleteFromBasket,removeCount} = AddToCartSlice.actions;


export default AddToCartSlice.reducer