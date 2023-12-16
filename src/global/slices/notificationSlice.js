import { createSlice } from "@reduxjs/toolkit";
import notificationAction from "../actions/notificationAction";

const initialState = {
  isVisible: false,
  isLoading: false,
  notification: null,
};

const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    SHOW_NOTIFICATION: notificationAction.showNotification,
    HIDE_NOTIFICATION: notificationAction.hideNotification,
    SHOW_LOADING: notificationAction.showLoading,
  },
});

export const { SHOW_NOTIFICATION, HIDE_NOTIFICATION, SHOW_LOADING } =
  notificationSlice.actions;

export const notificationReducer = notificationSlice.reducer;
