import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/counter/counterSlice';
import todoSlice from './features/counter/todoSlice';
import NotificationsSlice from './features/counter/NotificationsSlice';
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todos:todoSlice,
    Notifications:NotificationsSlice
  },
});
