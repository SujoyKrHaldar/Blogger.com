import { MetaTags, SettingsLayout } from "../../../components";
import { Outlet } from "react-router-dom";

function Settings() {
  return (
    <>
      <MetaTags
        title="Settings • Blogger.com"
        description="manage account"
        conicalRoute="/Settings"
      />

      <SettingsLayout>
        <Outlet />
      </SettingsLayout>
    </>
  );
}

export default Settings;
