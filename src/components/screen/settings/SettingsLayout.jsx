/* eslint-disable react/prop-types */
import SettingsNavbar from "./SettingsNavbar";

function SettingsLayout({ children }) {
  return (
    <section className="container w-full h-screen py-0 flex gap-4 overflow-auto">
      <div className="flex-1 max-w-[280px] sticky top-0">
        <SettingsNavbar />
      </div>
      <div className="flex-1">{children}</div>
    </section>
  );
}

export default SettingsLayout;
