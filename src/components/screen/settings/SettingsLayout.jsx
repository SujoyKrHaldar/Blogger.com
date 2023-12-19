/* eslint-disable react/prop-types */
import SettingsNavbar from "./SettingsNavbar";

function SettingsLayout({ children, tab }) {
  return (
    <section className="container w-full h-screen py-0 flex gap-4">
      <div className="flex-1 max-w-[280px]">
        <SettingsNavbar tab={tab} />
      </div>
      <div className="flex-1">{children}</div>
    </section>
  );
}

export default SettingsLayout;
