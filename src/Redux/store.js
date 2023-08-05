import { configureStore } from '@reduxjs/toolkit';
import counter from '../Features/counter';

export const store = configureStore({
  reducer: {
    counter,
  },
});
