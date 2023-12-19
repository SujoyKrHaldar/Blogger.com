/* eslint-disable react/prop-types */
import { NavLink, Link } from "react-router-dom";
import { IconClose } from "../../assets/icons";
import Image from "../shared/Image";

function SideNavbar({
  isOpen,
  imgSrc,
  userData,
  isActivated,
  profileData,
  handleLogout,
  toggelMenu,
}) {
  return (
    <div
      className={`z-40 absolute inset-0 w-full h-screen duration-300 ease-in-out p-8 
      ${
        isOpen
          ? "bg-[#00000063] opacity-100 pointer-events-auto"
          : "bg-transparent opacity-0"
      }`}
    >
      <div
        className={`w-max h-full bg-white ml-auto duration-300 border-l rounded-xl border-gray-400 shadow-2xl
       ${isOpen ? "translate-x-0 opacity-100" : "translate-x-full"}`}
      >
        <div
          onClick={toggelMenu}
          className="z-10 text-xl text-gray-400 cursor-pointer absolute p-2
            rounded-full border border-gray-400 -left-4 top-8 bg-white"
        >
          <IconClose />
        </div>

        <div className="flex flex-col  justify-between w-full h-full ">
          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-4 py-4 px-10 border-b border-gray-400">
              <div className="bg-white border border-gray-400 w-16 h-16 rounded-full overflow-hidden">
                <Image src={imgSrc} alt="avatar" className="scale-125" />
              </div>
              <div className="">
                <p className="text-lg font-semibold">{userData?.name}</p>
                <p className="text-sm font-medium text-green-500">
                  {userData?.email}
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-4 py-4 px-10">
              {isActivated ? (
                <>
                  <NavLink
                    onClick={toggelMenu}
                    to={`/author/${profileData?.username}`}
                  >
                    <p>Profile</p>
                  </NavLink>

                  <NavLink onClick={toggelMenu} to="/dashboard">
                    <p>Dashboard</p>
                  </NavLink>

                  <NavLink onClick={toggelMenu} to="/settings">
                    <p>Settings</p>
                  </NavLink>
                </>
              ) : (
                <Link to="/get-started">
                  <p>Create Profile</p>
                </Link>
              )}
            </div>
          </div>

          <p
            className=" cursor-pointer py-6 px-10 border-t border-gray-400 font-semibold"
            onClick={handleLogout}
          >
            Logout
          </p>
        </div>
      </div>
    </div>
  );
}

export default SideNavbar;
