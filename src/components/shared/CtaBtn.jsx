/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

function CtaBtn({ children, url = "#", className = "" }) {
  return (
    <Link
      to={url}
      className={`bg-green-700 w-max px-8 py-3 rounded-full border border-green-700
      ${className}`}
    >
      {children}
    </Link>
  );
}

export default CtaBtn;
