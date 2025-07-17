import { configureStore } from '@reduxjs/toolkit'
import { cartSlice } from '../feature/cart'
export const store = configureStore({
  reducer: {
    cart:cartSlice
  },
})

