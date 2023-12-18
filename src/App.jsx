/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import { Layout, SplashScreen } from "./components";
import {
  ACTIVATE_PROFILE,
  DISABLE_PROFILE,
  LOGIN,
  LOGOUT,
  SHOW_NOTIFICATION,
} from "./global";
import { authService } from "./service";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  const checkAuth = async () => {
    try {
      const { userData, profileData } = await authService.getCurrentUser();

      if (userData) {
        profileData
          ? dispatch(ACTIVATE_PROFILE(profileData))
          : dispatch(DISABLE_PROFILE());

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
      <SplashScreen loading={loading} />
      {!loading ? (
        <Layout>
          <Outlet />
        </Layout>
      ) : null}
    </>
  );
}

export default App;
