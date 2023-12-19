import { MetaTags, SettingsBody, SettingsLayout } from "../../components";
import { useLocation } from "react-router-dom";

function Settings() {
  const location = useLocation();
  const searchQuery = new URLSearchParams(location.search);
  const tab = searchQuery.get("tab");

  return (
    <>
      <MetaTags
        title="Settings • Blogger.com"
        description="manage account"
        conicalRoute="/Settings"
      />

      <SettingsLayout tab={tab}>
        <SettingsBody tab={tab} />
      </SettingsLayout>
    </>
  );
}

export default Settings;
