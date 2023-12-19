import { MetaTags } from "../../components";
import DashboardNavbar from "../../components/screen/dashboard/DashboardNavbar";

function Settings() {
  return (
    <>
      <MetaTags
        title="Settings • Blogger.com"
        description="manage account"
        conicalRoute="/Settings"
      />

      <section className="container w-full h-screen py-0">
        <DashboardNavbar />
      </section>
    </>
  );
}

export default Settings;
