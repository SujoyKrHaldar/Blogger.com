/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const GuestRoute = ({ children, redirectOnAuthSuccess }) => {
  const { authStatus } = useSelector((state) => state.auth);
  return authStatus ? <Navigate to={redirectOnAuthSuccess} /> : children;
};

const SemiProtectedRoute = ({ children, redirectOnSuccess }) => {
  const { authStatus } = useSelector((state) => state.auth);
  const { isActivated, profileData } = useSelector((state) => state.profile);

  return !authStatus ? (
    <Navigate to="/login" />
  ) : authStatus && !isActivated ? (
    children
  ) : (
    <Navigate to={redirectOnSuccess || "/author/" + profileData?.username} />
  );
};

const PrivateRoute = ({ children }) => {
  const { authStatus } = useSelector((state) => state.auth);
  const { isActivated } = useSelector((state) => state.profile);

  return !authStatus ? (
    <Navigate to="/login" />
  ) : authStatus && !isActivated ? (
    <Navigate to="/setup" />
  ) : (
    children
  );
};

export { PrivateRoute, GuestRoute, SemiProtectedRoute };
