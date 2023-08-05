import { configureStore } from '@reduxjs/toolkit';
import { counterSlice } from '../Features/Counter/counter';
export const counterStore = configureStore({
  reducer: { counter: counterSlice.reducer },
});
