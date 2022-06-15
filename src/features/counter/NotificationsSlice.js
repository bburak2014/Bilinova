import { createSlice } from "@reduxjs/toolkit";
 
const initialState = {
  value: 0,
  status: "idle",
};

export const NotificationsSlice = createSlice({
  name: "Notifications",
  initialState,
  reducers: {
   
    
    incrementNotifications: (state) => {
      state.value += 1;
      
    },
    decrementNotifications: (state) => {
      state.value -= 1;
    }
  },
});

export const { incrementNotifications, decrementNotifications } = NotificationsSlice.actions;

export const selectNotifications = (state) => state.Notifications.value;

export default NotificationsSlice.reducer;
