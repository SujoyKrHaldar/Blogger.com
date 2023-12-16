import { configureStore } from "@reduxjs/toolkit";

import { authReducers } from "./slices/authSlice";
import { notificationReducer } from "./slices/notificationSlice";

const store = configureStore({
  reducer: {
    auth: authReducers,
    notification: notificationReducer,
  },
});

export default store;
