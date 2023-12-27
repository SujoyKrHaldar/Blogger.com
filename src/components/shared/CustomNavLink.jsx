/* eslint-disable react/prop-types */
import { Link, useMatch } from "react-router-dom";

function CustomNavLink({ to, children }) {
  const isSettingsActive = useMatch(to);

  return (
    <Link to={to} className={`block py-2 ${isSettingsActive ? "active" : ""}`}>
      {children}
    </Link>
  );
}

export default CustomNavLink;
