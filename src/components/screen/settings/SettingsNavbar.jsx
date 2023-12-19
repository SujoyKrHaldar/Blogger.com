/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  DISABLE_PROFILE,
  LOGOUT,
  SHOW_NOTIFICATION,
  SHOW_LOADING,
} from "../../../global";
import { authService } from "../../../service";

const links = [
  {
    name: "Profile",
    // tab: "profile",
  },
  {
    name: "Branding",
    tab: "branding",
  },
  {
    name: "Account",
    tab: "account",
  },
  {
    name: "Social Links",
    tab: "social",
  },
  {
    name: "Sessions",
    tab: "session",
  },
];

function SettingsNavbar({ tab }) {
  const dispatch = useDispatch();

  const handleLogout = async () => {
    const loginNotification = sessionStorage.getItem("isLoggedin");
    if (loginNotification) sessionStorage.removeItem("isLoggedin");
    try {
      dispatch(
        SHOW_LOADING({ message: "Logging you out...", type: "WARNING" })
      );

      await authService.logout();

      dispatch(LOGOUT());
      dispatch(DISABLE_PROFILE());

      dispatch(
        SHOW_NOTIFICATION({
          message: "Logout successfull",
          type: "SUCCESS",
        })
      );
    } catch (error) {
      dispatch(SHOW_NOTIFICATION({ message: error, type: "ERROR" }));
    }
  };

  return (
    <div className="pt-28 pb-8 pl-1 w-full h-full flex flex-col justify-between border-r border-black">
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">Settings</h1>

        <nav className="space-y-2">
          {links.map((data) => (
            <Link
              key={data.name}
              className={`block py-2 border-r-4
               hover:border-green-600 duration-200 ease-in-out 
              ${
                data.tab === tab
                  ? "border-green-700 text-green-500 font-medium"
                  : "border-transparent"
              } 
              `}
              to={data.tab ? `/settings?tab=${data.tab}` : "/settings"}
            >
              <p>{data.name}</p>
            </Link>
          ))}
        </nav>
      </div>
      <div className="space-y-3">
        <p onClick={handleLogout} className=" cursor-pointer">
          Logout
        </p>
        <Link
          className={`text-red-600 font-bold block py-2 border-r-4 
              border-transparent hover:border-red-500 duration-200 ease-in-out
               ${
                 tab === "deactivate" ? "border-red-700" : "border-transparent"
               } `}
          to="/settings?tab=deactivate"
        >
          <p>Delete Account</p>
        </Link>
      </div>
    </div>
  );
}

export default SettingsNavbar;
