import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '@/redux/slices/counter'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
  middleware: [],
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
