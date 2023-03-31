import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '@/redux/store'


interface ICounterState {
  count: number;
}

const initialState: ICounterState = {
  count: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: state => {
      state.count += 1
    },

  }
})

export const { increment } = counterSlice.actions
export default counterSlice.reducer


