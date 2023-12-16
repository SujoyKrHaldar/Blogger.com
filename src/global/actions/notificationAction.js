const notificationAction = {
  showNotification: (state, action) => {
    state.isVisible = true;
    state.isLoading = false;
    state.notification = action.payload;
  },
  showLoading: (state, action) => {
    state.isVisible = true;
    state.isLoading = true;
    state.notification = action.payload;
  },
  hideNotification: (state) => {
    state.isVisible = false;
    state.isLoading = false;
    state.notification = null;
  },
};

export default notificationAction;
