import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import messageReducer from '../features/message/messageSlice';

const reducer = {
  auth: authReducer,
  message: messageReducer
}

export const store = configureStore({
  reducer: reducer,
  devTools: true
});
