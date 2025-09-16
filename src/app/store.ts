import { configureStore, UnknownAction } from '@reduxjs/toolkit';
import { cartSlice } from '../features/cart/cartSlice';

export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
