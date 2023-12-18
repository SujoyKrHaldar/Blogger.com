const profileAction = {
  activateProfile: (state, action) => {
    state.isActivated = true;
    state.profileData = action.payload;
  },
  disableProfile: (state) => {
    state.isActivated = false;
    state.profileData = null;
  },
};

export default profileAction;
