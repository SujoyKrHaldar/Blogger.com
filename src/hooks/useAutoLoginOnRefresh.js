/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  ACTIVATE_PROFILE,
  DISABLE_PROFILE,
  LOGIN,
  LOGOUT,
  SHOW_NOTIFICATION,
} from "../global";
import { authService } from "../service";

function useAutoLoginOnRefresh() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  const checkAuth = async () => {
    const loginNotification = sessionStorage.getItem("isLoggedin");
    try {
      const currentUser = await authService.getCurrentUser();

      if (currentUser?.userData) {
        currentUser?.profileData
          ? dispatch(ACTIVATE_PROFILE(currentUser.profileData))
          : dispatch(DISABLE_PROFILE());

        dispatch(LOGIN(currentUser.userData));

        if (!loginNotification) {
          dispatch(
            SHOW_NOTIFICATION({
              message: `Welcome back ${currentUser.userData.name} ✌️`,
              type: "SUCCESS",
            })
          );
          sessionStorage.setItem("isLoggedin", true);
        }
      } else {
        dispatch(LOGOUT());
        if (loginNotification) sessionStorage.removeItem("isLoggedin");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const handleLoad = async () => {
      await checkAuth();

      setTimeout(() => {
        setLoading(false);
      }, 2000);
    };

    window.addEventListener("load", handleLoad);
    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return { checkAuth, loading };
}

export default useAutoLoginOnRefresh;
