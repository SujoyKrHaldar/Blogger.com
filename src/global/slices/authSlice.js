import { createSlice } from "@reduxjs/toolkit";
import authAction from "../actions/authAction";

const initialState = {
  authStatus: false,
  isActivated: false,
  userData: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    LOGIN: authAction.login,
    LOGOUT: authAction.Logout,
    ACTIVATE_PROFILE: authAction.activateProfile,
    DISABLE_PROFILE: authAction.disableProfile,
  },
});

export const { LOGIN, LOGOUT, ACTIVATE_PROFILE, DISABLE_PROFILE } =
  authSlice.actions;
export const authReducers = authSlice.reducer;
