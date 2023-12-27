import CustomNavLink from "../../shared/CustomNavLink";

const links = [
  {
    name: "Profile",
    url: "/settings",
  },
  {
    name: "Branding",
    url: "/settings/branding",
  },
  {
    name: "Account",
    url: "/settings/account",
  },
  {
    name: "Social Links",
    url: "/settings/social",
  },
  {
    name: "Sessions",
    url: "/settings/session",
  },
];

function SettingsNavbar() {
  return (
    <div className="pt-28 pb-8 pl-1 w-full h-full flex flex-col justify-between border-r border-black">
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">Settings</h1>

        <nav className="space-y-2">
          {links.map((data) => (
            <CustomNavLink className="block py-2" key={data.name} to={data.url}>
              <p>{data.name}</p>
            </CustomNavLink>
          ))}
        </nav>
      </div>
    </div>
  );
}

export default SettingsNavbar;
