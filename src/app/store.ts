import { configureStore, UnknownAction } from '@reduxjs/toolkit';
// TODO: import slice

export const store = configureStore({
  reducer: function (state: any, action: UnknownAction) {
    console.log('function not implemented!');
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
