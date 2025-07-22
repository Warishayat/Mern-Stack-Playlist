import { configureStore } from '@reduxjs/toolkit'
import pastReducer from '../feature/Todolist/TodoSlice'
export const store = configureStore({
  reducer: {
    paste: pastReducer
  },
})