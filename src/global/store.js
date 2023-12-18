import { configureStore } from "@reduxjs/toolkit";
import { authReducers } from "./slices/authSlice";
import { notificationReducer } from "./slices/notificationSlice";
import { profileReducers } from "./slices/profileSlice";

const store = configureStore({
  reducer: {
    auth: authReducers,
    profile: profileReducers,
    notification: notificationReducer,
  },
});

export default store;
