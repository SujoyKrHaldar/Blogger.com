/* eslint-disable react/prop-types */
import { Link, useNavigate } from "react-router-dom";

function SettingsTemplate({ title, children }) {
  const navigate = useNavigate();
  return (
    <div className="pt-28 pb-16 px-8 space-y-4">
      <nav className="flex gap-2 text-gray-500 pt-2">
        <p
          onClick={() => navigate(-1)}
          className="text-sm cursor-pointer hover:text-black duration-300"
        >
          Go Back
        </p>
        <p className="text-sm">{">"}</p>
        <Link to="/settings">
          <p className="text-sm cursor-pointer hover:text-black duration-300">
            Settings
          </p>
        </Link>
      </nav>

      <h1 className="text-3xl font-bold">{title}</h1>
      {children}
    </div>
  );
}

export default SettingsTemplate;
