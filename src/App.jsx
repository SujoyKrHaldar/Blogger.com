/* eslint-disable react-hooks/exhaustive-deps */
import { Outlet } from "react-router-dom";
import { Layout, SplashScreen } from "./components";
import { useAutoLoginOnRefresh } from "./hooks";

function App() {
  const { loading } = useAutoLoginOnRefresh();

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
