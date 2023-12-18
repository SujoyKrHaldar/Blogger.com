/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

function ProfileNavbar({ tabs, isProfileOwner, currentTab, navigateTabs }) {
  return (
    <div
      className={`flex items-center border-b border-t border-gray-400 ${
        isProfileOwner ? "justify-between" : "justify-center"
      }`}
    >
      <nav className="flex items-center justify-center">
        {tabs.map(
          (tab) =>
            tab.active && (
              <p
                key={tab.name}
                className={`py-3 px-8 cursor-pointer border-l border-r duration-300 ease-in-out ${
                  tab.name === currentTab
                    ? "border-gray-400 bg-gray-100"
                    : "border-transparent"
                }`}
                onClick={()=>navigateTabs(tab.name)}
              >
                {tab.name}
              </p>
            )
        )}
      </nav>

      {isProfileOwner && (
        <Link
          to="/dashboard"
          className="py-3 px-8 cursor-pointer border-l border-r border-gray-400 bg-gray-100"
        >
          Edit Profile
        </Link>
      )}
    </div>
  );
}

export default ProfileNavbar;
