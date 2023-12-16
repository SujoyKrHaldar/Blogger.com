const authAction = {
  login: (state, action) => {
    state.authStatus = true;
    state.userData = action.payload;
  },
  Logout: (state) => {
    state.authStatus = false;
    state.isActivated = false;
    state.userData = null;
  },
  activateProfile: (state) => {
    state.isActivated = true;
  },
  disableProfile: (state) => {
    state.isActivated = false;
  },
};

export default authAction;
