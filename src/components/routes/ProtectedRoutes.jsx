/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const GuestRoute = ({ children, redirectOnAuthSuccess }) => {
  const { authStatus } = useSelector((state) => state.auth);
  return authStatus ? <Navigate to={redirectOnAuthSuccess} /> : children;
};

const SemiProtectedRoute = ({ children, redirectOnSuccess }) => {
  const { authStatus, userData, isActivated } = useSelector(
    (state) => state.auth
  );

  return !authStatus ? (
    <Navigate to="/login" />
  ) : authStatus && !isActivated ? (
    children
  ) : (
    <Navigate to={redirectOnSuccess || "/profile/" + userData.$id} />
  );
};

const PrivateRoute = ({ children }) => {
  const { authStatus, isActivated } = useSelector((state) => state.auth);

  return !authStatus ? (
    <Navigate to="/login" />
  ) : authStatus && !isActivated ? (
    <Navigate to="/get-started" />
  ) : (
    children
  );

  // const [loading, setLoading] = useState(true);

  // const navigate = useNavigate();

  // useEffect(() => {
  //   console.log("PRIVATE ROUTE RUNNING ...", !authStatus);
  //   if (!authStatus) {
  //     navigate("/login");
  //   } else if (authStatus && !isActivated) {
  //     navigate("/get-started");
  //   }
  //   setLoading(false);
  // }, [authStatus, isActivated]);

  // return (
  //   <>
  //     {loading ? (
  //       <SplashScreen loading={loading} title="Redirecting" />
  //     ) : (
  //       { children }
  //     )}
  //     2
  //   </>
  // );
};

export { PrivateRoute, GuestRoute, SemiProtectedRoute };

// Public Routes: /, /login, /signup, /feed, /search,
// /author/username, /blog/blog-name
// Accessable by Any ( Guests or Authenticated Users )

// Guest Routes: /, /login, /signup
// Accessable by only Guests ( authStatus = F )
// if authStatus = T => Redirected to => /feed

// Semi-Protected Routes : /get-started
// Accessable by only Authenticated Users with profile Activation False
// ( authStatus = T && isActivated = F)
// if authStatus = F => redirected to => /login
// if authStatus = T & isActivated = T => redirected to => /dashboard

// Protected Routes: /dashboard, /create-post, /update-post
// Accessable by only Authenticated Users
// ( authStatus = T && isActivated = T)
// if authStatus = F => redirected to => /login
// if authStatus = T & isActivated = T => redirected to => /dashboard
