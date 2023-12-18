import { createSlice } from "@reduxjs/toolkit";
import profileAction from "../actions/profileAction";

const initialState = {
  isActivated: false,
  profileData: null,
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    ACTIVATE_PROFILE: profileAction.activateProfile,
    DISABLE_PROFILE: profileAction.disableProfile,
  },
});

export const { ACTIVATE_PROFILE, DISABLE_PROFILE } = profileSlice.actions;
export const profileReducers = profileSlice.reducer;
