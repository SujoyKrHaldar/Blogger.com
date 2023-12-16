/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import { Layout, SplashScreen } from "./components";
import {
  ACTIVATE_PROFILE,
  LOGIN,
  LOGOUT,
  SHOW_NOTIFICATION,
  DISABLE_PROFILE,
} from "./global";
import { authService, userProfile } from "./service";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  const checkAuth = async () => {
    try {
      const userData = await authService.getCurrentUser();
      if (userData) {
        const profile = await userProfile.getProfile(userData.$id);
        if (profile) {
          dispatch(ACTIVATE_PROFILE());
        } else {
          dispatch(DISABLE_PROFILE());
        }

        dispatch(LOGIN(userData));

        dispatch(
          SHOW_NOTIFICATION({
            message: `Welcome back ${userData.name} ✌️`,
            type: "SUCCESS",
          })
        );
      } else {
        dispatch(LOGOUT());
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

  return (
    <>
      <Layout>
        <SplashScreen loading={loading} />
        <Outlet />
      </Layout>
    </>
  );
}

export default App;
