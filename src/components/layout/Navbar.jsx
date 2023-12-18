import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  DISABLE_PROFILE,
  LOGOUT,
  SHOW_LOADING,
  SHOW_NOTIFICATION,
} from "../../global";
import { assetService, authService } from "../../service";
import MainNavbar from "./MainNavbar";
import SideNavbar from "./SideNavbar";

function Navbar() {
  const dispatch = useDispatch();

  const [isOpen, setOpen] = useState(false);
  const { authStatus, userData } = useSelector((state) => state.auth);
  const { profileData, isActivated } = useSelector((state) => state.profile);

  const imgSrc = profileData?.profilePicId
    ? assetService.getAssetPreview(profileData.profilePicId)
    : "/default-avatar.png";

  const toggelMenu = () => setOpen(!isOpen);

  const handleLogout = async () => {
    setOpen(!isOpen);

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
    <>
      <MainNavbar
        authStatus={authStatus}
        toggelMenu={toggelMenu}
        imgSrc={imgSrc}
      />

      <SideNavbar
        toggelMenu={toggelMenu}
        handleLogout={handleLogout}
        profileData={profileData}
        isActivated={isActivated}
        userData={userData}
        isOpen={isOpen}
        imgSrc={imgSrc}
      />
    </>
  );
}

export default Navbar;
