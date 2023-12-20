/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

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
  return (
    <div className="pt-28 pb-8 pl-1 w-full h-full flex flex-col justify-between border-r border-black">
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">Settings</h1>

        <nav className="space-y-2">
          {links.map((data) => (
            <Link
              key={data.name}
              className={`block py-2 duration-200 ease-in-out 
              ${
                data.tab === tab
                  ? "border-r-4 border-green-700 text-green-700 font-medium pl-6 bg-green-100 rounded-l-lg"
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

      <Link
        className={`text-red-600 font-bold block py-2 duration-200 ease-in-out
               ${
                 tab === "deactivate"
                   ? "border-r-4 border-red-700 text-green-700 pl-6 bg-red-200 rounded-l-lg"
                   : "border-transparent"
               } `}
        to="/settings?tab=deactivate"
      >
        <p>Delete Account</p>
      </Link>
    </div>
  );
}

export default SettingsNavbar;
