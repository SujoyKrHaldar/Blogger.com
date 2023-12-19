/* eslint-disable react/prop-types */
import AccountSettings from "./tabs/AccountSettings";
import BrandSettings from "./tabs/BrandSettings";
import DeleteProfile from "./tabs/DeleteProfile";
import ProfileSettings from "./tabs/ProfileSettings";
import SessionSettings from "./tabs/SessionSettings";
import SocialSettings from "./tabs/SocialSettings";

function SettingsBody({ tab }) {
  return (
    <>
      {/* {tab === "profile" && <ProfileSettings />} */}
      {!tab && <ProfileSettings />}
      {tab === "account" && <AccountSettings />}
      {tab === "branding" && <BrandSettings />}
      {tab === "social" && <SocialSettings />}
      {tab === "session" && <SessionSettings />}
      {tab === "deactivate" && <DeleteProfile />}
    </>
  );
}

export default SettingsBody;
