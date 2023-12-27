import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { GuestRoute, PrivateRoute, SemiProtectedRoute } from "./components";
import {
  AccountSettings,
  BrandSettings,
  CreateArticle,
  Dashboard,
  DeleteProfile,
  Feed,
  GetStarted,
  Home,
  Login,
  PageNotFound,
  Profile,
  ProfileSettings,
  Search,
  SessionSettings,
  Settings,
  Signup,
  SocialSettings,
} from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: (
          <GuestRoute redirectOnAuthSuccess="/feed">
            <Home />
          </GuestRoute>
        ),
      },
      {
        path: "login",
        element: (
          <GuestRoute redirectOnAuthSuccess="/feed">
            <Login />
          </GuestRoute>
        ),
      },
      {
        path: "signup",
        element: (
          <GuestRoute redirectOnAuthSuccess="/setup">
            <Signup />
          </GuestRoute>
        ),
      },
      {
        path: "setup",
        element: (
          <SemiProtectedRoute>
            <GetStarted />
          </SemiProtectedRoute>
        ),
      },
      {
        path: "create",
        element: (
          <PrivateRoute>
            <CreateArticle />
          </PrivateRoute>
        ),
      },
      {
        path: "dashboard",
        element: (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        ),
      },
      {
        path: "settings",
        element: (
          <PrivateRoute>
            <Settings />
          </PrivateRoute>
        ),
        children: [
          {
            path: "",
            element: <ProfileSettings />,
          },
          {
            path: "branding",
            element: <BrandSettings />,
          },
          {
            path: "account",
            element: <AccountSettings />,
          },
          {
            path: "social",
            element: <SocialSettings />,
          },
          {
            path: "session",
            element: <SessionSettings />,
          },
          {
            path: "delete",
            element: <DeleteProfile />,
          },
        ],
      },
      {
        path: "author/:username",
        element: <Profile />,
      },
      {
        path: "feed",
        element: <Feed />,
      },
      {
        path: "search",
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
