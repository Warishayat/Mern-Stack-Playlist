import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../feature/cart/cartSlicee'  
export const store = configureStore({
  reducer: {
    cart: cartReducer   
  },
})
