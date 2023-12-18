import { Link, NavLink } from "react-router-dom";
import CtaBtn from "../shared/CtaBtn";
import Image from "../shared/Image";

import { useSelector, useDispatch } from "react-redux";
import { assetService, authService } from "../../service";
import { LOGOUT, SHOW_NOTIFICATION, SHOW_LOADING, DISABLE_PROFILE } from "../../global";
import { useState } from "react";
import SearchInput from "../shared/SearchInput";
import { IconClose } from "../../assets/icons";

function Navbar() {
  const { authStatus, userData } = useSelector((state) => state.auth);
  const { profileData, isActivated } = useSelector((state) => state.profile);

  const dispatch = useDispatch();

  const [isOpen, setOpen] = useState(false);

  const handleLogout = async () => {
    setOpen(!isOpen);

    try {
      dispatch(
        SHOW_LOADING({ message: "Logging you out...", type: "WARNING" })
      );
      await authService.logout();
      dispatch(LOGOUT());
      dispatch( DISABLE_PROFILE())

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

  const imgSrc = assetService.getAssetPreview(profileData?.profilePicId || "");

  return (
    <>
      <div className="z-20 py-3 w-full h-fit bg-white border-b border-gray-500 pointer-events-auto">
        <div className="container  flex items-center justify-between gap-4">
          <Link to="/">
            <h1 className=" font-bold text-3xl">Blogger.com</h1>
          </Link>

          <nav className="flex items-center gap-8">
            <SearchInput
              className="bg-gray-100 border border-gray-300 px-4 py-[0.6rem] rounded-full"
              placeholder="Search"
            />

            <NavLink to="/feed">
              <p>Feed</p>
            </NavLink>

            {authStatus ? (
              <>
                {/* <NavLink to="/dashboard">
                  <p>Dashboard</p>
                </NavLink> */}

                {/* <p className=" cursor-pointer" onClick={handleLogout}>
                  Logout
                </p> */}

                <CtaBtn url="/create" className="text-white py-[0.7rem]">
                  <p>Write Post</p>
                </CtaBtn>

                <div
                  onClick={() => setOpen(!isOpen)}
                  className="bg-white border-2 border-green-700 w-12 h-12 rounded-full overflow-hidden -ml-4 cursor-pointer"
                >
                  <Image
                    src={
                      isActivated && profileData.profilePicId
                        ? imgSrc
                        : "/default-avatar.png"
                    }
                    alt="avatar"
                    className="scale-125"
                  />
                </div>
              </>
            ) : (
              <>
                <NavLink to="/login">
                  <p>Login</p>
                </NavLink>

                <CtaBtn url="/signup" className="text-white -ml-1">
                  <p> Signup</p>
                </CtaBtn>
              </>
            )}
          </nav>
        </div>
      </div>

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
            onClick={() => setOpen(!isOpen)}
            className="z-10 text-xl text-gray-400 cursor-pointer absolute p-2
            rounded-full border border-gray-400 -left-4 top-8 bg-white"
          >
            <IconClose />
          </div>

          <div className="flex flex-col  justify-between w-full h-full ">
            <div className="flex flex-col gap-8">
              <div className="flex items-center gap-4 py-4 px-10 border-b border-gray-400">
                <div className="bg-white border border-gray-400 w-16 h-16 rounded-full overflow-hidden">
                  <Image
                    src={
                      isActivated && profileData.profilePicId
                        ? imgSrc
                        : "/default-avatar.png"
                    }
                    alt="avatar"
                    className="scale-125"
                  />
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
                      onClick={() => setOpen(!isOpen)}
                      to={`/profile/${userData?.$id}`}
                    >
                      <p>Profile</p>
                    </NavLink>

                    <NavLink onClick={() => setOpen(!isOpen)} to="/dashboard">
                      <p>Dashboard</p>
                    </NavLink>
                  </>
                ) : (
                  <Link to="/get-started">
                    <p>Create Profile</p>
                  </Link>
                )}

                {/* <NavLink
                  onClick={() => setOpen(!isOpen)}
                  to={`/profile/${userData?.$id}`}
                >
                  <p>Profile</p>
                </NavLink>

                <NavLink onClick={() => setOpen(!isOpen)} to="/dashboard">
                  <p>Dashboard</p>
                </NavLink> */}
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
    </>
  );
}

export default Navbar;
