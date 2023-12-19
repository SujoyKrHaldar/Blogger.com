import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { GuestRoute, PrivateRoute, SemiProtectedRoute } from "./components";
import {
  Dashboard,
  Feed,
  GetStarted,
  Home,
  Login,
  PageNotFound,
  Profile,
  Search,
  Settings,
  Signup,
} from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: (
          <GuestRoute redirectOnAuthSuccess="/feed">
            <Home />
          </GuestRoute>
        ),
      },
      {
        path: "/login",
        element: (
          <GuestRoute redirectOnAuthSuccess="/feed">
            <Login />
          </GuestRoute>
        ),
      },
      {
        path: "/signup",
        element: (
          <GuestRoute redirectOnAuthSuccess="/get-started">
            <Signup />
          </GuestRoute>
        ),
      },
      {
        path: "/get-started",
        element: (
          <SemiProtectedRoute>
            <GetStarted />
          </SemiProtectedRoute>
        ),
      },
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        ),
      },
      {
        path: "/settings",
        element: (
          <PrivateRoute>
            <Settings />
          </PrivateRoute>
        ),
      },
      {
        path: "/author/:username",
        element: <Profile />,
      },
      {
        path: "/feed",
        element: <Feed />,
      },
      {
        path: "/search",
        element: <Search />,
      },
      {
        path: "*",
        element: <PageNotFound />,
      },
    ],
  },
]);

export default router;
